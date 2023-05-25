import { LitElement, html, css } from "lit";

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
    }
  `;

  constructor() {
    super();
    this.name = "tab";
    // set_el_attr(this, "")
    // this.attributes.setNamedItem(make_slot_attr("footer"));
  }

  render() {
    return html`
      <div class="footer">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("shiny-tab", Tab);
