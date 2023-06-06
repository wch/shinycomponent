import { LitElement, css, html } from "lit";
import { theme_primitives } from "./styles/op-classes";

export class ShinyCard extends LitElement {
  shadowed: Boolean = false;
  centercontent: Boolean = false;

  static properties = {
    shadowed: { type: Boolean },
    centercontent: { type: Boolean, reflect: true },
  };

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;

      ${theme_primitives.surface_1}

      border: 1px solid hsl(var(--brand-hue) 10% 50% / 15%);

      border-radius: var(--item-radius, var(--radius-3));
      padding: var(--item-padding, var(--size-3));
      gap: var(--item-padding, var(--size-3));
      overflow: auto;
    }

    :host([shadowed]) {
      ${theme_primitives.fancy_shadow}
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
