import { LitElement, css, html } from "lit";
import { set_el_attr } from "./set_el_attr";

export class Sidebar extends LitElement {
  is_open: boolean = true;

  static properties = {
    is_open: { type: Boolean, reflect: true },
  };

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      font-family: var(--font-family, sans-serif);
      --transition: 0.3s var(--ease-3);
      --padding: var(--size-4);

      --w: var(--sidebar-width, 250px);
      height: 100%;
      position: relative;
      display: grid;
      grid-template-columns: auto auto;
    }

    * {
      box-sizing: border-box;
    }

    .sidebar {
      height: 100%;
      overflow: scroll;
      margin: 0;
      transition: width var(--transition), padding var(--transition);

      padding-block: var(--size-fluid-1);
      padding-inline-start: var(--padding);
      /* This is given by the open-toggle div */
      padding-inline-end: 0;
    }

    .sidebar.open {
      width: var(--w);
    }
    .sidebar:not(.open) {
      width: 0;
      padding-inline-start: 0;
    }

    .sidebar.closed ::slotted(*) {
      opacity: 0;
    }

    .sidebar > * {
      min-width: 0;
    }

    .open-toggle .toggle-icon {
      transition: transform var(--transition);
    }

    .open-toggle.closed .toggle-icon {
      transform: scaleX(1);
    }

    .open-toggle.open .toggle-icon {
      transform: scaleX(-1);
    }

    .open-toggle {
      /* background-color: var(--surface-4); */
      font-size: var(--font-size-3);
      width: var(--padding);
      height: 100%;
      cursor: pointer;
      color: var(--brand, var(--color-action));
    }

    .toggle-icon {
      text-align: center;
    }
  `;

  constructor() {
    super();
    // Define reactive properties--updating a reactive property causes
    // the component to update.

    // By making is_open a property we allow the user to set its initial state or toggle
    // from outside the component
    // this.is_open = true;
    this.set_open();
    set_el_attr(this, "slot", "sidebar");
  }

  render() {
    const open_class = this.is_open ? "open" : "closed";
    return html`
      <div class="sidebar ${open_class}">
        <slot></slot>
      </div>
      <div
        @click=${this.toggle_open}
        title=${this.is_open ? "Close sidebar" : "Open sidebar"}
        class="open-toggle ${open_class}"
      >
        <div class="toggle-icon">❮</div>
      </div>
    `;
  }

  set_open() {
    this.is_open = true;
    this.classList.add("open");
  }
  set_closed() {
    this.is_open = false;
    this.classList.remove("open");
  }

  toggle_open() {
    if (this.is_open) {
      this.set_closed();
    } else {
      this.set_open();
    }
  }
}

customElements.define("shiny-sidebar", Sidebar);
