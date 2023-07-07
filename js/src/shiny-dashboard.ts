import { LitElement, TemplateResult, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "./shiny/make-input-binding";
import { themePrimitives } from "./styles/op-classes";
import { TabLabel } from "./tab";
import { getElementsFromSlotChangeEvent } from "./utils/getElementsFromSlotChangeEvent";

// Force evaluation of TabLabel so it's available for the custom element
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

type TabElements = TabInfo[];

/**
 * A dashboard that can have tabs and a sidebar.
 * Supported children include `<shiny-tab>` elements to add tabbed-navigation, and
   `<shiny-sidebar>` elements to add a collapsible sidebar.
  *
  * @element shiny-dashboard
*
*/
@customElement("shiny-dashboard")
export class ShinyDashboard
  extends LitElement
  implements CustomElementInputGetValue<string>
{
  /**
   * A boolean property that determines whether the dashboard should have
   * dynamic height or not. If set to False (the default) then the dashboard
   * will stretch to fill the vertical height of containing element.
   */
  @property({ type: Boolean }) dynamicHeight: boolean = false;

  /**
   * The index of the selected tab. Only used if the dashboard has tabs.
   */
  @property({ type: Number }) selectedTabIndex: number = 0;

  /**
   * Whether the dashboard should have sidebar navigation. Only used if the dashboard has tabs.
   */
  @property({ type: Boolean }) tabsOnSide: boolean = false;

  /**
   * An array of objects that contain information about each tab in the dashboard.
   */
  @state() tabs: TabElements = [];

  /**
   * A boolean property that determines whether the dashboard has contents in the header slot or not.
   */
  @state() hasHeaderContents: boolean = false;

  onChangeCallback: (x: boolean) => void = (x: boolean) => {};

  // Watch for additions the header slot. If they exist we make sure they're
  // legit and show the header.
  watchHeaderSlot(e: Event) {
    this.hasHeaderContents = getElementsFromSlotChangeEvent(e).length > 0;
  }

  watchMainSlot(e: Event) {
    this.tabs = extractTabsFromElements(getElementsFromSlotChangeEvent(e));
    console.log("Tab search results", this.tabs);
    this.selectTab();
  }

  selectTab(tabIndex: number = this.selectedTabIndex) {
    this.selectedTabIndex = tabIndex;
    selectTabByIndex(this.tabs, tabIndex);
    this.onChangeCallback(true);
  }

  // Callback used in the select input for mobile mode tab selection
  handleTabSelect(event: Event) {
    const selectedTabName = (
      event.target as HTMLSelectElement
    ).value.replaceAll("_", " ");
    const selectedTabIndex = this.tabs.findIndex(
      (tab) => tab.name === selectedTabName
    );
    this.selectTab(selectedTabIndex);
  }

  currentTabName(): string {
    return this.tabs[this.selectedTabIndex].name;
  }

  getValue(): string {
    return this.currentTabName();
  }

  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      --padding: var(--size-m);
      --page-h: 100%;

      ${themePrimitives.surface_3}

      display: block;
      height: 100%;
      container-type: inline-size;
      overflow: auto;
    }

    :host([dynamicHeight]) {
      --page-h: auto;
    }

    .tabset {
      height: var(--page-h);
      width: 100%;
      display: grid;
      grid-template:
        "nav sidebar header" auto
        "nav sidebar content" 1fr
        "nav sidebar footer" auto /
        auto auto 1fr;
      isolation: isolate;
    }

    .tabset > * {
      min-width: 0;
      min-height: 0;
    }

    .sidebar {
      z-index: 3;
      padding: 0;
      grid-area: sidebar;

      ${themePrimitives.surface_1}
    }

    .main {
      z-index: 1;
      grid-area: content;
      padding: var(--padding);
    }

    .header,
    .footer {
      /* Use background image if passed */
      background-image: var(--header-bg-image);
      z-index: 2;
      margin: 0;
      display: flex;
      align-items: center;
      gap: var(--padding);
    }

    .header {
      grid-area: header;
    }

    .header.empty-header {
      display: none;
    }

    .header-right {
      margin-left: auto;
    }

    .nav {
      /* Some variables that control the little bars that demarkate tabs and
      also show what is selected */
      --tab-border-color: var(--text-2);

      grid-area: nav;
      display: flex;
      flex-flow: row nowrap;
      width: 100%;
      align-items: baseline;
      justify-content: space-between;
      border-block-end: 1px solid var(--border-color);
      padding: var(--size-m);
      gap: var(--size-s);
      background-color: var(--surface-1);
    }

    .tab {
      cursor: pointer;
      position: relative;
      padding-inline: var(--size-m);

      /* Use the container padding for the top of the tab */
      padding-block: var(--size-xs);
      color: var(--text-1);

      /* Add elipses to prevent overflow for tab names that are too long */
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      transition: background-color var(--transition-fast);
      border-radius: var(--radius-s);
    }

    .selected-tab {
      background-color: var(--surface-3);
    }

    .nav.sidebar-nav {
      overflow: auto;
      flex-flow: column nowrap;
      border-inline-end: 1px solid var(--border-color);
      border-block-end: unset;
    }

    :host([tabsOnSide]) .after-nav {
      margin-block-start: auto;
    }

    .sidebar-nav .tab {
      flex-shrink: 0;
    }

    .nav .mobile-tabs {
      display: none;
    }

    .nav > * {
      flex-shrink: 5;
    }

    .tabs {
      flex-shrink: 1;
      display: flex;
      align-items: end;
      row-gap: var(--size-xs);
      position: relative;
      width: auto;
      border-radius: var(--radius-s);
      background-color: var(--surface-1);
      overflow: hidden;
      gap: var(--size-xs);
    }

    .sidebar-nav .tabs {
      border-width: 1;
      min-width: unset;
      flex-flow: column nowrap;
      align-items: stretch;
      overflow: auto;
      max-width: var(--size-content-1);
    }

    .tab:last-child {
      border-inline-end: unset;
    }

    .tab:hover:not(.selected-tab) {
      background-color: var(--surface-4);
    }

    :host([tabsOnSide]) .tab {
      padding-block: var(--size-xs);
      border-inline-end: unset;
    }

    .footer {
      grid-area: footer;
    }

    .footer > ::slotted(*) {
      padding: var(--padding);
      padding-block-start: 0;
    }

    .header > ::slotted(div) {
      margin: 0;
      padding: 0;
    }

    /* Mobile styles */

    .mobile-tabs select {
      background-color: inherit;
      accent-color: pink;
    }

    @container (width < 500px) {
      /* Hide the tabs and show the select */
      .nav:not(.sidebar-nav) .mobile-tabs {
        display: unset;
      }

      .nav:not(.sidebar-nav) .tabs {
        display: none;
      }
    }
  `;

  showHeader() {
    if (this.hasHeaderContents) return true;

    // If we have tabs and they're meant to be shown on the top of the page,
    // then we need to show the header
    if (this.tabs.length > 0 && !this.tabsOnSide) return true;

    return false;
  }

  render() {
    const tabs = this.tabs.map((tab, i) => {
      const isSelected = i === this.selectedTabIndex;
      return html`<div
        class="tab ${isSelected ? "selected-tab" : ""}"
        @click=${() => this.selectTab(i)}
        title=${isSelected ? `Current: ${tab.name}` : `Switch to: ${tab.name}`}
      >
        ${tab.label}
      </div>`;
    });

    const tabContainer = html`<div
      class="nav ${this.tabsOnSide ? "sidebar-nav" : ""}"
    >
      <div class="nav-slot before-nav">
        <slot name="before_navigation"></slot>
      </div>
      <div class="tabs">${tabs}</div>
      <div class="mobile-tabs">
        <sl-select
          @sl-change=${this.handleTabSelect}
          value=${this.tabs[this.selectedTabIndex]?.value ?? ""}
        >
          ${this.tabs.map(
            (tab) =>
              html`<sl-option value="${tab.value}">${tab.name}</sl-option>`
          )}
        </sl-select>
      </div>
      <div class="nav-slot after-nav">
        <slot name="after_navigation"></slot>
      </div>
    </div>`;

    return html`
      <div class="tabset">
        ${this.tabsOnSide ? tabContainer : ""}
        <div class="header ${this.showHeader() ? "" : "empty-header"}">
          <slot name="header" @slotchange=${this.watchHeaderSlot}></slot>
          ${this.tabsOnSide ? "" : tabContainer}
        </div>
        <div class="sidebar">
          <slot name="sidebar"></slot>
        </div>
        <div class="main">
          <slot @slotchange=${this.watchMainSlot}></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}
