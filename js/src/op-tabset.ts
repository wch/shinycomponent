import { css, html } from "lit";
import { themePrimitives } from "./styles/op-classes";
import { Tabset } from "./tabset";

import { makeInputBinding } from "./make_input_binding";
import "./styles/open-props-theme.css";
import "./styles/shoelace-theme-adapter.css";
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

      --padding: var(--size-m);

      display: block;
      height: 100%;
      box-sizing: border-box;

      ${themePrimitives.surface_3}
    }

    .tabset {
      height: 100%;
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

    .header,
    .footer,
    .sidebar {
      z-index: 2;
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

      ${themePrimitives.surface_4}
    }

    .tab {
      cursor: pointer;
      position: relative;
      padding-inline: var(--size-m);
      border-radius: var(--child-radius);
      color: var(--text-2);
    }

    .selected-tab {
      ${themePrimitives.surface_1}
    }

    .sidebar {
      padding: 0;
      grid-area: sidebar;

      ${themePrimitives.surface_1}
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
                  @click=${() => this.selectTab(i)}
                >
                  ${tab.name}
                </div>`
            )}
          </div>
          <div class="header-right">
            <slot name="header-right"></slot>
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

makeInputBinding("shiny-op-tabset");

declare global {
  interface HTMLElementTagNameMap {
    "shiny-op-tabset": OpTabset;
  }
}
