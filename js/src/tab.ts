import { LitElement, css, html } from "lit";

export class Tab extends LitElement {
  name: string;

  static properties = {
    name: {},
  };

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
      padding: var(--size-fluid-1);
    }
  `;

  constructor() {
    super();
    this.name = "tab";
  }

  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("shiny-tab", Tab);
