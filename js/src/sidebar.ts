import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { setElAttr } from "./set_el_attr";
import { getElementsFromSlotChangeEvent } from "./utils/getElementsFromSlotChangeEvent";

/**
 * A sidebar that can be opened and closed. It is intended to be used within a
 * `<shiny-dashboard>` or `<shiny-card>` component where it will automatically
 * be positioned correctly.
 *
 * If the children are all `<shiny-section>` elements then the sidebar will
 * collapse to icons on smaller screens. If the children are not all
 * `<shiny-section>` elements then the sidebar will collapse to a narrow bar
 * with the toggle to open it back visible.
 *
 * @element shiny-sidebar
 */
@customElement("shiny-sidebar")
export class Sidebar extends LitElement {
  /**
   * Whether the sidebar is currently closed. This is a two-way binding so you
   * can set it to true to close the sidebar or observe the property to know
   * current state.
   * @type {boolean}
   * @reflect
   */
  @property({ type: Boolean, reflect: true }) closed: boolean = false;

  /**
   * The width of the sidebar when it is open, in pixels.
   * @type {number}
   */
  @property({ type: Number }) openWidthPx: number = 320;

  /**
   * Whether the sidebar should collapse to icons on smaller screens. This is
   * only applicable when the children of the sidebar are all `<shiny-section>`
   * elements.
   * @type {boolean}
   * @reflect
   */
  @property({ type: Boolean, reflect: true }) collapseToIcons: boolean = false;

  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      /* Define open and closed state variables. All the variables that have
      "*-content-*" in their names are passed through to the <shiny-section> tag
      that lets it know how to control its content so that it can selectively
      hide or show the content associated with an icon or not. I don't like how
      confusing it is and think something like subgrid could help with this */
      --open-content-columns: auto 1fr;
      --closed-content-columns: auto 0;
      --open-content-height: auto;
      --closed-content-height: var(--size-xxl);
      --open-content-gap: var(--padding);
      --open-content-padding: var(--padding);
      --closed-content-gap: 0;
      --open-content-overflow: auto;
      --closed-content-overflow: hidden;
      --closed-content-padding: 0;
      --closed-content-opacity: 0;
      --open-width: var(--sidebar-width, 30vw);
      --closed-width: var(--padding);

      /* Default settings */
      --transition: var(--speed-fast) var(--ease-3);
      --padding: var(--size-m);
      --sidebar-content-columns: var(--open-content-columns);
      --sidebar-content-height: var(--open-content-height);
      --sidebar-content-gap: var(--open-content-gap);
      --content-opacity: 1;

      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--padding);
      background-color: var(--surface-2);
      width: var(--open-width);
      transition: width var(--transition), padding var(--transition);
    }

    @container (max-width: 700px) {
      :host {
        width: var(--closed-width);
        z-index: 10;

        --open-width: var(--sidebar-width, var(--size-content-2));
      }

      .content {
        /* When on small screens we want the sidebar to slide over the main
              content rather than pushing it out of the way */
        position: absolute;
        box-shadow: var(--shadow-m);
      }
    }

    :host([closed]) {
      --sidebar-content-columns: var(--closed-content-columns);
      --sidebar-content-height: var(--closed-content-height);
      --sidebar-content-gap: var(--closed-content-gap);
      --sidebar-content-overflow: var(--closed-content-overflow);
      --content-opacity: var(--closed-content-opacity);

      width: var(--closed-width);
      cursor: e-resize;
    }

    .content {
      height: 100%;
      overflow: auto;
      margin: 0;
      padding-inline: var(--padding);
      display: flex;
      flex-direction: column;
      background-color: inherit;
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
      transition: transform var(--transition);
    }

    :host([closed]) .toggle-icon {
      transform: rotate(180deg);
    }

    .open-toggle {
      position: absolute;
      top: var(--size-xxs);
      left: 0;
      font-size: var(--font-size-h4);
      font-weight: var(--font-weight-headings);
      width: var(--padding);
      height: fit-content;
      cursor: pointer;
      color: var(--text-3);
      user-select: none;
    }

    :host([closed]:not([collapseToIcons])) .content {
      opacity: 0;
    }

    /* Leave the sidebar wide enough to view the icons */
    :host([closed][collapseToIcons]) {
      width: calc(4 * var(--padding));
    }
  `;

  constructor() {
    super();
    setElAttr(this, "slot", "sidebar");

    this.addEventListener("click", (e) => {
      if (!this.closed) return;

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

  autoCollapseOnSmallScreens() {
    // Check if the container is smaller than 700px and set the state to closed if it is
    const mediaQuery = window.matchMedia("(max-width: 700px)");

    // If the user resizes the screen smaller this will auto-collapse the
    // sidebar. It will _not_ auto-open it when it gets bigger because that
    // would be annoying if you had manually closed the sidebar
    const handleMediaQuery = (e: MediaQueryList | MediaQueryListEvent) => {
      if (e.matches) {
        this.closed = true;
      }
    };
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);
  }

  connectedCallback() {
    super.connectedCallback();
    this.autoCollapseOnSmallScreens();
  }

  handleSlottedElementsChange(e: Event) {
    const elementsInSlot = getElementsFromSlotChangeEvent(e);

    // If we exclusivly have <shiny-section> elements in the sidebar then we should enable the icon collapse mode
    const hasOnlySections = elementsInSlot.every(
      (el) => el.tagName === "SHINY-SECTION"
    );

    this.collapseToIcons = hasOnlySections;
  }

  render() {
    return html`
      <div class="content" style="--sidebar-width: ${this.openWidthPx}px;">
        <slot @slotchange=${this.handleSlottedElementsChange}></slot>
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