makeInputBinding("shiny-dashboard");

function extractTabsFromElements(elements: HTMLElement[]) {
  const tabElements: TabElements = [];

  const tabNodes = document.querySelectorAll<HTMLElement>("shiny-tab[name]");

  tabNodes.forEach((node) => {
    const tabName = node.attributes.getNamedItem("name")?.value;
    const tabIcon = node.attributes.getNamedItem("icon")?.value;

    if (!tabName) {
      return;
    }

    // Check for a custom label
    const tabLabel = node.querySelector<TabLabel>("tab-label");

    tabElements.push({
      name: tabName,
      value: tabName.replaceAll(" ", "_"),
      el: node,
      label:
        tabLabel ??
        html`
          <tab-label>
            ${tabIcon ? html`<shiny-icon name=${tabIcon}></shiny-icon>` : ""}
            ${tabName}
          </tab-label>
        `,
    });
  });

  return tabElements;
}

function selectTabByIndex(tabs: TabElements, index: number) {
  tabs.forEach((tab, i) => {
    const isSelected = i === index;
    const currentlyHidden = tab.el.style.display === "none";

    // Is this tab the one being shifted away from?
    const hidingTab = !currentlyHidden && !isSelected;
    if (hidingTab) {
      if (typeof $ !== "undefined") {
        $(tab.el).trigger("hidden");
      }
      // Make sure that screen readers know to not include the hidden tabs
      tab.el.inert = true;
      tab.el.style.display = "none";
    }

    // Is this tab the one being shifted to?
    const showingTab = currentlyHidden && isSelected;
    if (showingTab) {
      if (typeof $ !== "undefined") {
        $(tab.el).trigger("shown");
      }
      tab.el.inert = false;
      tab.el.style.display = "block";
    }
  });
}

declare global {
  interface HTMLElementTagNameMap {
    "shiny-dashboard": ShinyDashboard;
  }
}
