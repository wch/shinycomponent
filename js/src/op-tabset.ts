import { css } from "lit";
import { Shiny } from "./OptionalShiny";
import { theme_primatives } from "./styles/op-classes";
import { Tabset } from "./tabset";

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

      --_tab-spacing: var(--tab-spacing, var(--size-fluid-1));
      --_tab-selection-thickness: var(--tab-selection-thickness, var(--size-2));
      --_tab_radius: var(--tab-radius, var(--radius-3));

      --_header-padding-inline: var(
        --header-padding-inline,
        var(--size-fluid-1)
      );
      --_header-padding-block: var(--header-padding-block, var(--size-2));

      display: block;
      height: 100%;
      box-sizing: border-box;
      ${theme_primatives.surface_1}
    }

    .tabset {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "header  header"
        "sidebar content"
        "footer  footer";
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
      ${theme_primatives.surface_3}
      /* Use background image if passed */
      background-image: var(--header-bg-image);
      margin: 0;
      display: flex;
      align-items: center;
      gap: var(--_header-padding-inline);
    }

    .header {
      grid-area: header;
      font-family: var(--_header-font);
      font-weight: var(--_header-font-weight);
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
      background-color: var(--brand);
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
      font-size: var(--header-font-size, var(--font-size-fluid-2));
      padding: var(--_tab-spacing);
    }

    .divider {
      background-color: var(--divider-color, var(--text-2));
      width: var(--border-small);
      height: 100%;
    }

    .sidebar {
      padding: 0;
      grid-area: sidebar;
      ${theme_primatives.surface_2}
    }

    .main {
      grid-area: content;
      overflow: scroll;
    }

    .footer {
      grid-area: footer;
    }

    .footer > ::slotted(*) {
      padding-block: var(--_header-padding-block);
      padding-inline: var(--_header-padding-inline);
    }
  `;
}

customElements.define("shiny-op-tabset", OpTabset);

(() => {
  if (!Shiny) {
    return;
  }
  class TabsetInputBinding extends Shiny.InputBinding {
    constructor() {
      super();
    }

    find(scope: HTMLElement): JQuery<HTMLElement> {
      return $(scope).find("shiny-op-tabset");
    }

    getValue(el: OpTabset) {
      return el.current_tab_name();
    }

    subscribe(el: OpTabset, callback: (x: boolean) => void): void {
      el.onChangeCallback = callback;
    }

    unsubscribe(el: OpTabset): void {
      el.onChangeCallback = (x: boolean) => {};
    }
  }

  Shiny.inputBindings.register(new TabsetInputBinding(), "TabsetInputBinding");
})();
