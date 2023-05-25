import { LitElement, css, html } from "lit";
import { set_el_attr } from "./set_el_attr";

export class Footer extends LitElement {
  static properties = {};

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: block;
      position: relative;
      width: 100%;
    }

    .footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  `;

  constructor() {
    super();
    set_el_attr(this, "slot", "footer");
  }

  render() {
    return html`
      <div class="footer">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("shiny-footer", Footer);
