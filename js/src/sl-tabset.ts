import { css } from "lit";
import { makeInputBinding } from "./make-input-binding";
import { Tabset } from "./tabset";

/**
 * Special version of the tabset that's styled using shoelace instead of out custom tokens
 */

export class SlTabset extends Tabset {
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      /* This is where all the variables are defined. If the user wants to
update something they just have to replace the main variable and it
doesn't cascade down to other elements
*/
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
      --_header-bg-color: var(--header-bg-color, var(--sl-color-primary-200));
      --_header-bg-image: var(--header-bg-image);
      --_header-color: var(--header-color);
      --_header-font-weight: var(
        --header-font-weight,
        var(--sl-font-weight-normal)
      );
      --_header-font-size: var(--header-font-size, var(--font-size-fluid-1));
      --_header-padding-inline: var(
        --header-padding-inline,
        var(--sl-spacing-small)
      );
      --_header-padding-block: var(
        --header-padding-block,
        var(--sl-spacing-2x-small)
      );

      display: block;
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
      grid-area: content;
      overflow: auto;
    }

    .header,
    .footer {
      background-color: var(--_header-bg-color);

      /* Use background image if passed */
      background-image: var(--_header-bg-image);
      color: var(--_header-color);
      margin: 0;
      padding-inline: var(--_header-padding-inline);
      display: flex;
      align-items: center;
      gap: var(--_header-padding-inline);
    }

    .header {
      grid-area: header;
      font-family: var(--_header-font);
      font-weight: var(--_header-font-weight);
      padding-block: var(--_header-padding-block);
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

    .footer {
      grid-area: footer;
    }

    .footer > ::slotted(*) {
      padding-block: var(--_header-padding-inline);
    }
  `;
}

customElements.define("shiny-sl-tabset", SlTabset);

makeInputBinding("shiny-sl-tabset");

declare global {
  interface HTMLElementTagNameMap {
    "shiny-sl-tabset": SlTabset;
  }
}
