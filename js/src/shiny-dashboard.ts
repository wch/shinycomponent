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
  @state() tabs: TabElements = [];

  @state() hasHeader: boolean = false;

  onChangeCallback: (x: boolean) => void = (x: boolean) => {};

  // Watch for additions the header slot. If they exist we make sure they're
  // legit and show the header.
  watchHeaderSlot(e: Event) {
    this.hasHeader = getElementsFromSlotChangeEvent(e).length > 0;
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
        $(tab.el).trigger("hidden");
        // Make sure that screen readers know to not include the hidden tabs
        tab.el.inert = true;
        tab.el.style.display = "none";
      }

      // Is this tab the one being shifted to?
      const showingTab = currentlyHidden && isSelected;
      if (showingTab) {
        $(tab.el).trigger("shown");
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
        "sidebar header" auto
        "sidebar content" 1fr
        "sidebar footer" auto /
        auto 1fr;
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

    .tabs {
      --container-radius: var(--radius-m);
      --container-pad: var(--size-xxs);

      /* Subtract padding from radius of tabs so they fit like they've shrunk down */
      --child-radius: calc(var(--container-radius) - var(--container-pad));

      /* border-radius: var(--container-radius); */
      padding: var(--container-pad);
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      row-gap: var(--size-xs);
    }

    .tab {
      --underline-thickness: var(--border-thin);

      cursor: pointer;
      position: relative;
      padding-inline: var(--size-m);
      padding-block: var(--size-s);
      color: var(--text-3);
      border-color: var(--text-3);
      border-style: solid;
      border-width: 0 0 var(--underline-thickness) 0;
      opacity: 0.8;
    }

    .selected-tab {
      opacity: 1;
      color: var(--text-1);
    }

    .selected-tab::after {
      --highlight-thickness: calc(var(--underline-thickness) * 2);

      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: var(--highlight-thickness);
      background-color: var(--text-3);
      border-radius: var(--radius-pill);
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

  render() {
    const hideHeader = this.tabs.length === 0 && !this.hasHeader;
    return html`
      <div class="tabset">
        <div class="header ${hideHeader ? "empty-header" : ""}">
          <slot name="header" @slotchange=${this.watchHeaderSlot}></slot>
          <div class="tabs">
            ${this.tabs.map(
              (tab, i) =>
                html`<div
                  class="tab ${i === this.selected_tab_index
                    ? "selected-tab"
                    : ""}"
                  @click=${() => this.selectTab(i)}
                >
                  ${tab.name}
                </div>`
            )}
          </div>
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
