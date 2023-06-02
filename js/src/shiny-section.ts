import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { theme_primatives } from "./styles/op-classes";

@customElement("shiny-section")
export class Section extends LitElement {
  @property()
  icon: string = "";

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      /* border: 1px solid red; */
      display: grid;
      grid-template-columns: var(--sidebar-icon-width, 15px) 1fr;
    }
    * {
      box-sizing: border-box;
    }
    .icon {
      /* border: 1px solid blue; */
      text-align: center;
    }
  `;

  render() {
    return html`<div class="icon">${this.icon}</div>
      <div class="content"><slot></slot></div>`;
  }
}
// customElements.define("shiny-section", Section);
