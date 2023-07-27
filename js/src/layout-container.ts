import { CSSResultGroup, LitElement, TemplateResult, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { CustomElementInputGetValue } from "./shiny/make-input-binding";
import { extractTabsFromElements, selectTabByIndex } from "./tabs/TabBar";

/**
 * Information about a tab in the dashboard that is used for rendering and
 * choosing tabs
 */
export type TabInfo = {
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
 * CSS selectors used to specify which elements should be allowed to flex by default
 */
const flexibleElementSelectors = css`{[".shiny-plot-output"].join(", ")}`;

/**
 * A custom element that acts like a flexible layout container. It can have a
 * header, sidebar, and footer added to it. It is used as the base for other
 * elements like cards and dashboard layouts. Typically this component isn't
 * used directly.
 *
 * @element sc-layout-container
 *
 * @cssprop --layout-container-padding - The padding of the container.
 * @cssprop --layout-container-radius - The border radius of the container.
 * @cssprop --layout-container-child-radius - The border radius of the container's children. Defaults
 * to nothing
 * @cssprop --layout-container-border - The border of the container.
 * @cssprop --layout-container-shadow - The shadow of the container.
 * @cssprop --layout-container-bg - The surface color of the container.
 * @cssprop --layout-container-h - The height of the container. Typically set by the `height`
 * attribute instead of this variable.
 */
@customElement("sc-layout-container")
export class LayoutContainer
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
  @property({ type: Boolean, reflect: true, attribute: "sidebar-nav" })
  sidebarNav: boolean = false;

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

  static styles: CSSResultGroup = css`
    * {
      box-sizing: border-box;
    }

    :host {
      /* All the available css properties to customize. Some have defaults and
      some dont */
      --_layout-container-bg: var(--layout-container-bg);
      --_layout-container-padding: var(
        --layout-container-padding,
        var(--size-s)
      );
      --_layout-container-gap: var(
        --layout-container-gap,
        var(--_layout-container-padding)
      );
      --_layout-container-border: var(
        --layout-container-border,
        var(--border-standard)
      );
      --_layout-container-shadow: var(--layout-container-shadow);
      --_layout-container-radius: var(--layout-container-radius);
      --_layout-container-child-radius: var(--layout-container-child-radius);
      --_layout-container-h: var(--layout-container-h, 100%);

      border: var(--_layout-container-border);
      border-radius: var(--_layout-container-radius);
      box-shadow: var(--_layout-container-shadow);
      background-color: var(--_layout-container-bg);
      overflow: hidden;
      flex: 1 1 auto;
      display: grid;
      grid-template:
        "header header  header" auto
        "vtabs tabs    tabs" auto
        "vtabs sidebar body" 1fr
        "footer footer  footer" auto /
        auto auto 1fr;
      isolation: isolate;
      height: var(--_layout-container-h);
      max-height: 100%;

      /* We use inline-size here because the more broad "size" value will force
      this element to declare its height explicitely. We only really care about
      width for container queries so that's fine. This is a funny gotcha though
      that isn't obvious */
      container-type: inline-size;
      container-name: sc-layout-container;
    }

    @container sc-layout-container (width < 300px) {
      ::slotted(:is(sc-header, sc-footer, shiny-sidebar)),
      tab-bar,
      .body {
        --_layout-container-padding: var(
          --layout-container-padding,
          var(--size-s)
        );
      }
    }

    :host([height]) {
      height: var(--_layout-container-h);
      flex: 0 0 var(--_layout-container-h);
    }

    :host([height="content"]) {
      height: fit-content;
      flex-basis: content;
    }

    tab-bar {
      padding: var(--_layout-container-padding);
    }

    tab-bar[orientation="horizontal"] {
      grid-area: tabs;
      padding-block: calc(var(--_layout-container-padding) / 1.5);
    }

    tab-bar[orientation="vertical"] {
      grid-area: vtabs;
    }

    ::slotted(sc-header) {
      grid-area: header;
      z-index: 3;
      border-bottom: var(--border-standard);
    }

    ::slotted(sc-footer) {
      grid-area: footer;
      z-index: 2;
      border-top: var(--border-standard);
    }

    ::slotted(sc-header),
    ::slotted(sc-footer) {
      padding-inline: var(--_layout-container-padding);
      padding-block: calc(var(--_layout-container-padding) / 1.5);
      position: relative;
    }

    ::slotted(shiny-sidebar) {
      grid-area: sidebar;
      position: relative;
      z-index: 1;
    }

    .body {
      grid-area: body;
      display: flex;
      flex-direction: column;
      padding: var(--_layout-container-padding);
      gap: var(--_layout-container-gap);
      overflow: auto;
      z-index: 0;
    }

    /* Let the tab containers take care of padding */
    .body.withTabs {
      padding: 0;
    }

    :host([nofill]) .body {
      display: block;
    }

    /* List of items who should explicitely not be flexing to fit available space. The choice to do this in the direction of explicitely choosing what _doesnt_ rather than what _does_ flex is semi-arbitrary. The idea being that  */
    ::slotted(:is(p, span, h1, h2, h3, h4, h5, h6, label)) {
      flex: 0 0 auto;
    }

    /* stylelint-disable-next-line selector-type-no-unknown, selector-type-case */
    ::slotted(div:not(${flexibleElementSelectors})) {
      flex: 0 0 auto;
    }

    /* Allow elements to say they can flex with a special property */
    ::slotted([can-flex]) {
      flex: 1 1 auto;
    }

    /* This is needed to keep sizing as expected for flex-items. Why? No one
    knows. But if you remove this there will be infinite resizing loops for
    plots... sometimes */
    .body > ::slotted(*) {
      min-height: 0;
    }

    /* Need to set all children as block display to keep behavior similar to flex */
    :host([nofill]) .body > ::slotted(*) {
      display: block;
      border-radius: var(--_layout-container-child-radius);
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
      this.style.setProperty("--layout-container-h", height);
    }
  }

  watchMainSlot(e: Event) {
    this.tabs = extractTabsFromElements(this);
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
    const hasTabs = this.tabs.length > 0;
    return html`
      <slot name="header"></slot>
      <tab-bar
        .tabs=${this.tabs}
        @selection=${(e: CustomEvent) => {
          this.selectTab(e.detail.index);
        }}
        orientation=${this.sidebarNav ? "vertical" : "horizontal"}
        part="tabs"
      >
        <slot name="before_navigation" slot="before_navigation"> </slot>
        <slot name="after_navigation" slot="after_navigation"> </slot>
      </tab-bar>
      <slot name="sidebar"></slot>
      <div class="body ${hasTabs ? "withTabs" : ""}" part="body">
        <slot @slotchange=${this.watchMainSlot}></slot>
      </div>
      <slot name="footer"></slot>
    `;
  }
}

class ContainerSlot extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
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
