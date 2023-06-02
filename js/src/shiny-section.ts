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
      align-items: center;
      grid-template-columns: var(--sidebar-content-columns, auto 1fr);
      gap: var(--sidebar-content-gap, var(--size-2));
      height: var(--sidebar-content-height, auto);
      /* width: 100%; */

      padding-block: var(--padding, 100px);
    }

    * {
      box-sizing: border-box;
      min-width: 0;
    }

    [closed] :host {
      background-color: pink;
    }

    .icon {
      font-size: var(--size-fluid-3);
    }

    .content > ::slotted(h2) {
      margin: 0;
      padding-block: 0;
      font-weight: var(--font-weight-6);
    }
    .content > ::slotted(*:last-child) {
      margin-bottom: 0 !important;
    }

    .content {
      overflow: var(--sidebar-content-overflow);
    }
  `;

  render() {
    return html`<div class="icon">${this.icon}<slot name="icon"></slot></div>
      <div class="content"><slot></slot></div>`;
  }
}
// customElements.define("shiny-section", Section);
