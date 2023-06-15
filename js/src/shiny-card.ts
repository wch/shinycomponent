import { LitElement, css, html } from "lit";
import { themePrimitives } from "./styles/op-classes";

export class ShinyCard extends LitElement {
  shadowed: boolean = false;
  centercontent: boolean = false;

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

      --card-padding: var(--item-padding, var(--size-m));
      --card-radius: var(--item-radius, var(--radius-m));
      --child-radius: var(--radius-s);

      ${themePrimitives.surface_1}

      border: var(--border-standard);
      border-radius: var(--card-radius);
      padding: var(--card-padding);
      gap: var(--item-padding, var(--size-s));
      overflow: auto;
    }

    :host([shadowed]) {
      ${themePrimitives.fancy_shadow}
    }

    :host([centercontent]) {
      display: grid;
      place-content: center;
      overflow: auto;
    }

    ::slotted(*) {
      flex: 1;
      border-radius: var(--child-radius);
      overflow: hidden;
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
