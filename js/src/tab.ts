import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export class Tab extends LitElement {
  @property({ type: String }) name: string = "tab";
  @property({ type: String }) icon: string = "";

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: block;
      position: relative;
      height: 100%;
      min-height: 0;
      width: 100%;
      min-width: 0;
      padding: var(--tab-padding);
    }
  `;

  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("shiny-tab", Tab);

declare global {
  interface HTMLElementTagNameMap {
    "shiny-tab": Tab;
  }
}
