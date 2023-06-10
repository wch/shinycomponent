import { LitElement, css, html } from "lit";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "./make-input-binding";

type TabElements = { name: string; el: HTMLElement }[];
export class Tabset
  extends LitElement
  implements CustomElementInputGetValue<string>
{
  tabs: TabElements = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  selected_tab_index: number;
  static properties = {
    tabs: {},
    selected_tab_index: { type: Number },
  };

  onChangeCallback: (x: boolean) => void;

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      /* This is where all the variables are defined. If the user wants to
      update something they just have to replace the main variable and it
      doesn't cascade down to other elements
    */
      --_font: var(--font-family, sans-serif);
      --_main-bg: var(--main-bg, var(--color-bg));
      --_main-color: var(--main-color, var(--color-text));

      --_sidebar-bg: var(--sidebar-bg, var(--color-bg-1));
      --_sidebar-color: var(--sidebar-color, var(--color-text-1));
      --_sidebar-border: var(--sidebar-border, var(--border-small));

      --_tab-spacing: var(--tab-spacing, var(--size-2));
      --_tab-selection-thickness: var(
        --tab-selection-thickness,
        var(--border-medium)
      );
      --_tab_radius: var(--tab-radius, var(--radius-small));

      --_header-bg-color: var(--header-bg-color, var(--color-bg-2));
      --_header-bg-image: var(--header-bg-image);
      --_header-color: var(--header-color);
      --_header-font: var(--header-font, var(--font-sans));
      --_header-font-weight: var(--header-font-weight, var(--font-weight-3));
      --_header-font-size: var(--header-font-size, var(--font-size-fluid-1));
      --_header-padding: var(--header-padding, var(--size-fluid-1));

      display: block;
      font-family: var(--_font);
      height: 100%;
      background-color: var(--_main-bg);
      color: var(--_main-color);
      box-sizing: border-box;
    }

    .tabset {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template:
        "header  header" auto
        "sidebar content" 1fr
        "footer  footer" auto /
        auto 1fr;
      isolation: isolate;
    }

    .tabset > * {
      min-width: 0;
      min-height: 0;
    }

    .header,
    .footer,
    .sidebar {
      z-index: 2;
    }

    .main {
      z-index: 1;
    }

    .header,
    .footer {
      background-color: var(--_header-bg-color);
      /* Use background image if passed */
      background-image: var(--_header-bg-image);
      color: var(--_header-color);
      margin: 0;
      padding-inline: var(--_header-padding);
      display: flex;
      align-items: center;
      gap: var(--_header-padding);
    }

    .header {
      grid-area: header;
      font-family: var(--_header-font);
      font-weight: var(--_header-font-weight);
      padding-block: var(--_header-padding);
      margin: 0;
    }

    .selected-tab::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: var(--_tab-spacing);
      right: var(--_tab-spacing);
      height: var(--_tab-selection-thickness);
      border-radius: var(--_tab_radius);
      background-color: var(--color-primary);
    }

    .tabs {
      display: flex;
      flex-wrap: wrap;
      font-size: var(--font-size-fluid-1);
    }

    .tab {
      padding: var(--_tab-spacing);
      cursor: pointer;
      position: relative;
    }

    ::slotted([slot="header"]) {
      font-size: var(--_header-font-size);
      padding: var(--_tab-spacing);
    }

    .divider {
      background-color: var(--_header-color, var(--color-text-2));
      width: var(--border-small);
      height: 100%;
    }

    .sidebar {
      padding: 0;
      grid-area: sidebar;
      background-color: var(--_sidebar-bg);
      color: var(--_sidebar-color);
    }

    .main {
      grid-area: content;
      overflow: auto;
    }

    .footer {
      grid-area: footer;
    }

    .footer > ::slotted(*) {
      padding-block: var(--_header-padding);
    }
  `;

  constructor() {
    super();
    this.onChangeCallback = (x: boolean) => {};
    this.selected_tab_index = 0;
  }

  handleSlotchange(e: Event) {
    const slot = e.target as HTMLSlotElement | null;

    if (!slot) return;

    const nodesInSlot = slot.assignedNodes({ flatten: true });

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

  render() {
    return html`
      <div class="tabset">
        <div class="header">
          <slot name="header"></slot>
          <div class="divider"></div>
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
        </div>
        <div class="sidebar">
          <slot name="sidebar"></slot>
        </div>
        <div class="main">
          <slot @slotchange=${this.handleSlotchange}></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("shiny-tabset", Tabset);

makeInputBinding("shiny-tabset");

declare global {
  interface HTMLElementTagNameMap {
    "shiny-tabset": Tabset;
  }
}
