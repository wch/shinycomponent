import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { setElAttr } from "./set_el_attr";

@customElement("shiny-sidebar")
export class Sidebar extends LitElement {
  @property({ type: Boolean, reflect: true }) closed: boolean = false;
  @property({ type: Number }) openWidthPx: number = 320;

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      --transition: var(--speed-normal) var(--ease-3);
      --padding: var(--size-m);
      --sidebar-content-columns: auto 1fr;
      --sidebar-content-height: auto;
      --sidebar-content-gap: var(--size-m);

      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--padding);
    }

    :host([closed]) {
      --sidebar-content-columns: auto 0;
      --sidebar-content-height: var(--size-xxl);
      --sidebar-content-gap: 0;
      --sidebar-content-overflow: hidden;

      cursor: e-resize;
    }

    * {
      box-sizing: border-box;
    }

    .content {
      height: 100%;
      overflow: auto;
      margin: 0;
      padding-inline: var(--padding);
      width: var(--sidebar-width, 30vw);
      transition: width var(--transition), padding var(--transition);
      display: flex;
      flex-direction: column;
    }

    :host([closed]) .content {
      width: fit-content;
    }

    .content > ::slotted(hr) {
      margin: 0 !important;
    }

    .content > ::slotted(shiny-section) {
      border-bottom: var(--border-normal);
    }

    .content > ::slotted(shiny-section:last-child) {
      border-bottom: none;
    }

    .toggle-icon {
      text-align: center;
    }

    :host([closed]) .toggle-icon {
      transform: scaleX(0);
    }

    :host([open]) .toggle-icon {
      transition: transform var(--transition);
      transform: scaleX(1);
    }

    .open-toggle {
      position: absolute;
      top: 0;
      right: 0;
      font-size: var(--font-size-h4);
      font-weight: var(--font-weight-headings);
      width: var(--padding);
      height: fit-content;
      cursor: pointer;
      color: var(--text-2);
    }
  `;

  constructor() {
    super();
    setElAttr(this, "slot", "sidebar");

    this.addEventListener("click", (e) => {
      if (!this.closed) {
        return;
      }

      this.toggleClosed();
    });
  }

  toggleClosed() {
    this.closed = !this.closed;
  }

  handleToggleBtnClick(e: MouseEvent) {
    e.stopPropagation();
    this.toggleClosed();
  }

  render() {
    return html`
      <div class="content" style="--sidebar-width: ${this.openWidthPx}px;">
        <slot></slot>
      </div>
      <div
        @click=${this.handleToggleBtnClick}
        title=${this.closed ? "Open sidebar" : "Close sidebar"}
        class="open-toggle"
      >
        <div class="toggle-icon">❮</div>
      </div>
    `;
  }
}
