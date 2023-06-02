import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { set_el_attr } from "./set_el_attr";

@customElement("shiny-sidebar")
export class Sidebar extends LitElement {
  @property({ type: Boolean, reflect: true }) closed: boolean = false;
  @property({ type: Number }) openWidthPx: number = 300;

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      --transition: 0.3s var(--ease-3);
      --padding: var(--size-fluid-2);

      --sidebar-content-columns: auto 1fr;
      --sidebar-content-height: auto;
      --sidebar-content-gap: var(--size-3);
      --sidebar-content-overflow: auto;
      /* --sidebar-content-width: calc(100% - var(--sidebar-icon-width)); */

      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--padding);
    }

    :host([closed]) {
      /* --sidebar-content-width: 0px; */
      --sidebar-content-columns: auto 0px;
      --sidebar-content-height: var(--size-fluid-6);
      --sidebar-content-gap: 0;
      --sidebar-content-overflow: hidden;
    }

    :host([closed]) .content {
      width: fit-content;
    }

    * {
      box-sizing: border-box;
    }

    .content {
      height: 100%;
      overflow: scroll;
      margin: 0;

      /* These are the styles when closed */
      /* padding-block: var(--size-fluid-1); */
      padding-inline: var(--padding);
      /* opacity: 0; */
      width: var(--sidebar-width, 100px);

      transition: width var(--transition), padding var(--transition);

      display: flex;
      flex-direction: column;
      /* gap: var(--padding); */
    }

    .content > ::slotted(hr) {
      margin: 0 !important;
    }

    .content > ::slotted(shiny-section) {
      border-bottom: 1px solid var(--surface-4);
    }
    .content > ::slotted(shiny-section:last-child) {
      border-bottom: none;
    }

    .toggle-icon {
      transition: transform var(--transition);
      transform: scaleX(1);
      text-align: center;
    }

    :host([closed]) .toggle-icon {
      transform: scaleX(-1);
    }

    .open-toggle {
      position: absolute;
      top: 0;
      right: 0;
      font-size: var(--font-size-3);
      width: var(--padding);
      height: fit-content;
      cursor: pointer;
      color: var(--brand, var(--color-action));
    }
  `;

  constructor() {
    super();

    set_el_attr(this, "slot", "sidebar");
  }

  toggle_closed() {
    this.closed = !this.closed;
  }
  render() {
    return html`
      <div class="content" style="--sidebar-width: ${this.openWidthPx}px;">
        <slot></slot>
      </div>
      <div
        @click=${this.toggle_closed}
        title=${this.closed ? "Open sidebar" : "Close sidebar"}
        class="open-toggle"
      >
        <div class="toggle-icon">❮</div>
      </div>
    `;
  }
}
