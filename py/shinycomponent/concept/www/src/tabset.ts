import { LitElement, html, css } from "lit";

type TabElements = { name: string; el: HTMLElement }[];
export class Tabset extends LitElement {
  tabs: TabElements = [];
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
      display: block;
      font-family: var(--font-family, sans-serif);
      height: 100%;
    }

    .tabset {
      height: 100%;
      width: 100%;
      outline: 1px solid var(--border-color, black);
      border-radius: var(--radius-2);
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "header  header"
        "sidebar content"
        "footer  footer";
    }

    .tab {
      margin-inline: var(--size-1);
      padding: var(--size-1);
      cursor: pointer;
      position: relative;
    }

    .selected-tab::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: var(--size-1);
      right: var(--size-1);
      height: var(--border-size-3);
      border-radius: var(--radius-1);
      background-color: currentColor;
    }

    .tabset > * {
      min-width: 0;
      min-height: 0;
    }

    .header,
    .footer {
      background-image: var(--accent-gradient, var(--gradient-7));
      color: var(--stone-1);
    }

    .header {
      grid-area: header;
      font-family: var(--font-sans);
      font-weight: var(--font-weight-3);
      font-size: var(--font-size-fluid-1);
      padding-block: var(--size-fluid-1);
      margin: 0;
    }

    .header,
    .footer {
      margin: 0;
      padding-inline: var(--size-fluid-2);
      display: flex;
      gap: var(--size-3);
    }

    .divider {
      background-color: var(--border-color, black);
      width: var(--border-size-1);
      height: 100%;
    }

    .sidebar {
      padding: 0;
      grid-area: sidebar;
      background-color: var(--sidebar-bg-color, var(--stone-1));
      color: var(--sidebar-color, var(--stone-7));
    }

    .main {
      grid-area: content;
      padding: var(--size-fluid-3);
    }

    .footer {
      grid-area: footer;
    }

    .footer > ::slotted(*) {
      padding-block: var(--size-fluid-1);
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

    const nodes_in_slot = slot.assignedNodes({ flatten: true });

    this.tabs = nodes_in_slot.reduce<TabElements>((all, node) => {
      if (
        node instanceof HTMLElement &&
        node.tagName.toLowerCase() === "shiny-tab"
      ) {
        const tab_name = node.attributes.getNamedItem("name")?.value;

        if (!tab_name) {
          return all;
        }

        all.push({ name: tab_name, el: node });
      }

      return all;
    }, []);

    this.select_tab();
  }

  select_tab(tab_index: number = this.selected_tab_index) {
    this.selected_tab_index = tab_index;
    this.tabs.forEach((tab, i) => {
      const is_selected = i === tab_index;
      const currently_hidden = tab.el.style.display === "none";

      // Is this tab the one being shifted away from?
      const hiding_tab = !currently_hidden && !is_selected;
      if (hiding_tab) {
        $(tab.el).trigger("hidden");
        // Make sure that screen readers know to not include the hidden tabs
        tab.el.inert = true;
        tab.el.style.display = "none";
      }

      // Is this tab the one being shifted to?
      const showing_tab = currently_hidden && is_selected;
      if (showing_tab) {
        $(tab.el).trigger("shown");
        tab.el.inert = false;
        tab.el.style.display = "block";
      }
    });

    this.onChangeCallback(true);
  }

  current_tab_name(): string {
    return this.tabs[this.selected_tab_index].name;
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
                html`<span
                  class="tab ${i === this.selected_tab_index
                    ? "selected-tab"
                    : ""}"
                  @click=${() => this.select_tab(i)}
                  >${tab.name}</span
                >`
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

// Shiny input binding
const Shiny = window.Shiny as Shiny;

export class TabsetInputBinding extends Shiny.InputBinding {
  constructor() {
    super();
  }

  find(scope: HTMLElement): JQuery<HTMLElement> {
    return $(scope).find("shiny-tabset");
  }

  getValue(el: Tabset) {
    return el.current_tab_name();
  }

  subscribe(el: Tabset, callback: (x: boolean) => void): void {
    el.onChangeCallback = callback;
  }

  unsubscribe(el: Tabset): void {
    el.onChangeCallback = (x: boolean) => {};
  }
}

Shiny.inputBindings.register(new TabsetInputBinding(), "TabsetInputBinding");
