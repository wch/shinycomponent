import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "./shiny/make-input-binding";
import { themePrimitives } from "./styles/op-classes";
import { getElementsFromSlotChangeEvent } from "./utils/getElementsFromSlotChangeEvent";

type TabElements = { name: string; el: HTMLElement }[];

@customElement("shiny-dashboard")
export class ShinyDashboard
  extends LitElement
  implements CustomElementInputGetValue<string>
{
  @property({ type: Boolean }) dynamicHeight: boolean = false;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  @property({ type: Number }) selected_tab_index: number = 0;
  @property({ type: Boolean }) sidebarNavigation: boolean = false;
  @state() tabs: TabElements = [];

  @state() hasHeaderContents: boolean = false;

  onChangeCallback: (x: boolean) => void = (x: boolean) => {};

  // Watch for additions the header slot. If they exist we make sure they're
  // legit and show the header.
  watchHeaderSlot(e: Event) {
    this.hasHeaderContents = getElementsFromSlotChangeEvent(e).length > 0;
  }

  watchMainSlot(e: Event) {
    this.tabs = getElementsFromSlotChangeEvent(e).reduce<TabElements>(
      (all, node) => {
        if (node.tagName.toLowerCase() === "shiny-tab") {
          const tabName = node.attributes.getNamedItem("name")?.value;

          if (!tabName) {
            return all;
          }

          all.push({ name: tabName, el: node });
        }

        return all;
      },
      []
    );

    this.selectTab();
  }

  selectTab(tabIndex: number = this.selected_tab_index) {
    this.selected_tab_index = tabIndex;
    this.tabs.forEach((tab, i) => {
      const isSelected = i === tabIndex;
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

    this.onChangeCallback(true);
  }

  currentTabName(): string {
    return this.tabs[this.selected_tab_index].name;
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
      container-type: size;
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
      margin: 0;
      position: relative;
      padding: var(--padding);
      padding-block-end: 0;
      display: flex;
      justify-content: space-evenly;
      align-items: baseline;
    }

    .header.empty-header {
      display: none;
    }

    .header-right {
      margin-left: auto;
    }

    .nav {
      grid-area: nav;
      display: flex;
      flex-flow: row nowrap;
      width: 100%;
      /* gap: var(--size-s); */
    }

    .nav > .nav-slot {
      padding: var(--padding);
    }

    :host([sidebarNavigation]) .nav {
      flex-flow: column nowrap;
    }

    .tabs {
      /* Some variables that control the little bars that demarkate tabs and
      also show what is selected */
      --highlight-thickness-hover: var(--border-normal);
      --highlight-thickness-selected: var(--border-thick);
      --highlight-thickness: var(--border-thin);
      --highlight-radius: 2px;
      --highlight-border-radii: var(--highlight-radius) var(--highlight-radius)
        0 0;
      --highlight-color: var(--text-3);
      --highlight-color-selected: var(--text-1);
      --highlight-opacity: 0.75;

      /* Place highlight on bottom of tab */
      --highlight-inset: auto 0 0 0;

      flex: 1;
      display: flex;
      align-items: end;
      flex-wrap: wrap;
      row-gap: var(--size-xs);
      position: relative;
      width: 100%;
    }

    .tabs .selected-tab {
      --highlight-thickness: var(--highlight-thickness-selected);
      --highlight-color: var(--highlight-color-selected);
      --highlight-opacity: 1;
    }

    :host([sidebarNavigation]) .tabs {
      /* Place highlight to right of tab */
      --highlight-inset: 0 0 0 auto;
      --highlight-border-radii: var(--highlight-radius) 0 0
        var(--highlight-radius);

      flex-flow: column nowrap;
      align-items: stretch;
      overflow: auto;
      row-gap: 0;
      max-width: var(--size-content-1);
      height: 100%;
    }

    .tab {
      cursor: pointer;
      position: relative;
      padding-inline: var(--size-m);

      /* Use the container padding for the top of the tab */
      padding-block: 0 var(--size-s);
      color: var(--highlight-color);
      opacity: var(--highlight-opacity);

      /* Add elipses to prevent overflow for tab names that are too long */
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      transition: opacity var(--transition-fast);
    }

    .tab:hover:not(.selected-tab) {
      --highlight-thickness: var(--highlight-thickness-hover);
      --highlight-opacity: 1;

      background-color: var(--surface-4);
    }

    :host([sidebarNavigation]) .tab {
      padding-block: var(--size-s);
    }

    /* Use a psuedo-element to draw a line across all tabs */
    .tabs::after,
    .tab::after {
      content: "";
      position: absolute;
      background-color: var(--highlight-color);
      width: auto;
      height: var(--highlight-thickness);
      opacity: var(--highlight-opacity);
      inset: var(--highlight-inset);
      border-radius: var(--highlight-border-radii);
      transition: width var(--transition-fast), height var(--transition-fast);
    }

    .tab::after {
      --highlight-color: var(--highlight-color-selected);
    }

    /* Adjust so tab selection indicators are on the side rather than bottom */
    :host([sidebarNavigation]) .tab::after,
    :host([sidebarNavigation]) .tabs::after {
      height: auto;
      width: var(--highlight-thickness);
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
  `;

  showHeader() {
    if (this.hasHeaderContents) return true;

    // If we have tabs and they're meant to be shown on the top of the page,
    // then we need to show the header
    if (this.tabs.length > 0 && !this.sidebarNavigation) return true;

    return false;
  }

  render() {
    const tabs = this.tabs.map((tab, i) => {
      const isSelected = i === this.selected_tab_index;
      return html`<div
        class="tab ${isSelected ? "selected-tab" : ""}"
        @click=${() => this.selectTab(i)}
        title=${isSelected ? "Current tab" : `Switch to tab: ${tab.name}`}
      >
        ${tab.name}
      </div>`;
    });

    const tabContainer = html`<div class="nav">
      <div class="nav-slot"><slot name="before-nav"></slot></div>
      <div class="tabs">${tabs}</div>
      <div class="nav-slot"><slot name="after-nav"></slot></div>
    </div>`;

    return html`
      <div class="tabset">
        ${this.sidebarNavigation ? tabContainer : ""}
        <div class="header ${this.showHeader() ? "" : "empty-header"}">
          <slot name="header" @slotchange=${this.watchHeaderSlot}></slot>
          ${this.sidebarNavigation ? "" : tabContainer}
          <div class="header-right">
            <slot
              name="header-right"
              @slotchange=${this.watchHeaderSlot}
            ></slot>
          </div>
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

declare global {
  interface HTMLElementTagNameMap {
    "shiny-dashboard": ShinyDashboard;
  }
}
