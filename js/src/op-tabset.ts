import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { makeInputBinding } from "./make-input-binding";
import { Tabset } from "./tabset";

/**
 * Special version of the tabset that's styled using open-props instead of our custom tokens
 */

@customElement("shiny-op-tabset")
export class OpTabset extends Tabset {
  @property({ type: Boolean }) dynamicHeight: boolean = false;

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

makeInputBinding("shiny-op-tabset");

declare global {
  interface HTMLElementTagNameMap {
    "shiny-op-tabset": OpTabset;
  }
}
