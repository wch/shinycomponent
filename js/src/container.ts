import { LitElement, TemplateResult, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { extractTabsFromElements, selectTabByIndex } from "./TabBar";
import { CustomElementInputGetValue } from "./shiny/make-input-binding";
import { TabLabel } from "./tab";
import { getElementsFromSlotChangeEvent } from "./utils/getElementsFromSlotChangeEvent";

TabLabel;
/**
 * Information about a tab in the dashboard that is used for rendering and
 * choosing tabs
 */
type TabInfo = {
  /**
   * Name of the tab as provided by the tab's name attribute
   */
  name: string;
  /**
   * Value of the tab as provided by the tab's name attribute but with spaces
   * replaced by underscores. Needed for the select input that is used in mobile
   */
  value: string;
  /**
   * The tab element itself
   */
  el: HTMLElement;
  /**
   * The tab label element. If provided in the Dom as a tab-label element, then
   * this is the element itself. Otherwise, it's a template result that is
   * rendered as a tab-label element
   */
  label: HTMLElement | TemplateResult;
};

export type TabElements = TabInfo[];

/**
 * A custom element that acts like a flexible layout container. It can have a
 * header, sidebar, and footer added to it. It is used as the base for other
 * elements like cards and dashboard layouts. Typically this component isn't
 * used directly.
 *
 * @element sc-container
 *
 * @cssprop --container-padding - The padding of the container.
 * @cssprop --container-radius - The border radius of the container.
 * @cssprop --child-radius - The border radius of the container's children. Defaults
 * to nothing
 * @cssprop --container-h - The height of the container. Typically set by the `height`
 * attribute instead of this variable.
 * @cssprop --spacing - The spacing between elements in the container.
 * @cssprop --container-shadow - The shadow of the container.
 * @cssprop --container-bg - The surface color of the container.
 */
@customElement("sc-container")
export class Container
  extends LitElement
  implements CustomElementInputGetValue<string>
{
  /**
   * The height of the container. If a number is used, the height wil be set to that
   * number in pixels. If "content" is used, then the container will take the minimum
   * height needed to contain all the children (aka typical block-layout
   * behavior). This value is typically left unset and the container is allowed to to
   * sized by it's containing environment.
   *
   * @attr height
   */
  @property() height?: "content" | number;

  /**
   * Whether the content of the container should be centered or not.
   *
   * @attr centercontent
   */
  @property({ type: Boolean, reflect: true }) centercontent: boolean = false;

  /**
   * Should the contents of the container take their natural size instead of filling remaining space in the container?
   *
   * @attr nofill
   */
  @property({ type: Boolean, reflect: true }) nofill: boolean = false;

  /**
   * Whether the dashboard should have sidebar navigation. Only used if the dashboard has tabs.
   */
  @property({ type: Boolean, reflect: true }) tabsOnSide: boolean = false;

  /**
   * The index of the selected tab. Only used if the dashboard has tabs.
   */
  @property({ type: Number }) selectedTabIndex: number = 0;

  /**
   * An array of objects that contain information about each tab in the dashboard.
   */
  @state() tabs: TabElements = [];

  /**
   * Since the container will report the current tab selected (if tabs are
   * present), we need to define a onChangeCallaback
   */
  onChangeCallback: (x: boolean) => void = (x: boolean) => {};

  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      --container-padding: var(--item-padding, var(--size-m));
      --content-padding: var(--container-padding);
      --content-gap: var(--spacing, var(--size-s));

      border: var(--border-standard);
      border-radius: var(--container-radius);
      box-shadow: var(--container-shadow);
      background-color: var(--container-bg);
      overflow: hidden;
      flex: 1 1 auto;
      display: grid;
      grid-template:
        "vtabs header  header" auto
        "vtabs tabs    tabs" auto
        "vtabs sidebar body" 1fr
        "vtabs footer  footer" auto /
        auto auto 1fr;
      isolation: isolate;

      height: var(--container-h, 100%);
      max-height: 100%;

      /* We use inline-size here because the more broad "size" value will force
      this element to declare its height explicitely. We only really care about
      width for container queries so that's fine. This is a funny gotcha though
      that isn't obvious */
      container-type: inline-size;
    }

    :host([tabsOnSide]) {
      /* grid-template:
        "header header" auto
        "sidebar body" 1fr
        "footer footer" auto /
        auto 1fr; */
    }

    :host([height]) {
      height: var(--container-h);
      flex: 0 0 var(--container-h);
    }

    :host([height="content"]) {
      height: fit-content;
      flex-basis: content;
    }

    tab-bar[orientation="horizontal"] {
      grid-area: tabs;
    }

    tab-bar[orientation="vertical"] {
      grid-area: vtabs;
    }

    .header {
      grid-area: header;
      z-index: 3;
      position: relative;
    }

    .footer {
      grid-area: footer;
      z-index: 2;
      position: relative;
    }

    .sidebar {
      grid-area: sidebar;
      position: relative;
      z-index: 1;
    }

    .body {
      grid-area: body;
      display: flex;
      flex-direction: column;
      padding: var(--content-padding);
      gap: var(--content-gap);
      overflow: auto;
      z-index: 0;
    }

    :host([nofill]) .body {
      display: block;
    }

    /* Make block-layout slotted children stretch without neccesary needing to
    specify it themselves. There's a special exception for inputs which we put
    into divs. This will leave text alone etc. It's unclear if this list should
    be expanded or not or if this is too strong of a selector but it seems
    reasonable. */
    ::slotted(:is(div:not(.shiny-input-container), section)) {
      flex: 1;
    }

    /* Need to set all children as block display to keep behavior similar to flex */
    :host([nofill]) .body > ::slotted(*) {
      display: block;
      border-radius: var(--child-radius);
    }

    :host([centercontent]) .body {
      display: grid;
      place-content: center;
      overflow: auto;
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    if (this.height) {
      // If the height is a pure number, add px to the end of it. Otherwise assume it's a css length and just use it as providede
      const height =
        typeof this.height === "number" ? `${this.height}px` : this.height;
      this.style.setProperty("--container-h", height);
    }
  }

  watchMainSlot(e: Event) {
    this.tabs = extractTabsFromElements(getElementsFromSlotChangeEvent(e));
    this.selectTab();
  }

  selectTab(tabIndex: number = this.selectedTabIndex) {
    this.selectedTabIndex = tabIndex;
    selectTabByIndex(this.tabs, tabIndex);
    this.onChangeCallback(true);
  }

  currentTabName(): string {
    return this.tabs[this.selectedTabIndex].name;
  }

  getValue(): string {
    return this.currentTabName();
  }

  render() {
    return html`
      <div class="header">
        <slot name="header"></slot>
      </div>
      <tab-bar
        .tabs=${this.tabs}
        @selection=${(e: CustomEvent) => {
          this.selectTab(e.detail.index);
        }}
        orientation=${this.tabsOnSide ? "vertical" : "horizontal"}
      ></tab-bar>
      <div class="sidebar">
        <slot name="sidebar"></slot>
      </div>
      <div class="body">
        <slot @slotchange=${this.watchMainSlot}></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    `;
  }
}

export class ContainerSlot extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      --container-padding: var(--item-padding, var(--size-m));

      display: block;
      padding-inline: var(--container-padding);
      padding-block: var(--container-padding);
    }

    :host([slot="header"]) {
      border-bottom: var(--border-standard);
    }

    :host([slot="footer"]) {
      border-top: var(--border-standard);
    }

    ::slotted(*) {
      margin: 0;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

/**
 * Custom element to be paired with `<shiny-card>` to display a header stuck at
 * the top of the card.
 */
@customElement("sc-header")
export class Header extends ContainerSlot {
  @property({ type: String, reflect: true }) slot = "header";
}

/**
 * Custom element to be paired with `<shiny-card>` to display a footer stuck at
 * the bottom of the card.
 */
@customElement("sc-footer")
export class Footer extends ContainerSlot {
  @property({ type: String, reflect: true }) slot = "footer";
}
