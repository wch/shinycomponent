import { LitElement, css, html } from "lit";

type CollapseDir = "right" | "left" | "bottom" | "top";

/* eslint-disable @typescript-eslint/naming-convention */
const dirToIcon = {
  right: "►",
  left: "◀︎",
  bottom: "▲",
  top: "▲",
};
/* eslint-enable @typescript-eslint/naming-convention */

const horizontalCollapseStyles = css`
  .horizontal .content {
    max-width: 100vw;
    transition: max-width var(--transition), transform var(--transition),
      padding-inline var(--transition);
  }

  .horizontal .content > * {
    min-width: 0;
  }

  .horizontal .toggle {
    padding-inline: var(--size-xs);
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

const toLeftCollapseStyles = css`
  .left .content {
    transform-origin: left;
  }

  .left .toggle {
    top: var(--size-xs);
    right: var(--space-small);
    width: var(--toggle-size);
    height: auto;
  }
`;

const toRightCollapseStyles = css`
  .right .content {
    transform-origin: left;
  }

  .right .toggle {
    order: -1;
    top: var(--size-xs);
    right: 0;
    width: var(--toggle-size);
    height: auto;
  }
`;

const verticalCollapseStyles = css`
  .vertical {
    flex-direction: column;
  }

  .vertical > .content {
    max-height: 100vh;
    transition: max-height var(--transition), transform var(--transition),
      padding-block var(--transition);
  }

  .vertical > .toggle {
    min-height: var(--size-l);
  }

  .vertical .toggle > .icon {
    position: absolute;
    right: var(--space-x-small);
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

const toBottomCollapseStyles = css`
  .bottom .toggle {
    order: -1;
    right: var(--space-medium);
    bottom: 0;
  }
`;

const toTopCollapseStyles = css`
  .top .toggle {
    right: var(--size-xs);
  }
`;

export class Collapsible extends LitElement {
  label: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  start_state: string;
  opened: boolean | null;
  // Which direction should the collapsible collapse in? "right" = left to right, etc...
  dir: CollapseDir;

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
        --transition: 0.4s var(--ease-3);
        --toggle-size: 20px;
        --accent-color: var(--stone-3);

        display: block;
        font-family: var(--font-family, sans-serif);
        position: relative;
        outline: 1px solid var(--accent-color, pink);
        margin: var(--size-s);
        border-radius: var(--radius-s);
      }

      .container {
        display: flex;
      }

      .content {
        overflow: auto;
        transition: transform var(--transition);
        padding: var(--size-fluid-1);
      }

      .toggle {
        background-color: var(--accent-color);
        font-size: var(--font-size-m);
        display: grid;
        place-content: center;
        cursor: pointer;
      }

      .toggle > .icon {
        transition: transform var(--transition);
        user-select: none;
        color: var(--color-action);
      }
    `,
    horizontalCollapseStyles,
    toRightCollapseStyles,
    toLeftCollapseStyles,
    verticalCollapseStyles,
    toBottomCollapseStyles,
    toTopCollapseStyles,
  ];

  constructor() {
    super();
    // Define reactive properties--updating a reactive property causes
    // the component to update.

    // By making opened a property we allow the user to set its initial state or toggle
    // from outside the component
    this.start_state = "open";

    this.opened = null;
    this.dir = "top";
    this.label = null;
  }

  render() {
    return html`
      <div
        class="container ${this.dir} ${this.dir === "bottom" ||
        this.dir === "top"
          ? "vertical"
          : "horizontal"} ${this.isOpen ? "open" : "closed"}"
      >
        <div class="content">
          <slot></slot>
        </div>
        <div
          class="toggle"
          @click=${this.toggleOpen}
          title=${this.isOpen ? "Close collapsible" : "Open collapsible"}
        >
          ${this.label ? html`<span>${this.label}</span>` : ""}
          <span class="icon"> ${dirToIcon[this.dir]} </span>
        </div>
      </div>
    `;
  }

  get isOpen(): boolean {
    if (this.opened === null) {
      return this.start_state === "open";
    }
    return this.opened;
  }

  toggleOpen() {
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
