import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "./make-input-binding";
type TabElements = { name: string; el: HTMLElement }[];

// Regex to detect text that's exclusively whitespace or newlines
const detectEmptyText = /^\s*$/;

@customElement("shiny-page")
export class ShinyPage
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
    const slot = e.target as HTMLSlotElement | null;

    if (!slot) return;

    const nodesInSlot = slot
      .assignedNodes({ flatten: true })
      .filter(
        (node) =>
          node instanceof HTMLElement &&
          !detectEmptyText.test(node.innerHTML ?? "")
      );

    this.hasHeader = nodesInSlot.length > 0;
  }

  watchMainSlot(e: Event) {
    const slot = e.target as HTMLSlotElement | null;

    if (!slot) return;

    // Sometimes we get node that are just newlines and empty text. These don't
    // matter as they dont inclunce the appearnace of the app so we can filter
    // them out before working with the slotted elements

    const nodesInSlot = slot
      .assignedNodes({ flatten: true })
      .filter((node) => !detectEmptyText.test(node.textContent ?? ""));

    this.tabs = nodesInSlot.reduce<TabElements>((all, node) => {
      if (
        node instanceof HTMLElement &&
        node.tagName.toLowerCase() === "shiny-tab"
      ) {
        const tabName = node.attributes.getNamedItem("name")?.value;

        if (!tabName) {
          return all;
        }

        all.push({ name: tabName, el: node });
      }

      return all;
    }, []);

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

      display: block;
      height: 100%;
      container-type: size;
      background-color: var(--surface-3);
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
      background-color: var(--surface-1);
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

      border-radius: var(--container-radius);
      padding: var(--container-pad);
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      background-color: var(--surface-4);
    }

    .tab {
      cursor: pointer;
      position: relative;
      padding-inline: var(--size-m);
      border-radius: var(--child-radius);
      color: var(--text-2);
    }

    .selected-tab {
      background-color: var(--surface-1);
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

makeInputBinding("shiny-page");

declare global {
  interface HTMLElementTagNameMap {
    "shiny-page": ShinyPage;
  }
}
