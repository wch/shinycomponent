import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { Tabset } from "./tabset";
// Based on https://dribbble.com/shots/20807295-Logip-Admin-Dashboard-Analytics-UX
import { theme_primitives } from "./styles/op-classes";

@customElement("shiny-logip-tabset")
export class TabsetLogip extends Tabset {
  static styles = css`
    :host {
      --_gap: var(--gap, var(--size-fluid-3));
      --_border-radius: var(--border-radius, var(--radius-3));

      --_sidebar_width: var(--sidebar-width, var(--size-header-2));

      --_main-bg: var(--main-bg, var(--sl-color-neutral-50));
      --_main-color: var(--main-color, var(--sl-color-neutral-950));

      --_sidebar-bg: var(--sidebar-bg, var(--sl-color-neutral-200));
      --_sidebar-color: var(--sidebar-color, var(--sl-color-neutral-950));
      --_sidebar-border: var(--sidebar-border);

      --_tab-spacing: var(--tab-spacing, var(--sl-spacing-small));
      --_tab-selection-thickness: var(
        --tab-selection-thickness,
        var(--sl-spacing-2x-small)
      );
      --_tab_radius: var(--tab-radius, var(--sl-border-radius-medium));

      display: block;
      height: 100%;
      color: var(--_main-color);
      background-color: var(--_main-bg);
      background-image: var(--gradient-15);
    }

    * {
      box-sizing: border-box;
    }

    .tabset {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: "sidebar content";
      isolation: isolate;
      padding: var(--_gap);
    }

    .tabset > * {
      min-width: 0;
      min-height: 0;
      border-radius: var(--_border-radius);
    }

    .sidebar {
      grid-area: sidebar;
      padding-inline: var(--size-3);
      padding-block: var(--size-3);
      background-color: var(--_sidebar-bg);
      color: var(--_sidebar-color);
      width: var(--_sidebar_width);
      z-index: 2;
      --padding: var(--size-3);
      ${theme_primitives.fancy_shadow}
    }

    .main {
      grid-area: content;
      z-index: 1;
      /* overflow: scroll; */
      padding-inline-start: var(--_gap);
      --grid-gap: var(--_gap);
    }

    .tabs {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      font-size: var(--font-size-fluid-1);
      padding-block: var(--_tab-spacing);
      gap: var(--_tab-spacing);
    }

    .tab {
      padding-inline: var(--_tab-spacing);
      cursor: pointer;
      position: relative;
      opacity: 0.5;
    }

    .selected-tab {
      opacity: 1;
    }
  `;

  render() {
    const tabs = html`<div class="tabs">
      ${this.tabs.map(
        (tab, i) =>
          html`<div
            class="tab ${i === this.selected_tab_index ? "selected-tab" : ""}"
            @click=${() => this.select_tab(i)}
          >
            ${tab.name}
          </div>`
      )}
    </div>`;

    return html`
      <div class="tabset">
        <div class="sidebar">
          <slot name="title"></slot>
          ${tabs}
          <slot name="sidebar"></slot>
        </div>
        <div class="main">
          <slot @slotchange=${this.handleSlotchange}></slot>
        </div>
      </div>
    `;
  }
}
