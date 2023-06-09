import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
// setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist");

@customElement("shiny-section")
export class Section extends LitElement {
  @property()
  icon: string = "";

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: grid;
      align-items: center;
      grid-template-columns: var(--sidebar-content-columns, auto 1fr);
      gap: var(--sidebar-content-gap, var(--size-m));
      height: var(--sidebar-content-height, auto);
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
      font-size: var(--font-size-h3);
    }

    .content > ::slotted(h2) {
      margin: 0;
      padding-block: 0;
    }

    .content > ::slotted(*:last-child) {
      margin-bottom: 0 !important;
    }

    .content {
      overflow: var(--sidebar-content-overflow);
      display: flex;
      flex-direction: column;
      gap: var(--size-s);
    }
  `;

  render() {
    return html`<div class="icon">
        ${this.icon && html`<shiny-icon name=${this.icon}></shiny-icon>`}
        <slot name="icon"></slot>
      </div>
      <div class="content"><slot></slot></div>`;
  }
}
