import { LitElement, css, html } from "lit";

export class GridItem extends LitElement {
  width: Number = 1;
  height: Number = 1;

  static properties = {
    width: { type: Number },
    height: { type: Number },
  };

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

      font-family: var(--_font);
      height: 100%;
      position: relative;
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
    }

    ::slotted(*) {
      flex: 1;
    }
    * {
      box-sizing: border-box;
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    this.style.setProperty(
      "grid-area",
      `span ${this.height} / span ${this.width}`
    );
  }

  render() {
    return html`<slot></slot>`;
  }
}
customElements.define("shiny-grid-item", GridItem);
