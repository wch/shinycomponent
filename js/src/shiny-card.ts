import { LitElement, css, html } from "lit";
import { theme_primatives } from "./styles/op-classes";

export class ShinyCard extends LitElement {
  shadowed: Boolean = false;
  centercontent: Boolean = false;

  static properties = {
    shadowed: { type: Boolean },
    centercontent: { type: Boolean },
  };

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;

      ${theme_primatives.surface_1}

      border: 1px solid hsl(var(--brand-hue) 10% 50% / 15%);

      border-radius: var(--item-radius, var(--radius-3));
      padding: var(--item-padding, var(--size-3));
      gap: var(--item-padding, var(--size-3));
      overflow: auto;
    }

    :host([shadowed]) {
      box-shadow: 0 1rem 0.5rem -0.5rem;
      box-shadow: 0 2.8px 2.2px
          hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 3%)),
        0 6.7px 5.3px
          hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 1%)),
        0 12.5px 10px
          hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 2%)),
        0 22.3px 17.9px
          hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 2%)),
        0 41.8px 33.4px
          hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 3%)),
        0 100px 80px hsl(var(--surface-shadow) / var(--shadow-strength));
    }

    :host([centercontent]) {
      display: grid;
      place-content: center;
      overflow: auto;
    }

    ::slotted(*) {
      flex: 1;
    }
    * {
      box-sizing: border-box;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
customElements.define("shiny-card", ShinyCard);
