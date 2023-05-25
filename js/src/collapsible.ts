import { LitElement, css, html } from "lit";
import { set_el_attr } from "./set_el_attr";

type Collapse_Dir = "to_right" | "to_left" | "to_bottom" | "to_top";

const dir_to_icon = {
  to_right: "👉",
  to_left: "👈",
  to_bottom: "👆",
  to_top: "👆",
};

const horizontal_collapse_styles = css`
  .horizontal .content {
    max-width: 100vw;
    transition: max-width var(--transition), transform var(--transition),
      padding-inline var(--transition);
  }

  .horizontal.open .content {
  }

  .horizontal .content > * {
    min-width: 0;
  }

  .horizontal .toggle {
    padding-inline: var(--size-1);
  }

  .horizontal.closed .toggle > .icon {
    transform: scaleX(-1);
  }

  .horizontal.closed .content {
    max-width: 0;
    transform: scaleX(0);
    padding-inline: 0;
  }
`;

const to_left_collapse_styles = css`
  .to_left .content {
    transform-origin: left;
  }
  .to_left .toggle {
    top: var(--size-1);
    right: 0;
    width: var(--toggle-size);
    height: auto;
  }
`;

const to_right_collapse_styles = css`
  .to_right .content {
    transform-origin: left;
  }
  .to_right .toggle {
    order: -1;
    top: var(--size-1);
    right: 0;
    width: var(--toggle-size);
    height: auto;
  }
`;

const vertical_collapse_styles = css`
  .vertical {
    flex-direction: column;
  }

  .vertical > .content {
    max-height: 100vh;
    transition: max-height var(--transition), transform var(--transition),
      padding-block var(--transition);
  }

  .vertical > .toggle {
    min-height: var(--size-7);
  }

  .vertical .toggle > .icon {
    position: absolute;
    right: 0;
  }

  .vertical.closed .toggle > .icon {
    transform: rotate(180deg);
  }

  .vertical.content > ::slotted(*) {
    min-height: 0;
  }

  .vertical.closed .content {
    transform: scaleY(0);
    max-height: 0;
    padding-block: 0;
  }
`;

const to_bottom_collapse_styles = css`
  .to_bottom .toggle {
    order: -1;
    right: var(--size-1);
    bottom: 0;
  }
`;

const to_top_collapse_styles = css`
  .to_top .toggle {
    right: var(--size-1);
  }
`;

export class Collapsible extends LitElement {
  label: string | null;
  start_state: string;
  opened: boolean | null;
  // Which direction should the collapsible collapse in? "to_right" = left to right, etc...
  dir: Collapse_Dir;

  static properties = {
    label: {},
    opened: { type: "boolean" },
    start_state: {},
    dir: {},
  };

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = [
    css`
      :host {
        display: block;
        font-family: var(--font-family, sans-serif);
        --transition: 0.4s var(--ease-3);
        --toggle-size: 20px;
        --accent-color: var(--stone-3);
        position: relative;
        outline: 1px solid var(--accent-color, pink);
        margin: var(--size-3);
        border-radius: var(--radius-2);
      }

      .container {
        display: flex;
      }

      .content {
        overflow: scroll;
        transition: transform var(--transition);
        padding: var(--size-fluid-1);
      }

      .toggle {
        background-color: var(--accent-color);
        font-size: var(--font-size-3);
        display: grid;
        place-content: center;
        cursor: pointer;
      }

      .toggle > .icon {
        transition: transform var(--transition);
        user-select: none;
      }
    `,
    horizontal_collapse_styles,
    to_right_collapse_styles,
    to_left_collapse_styles,
    vertical_collapse_styles,
    to_bottom_collapse_styles,
    to_top_collapse_styles,
  ];

  constructor() {
    super();
    // Define reactive properties--updating a reactive property causes
    // the component to update.

    // By making opened a property we allow the user to set its initial state or toggle
    // from outside the component
    this.start_state = "open";

    this.opened = null;
    this.dir = "to_top";
    this.label = null;
  }

  render() {
    return html`
      <div
        class="container ${this.dir} ${this.dir === "to_bottom" ||
        this.dir === "to_top"
          ? "vertical"
          : "horizontal"} ${this.is_open ? "open" : "closed"}"
      >
        <div class="content">
          <slot></slot>
        </div>
        <div
          class="toggle"
          @click=${this.toggle_open}
          title=${this.is_open ? "Close collapsible" : "Open collapsible"}
        >
          ${this.label ? html`<span>${this.label}</span>` : ""}
          <span class="icon"> ${dir_to_icon[this.dir]} </span>
        </div>
      </div>
    `;
  }

  get is_open(): boolean {
    if (this.opened === null) {
      return this.start_state === "open";
    }
    return this.opened;
  }

  toggle_open() {
    if (this.opened === null) {
      this.opened = this.start_state !== "open";
      return;
    }
    this.opened = !this.opened;

    // Trigger resize event so things inside the collapser are properly effected
    window.dispatchEvent(new Event("resize"));
  }
}
customElements.define("shiny-collapsible", Collapsible);
