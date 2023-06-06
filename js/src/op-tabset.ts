import { css, html } from "lit";
import { Shiny } from "./OptionalShiny";
import { theme_primatives } from "./styles/op-classes";
import { Tabset } from "./tabset";

import { make_input_binding } from "./make_input_binding";
import "./styles/open-props-theme.css";
type TabElements = { name: string; el: HTMLElement }[];
/**
 * Special version of the tabset that's styled using open-props instead of our custom tokens
 */

export class OpTabset extends Tabset {
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      /* This is where all the variables are defined. If the user wants to
        update something they just have to replace the main variable and it
        doesn't cascade down to other elements
      */

      --padding: var(--size-fluid-3);

      display: block;
      height: 100%;
      box-sizing: border-box;
      ${theme_primatives.surface_3}
    }

    .tabset {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "sidebar header"
        "sidebar content"
        "sidebar footer";
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
      /* Use background image if passed */
      background-image: var(--header-bg-image);
      margin: 0;
      display: flex;
      align-items: center;
      gap: var(--padding);
    }

    .header {
      grid-area: header;
      font-family: var(--_header-font);
      font-weight: var(--_header-font-weight);
      margin: 0;
      position: relative;
      padding: var(--padding);
      padding-block-end: 0;
    }

    .tabs {
      --container-radius: var(--radius-4);
      --container-pad: var(--size-1);
      /* Subtract padding from radius of tabs so they fit like they've shrunk down */
      --child-radius: calc(var(--container-radius) - var(--container-pad));

      border-radius: var(--container-radius);
      padding: var(--container-pad);

      display: flex;
      align-items: center;
      flex-wrap: wrap;
      ${theme_primatives.surface_4}
    }

    .tab {
      cursor: pointer;
      position: relative;
      padding-block: var(--size-0);
      padding-inline: var(--size-5);
      border-radius: var(--child-radius);
      color: var(--text-2);
    }

    .selected-tab {
      ${theme_primatives.surface_1}
    }

    .sidebar {
      padding: 0;
      grid-area: sidebar;
      ${theme_primatives.surface_1}
    }

    .main {
      grid-area: content;
      overflow: scroll;
      padding: var(--padding);
    }

    .footer {
      grid-area: footer;
    }

    .footer > ::slotted(*) {
      padding: var(--padding);
      padding-block-start: 0;
    }

    .header > ::slotted(div) {
      font-size: var(--font-size-fluid-1);
      font-weight: var(--font-weight-7);
      margin: 0;
      padding: 0;
    }
  `;

  render() {
    return html`
      <div class="tabset">
        <div class="header">
          <slot name="header"></slot>
          <div class="tabs">
            ${this.tabs.map(
              (tab, i) =>
                html`<div
                  class="tab ${i === this.selected_tab_index
                    ? "selected-tab"
                    : ""}"
                  @click=${() => this.select_tab(i)}
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

customElements.define("shiny-op-tabset", OpTabset);

make_input_binding("shiny-op-tabset");

declare global {
  interface HTMLElementTagNameMap {
    "shiny-op-tabset": OpTabset;
  }
}
