import { LitElement, css, html } from "lit";
import { set_el_attr } from "./set_el_attr";

export class Sidebar extends LitElement {
  open: boolean = true;
  openWidthPx: number = 250;
  static properties = {
    openWidthPx: { type: Number },
    open: { type: Boolean, reflect: true },
  };

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      --transition: 0.3s var(--ease-3);
      --padding: var(--size-fluid-2);
      --sidebar-icon-width: var(--size-6);

      height: 100%;
      position: relative;
      display: grid;
      grid-template-columns: auto auto;
    }

    * {
      box-sizing: border-box;
    }

    .content {
      height: 100%;
      overflow: scroll;
      margin: 0;

      /* These are the styles when closed */
      padding-block: var(--size-fluid-1);
      padding-inline: 0;
      /* opacity: 0; */
      width: var(--sidebar-icon-width);

      transition: width var(--transition), padding var(--transition);

      display: flex;
      flex-direction: column;
    }

    :host([open]) .content {
      opacity: 1;
      padding-inline-start: var(--padding);
      width: var(--sidebar-width, 100px);
    }

    .toggle-icon {
      transition: transform var(--transition);
      transform: scaleX(1);
      text-align: center;
    }

    :host([open]) .toggle-icon {
      transform: scaleX(-1);
    }

    .open-toggle {
      font-size: var(--font-size-3);
      width: var(--padding);
      height: 100%;
      cursor: pointer;
      color: var(--brand, var(--color-action));
    }
  `;

  constructor() {
    super();

    set_el_attr(this, "slot", "sidebar");
  }

  render() {
    return html`
      <div class="content" style="--sidebar-width: ${this.openWidthPx}px;">
        <slot></slot>
      </div>
      <div
        @click=${this.toggle_open}
        title=${this.open ? "Close sidebar" : "Open sidebar"}
        class="open-toggle"
      >
        <div class="toggle-icon">❮</div>
      </div>
    `;
  }

  toggle_open() {
    this.open = !this.open;
  }
}

customElements.define("shiny-sidebar", Sidebar);
