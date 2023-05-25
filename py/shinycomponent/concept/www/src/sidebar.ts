import { LitElement, css, html } from "lit";
import { set_el_attr } from "./set_el_attr";

export class Sidebar extends LitElement {
  is_open: boolean;

  static properties = {
    is_open: {},
  };

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: block;
      font-family: var(--font-family, sans-serif);
      --transition: 0.4s var(--ease-3);
      --toggle-w: 20px;
      height: 100%;
      position: relative;
    }

    .sidebar {
      height: 100%;
      overflow: scroll;
      padding: var(--size-fluid-1);
      --w: var(--sidebar-width, 250px);
      margin: 0;
      transition: width var(--transition), padding var(--transition);
    }

    .sidebar.open {
      width: var(--w);
    }

    .sidebar.closed {
      width: 0;
      padding: 0;
    }

    .sidebar.closed ::slotted(*) {
      opacity: 0;
    }

    .sidebar > * {
      min-width: 0;
    }

    .sidebar.closed + .open-toggle {
      transform: translateX(var(--toggle-w)) scaleX(-1);
      transition: transform var(--transition);
    }

    .open-toggle {
      position: absolute;
      top: var(--size-1);
      font-size: var(--font-size-3);
      border-radius: var(--radius-2) 0 0 var(--radius-2);
      right: 0;
      width: var(--toggle-w);
      height: auto;
      color: var(--white);
      display: grid;
      place-content: center;
      cursor: pointer;
    }
  `;

  constructor() {
    super();
    // Define reactive properties--updating a reactive property causes
    // the component to update.

    // By making is_open a property we allow the user to set its initial state or toggle
    // from outside the component
    this.is_open = true;
    set_el_attr(this, "slot", "sidebar");
  }

  render() {
    return html`
      <div class="sidebar ${this.is_open ? "open" : "closed"}">
        <slot></slot>
      </div>
      <div
        @click=${this.toggle_open}
        title=${this.is_open ? "Close sidebar" : "Open sidebar"}
        class="open-toggle"
      >
        👈
      </div>
    `;
  }

  toggle_open() {
    this.is_open = !this.is_open;
  }
}

customElements.define("shiny-sidebar", Sidebar);
