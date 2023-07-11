import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { setElAttr } from "./set_el_attr";
import { ShinyCard } from "./shiny-card";
import { ShinyDashboard } from "./shiny-dashboard";
import { Section } from "./shiny-section";
import { getElementsFromSlotChangeEvent } from "./utils/getElementsFromSlotChangeEvent";

// Sidebar Web Component

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
 *
 * @cssprop {Color} --sidebar-bg - The background color of the sidebar. Defaults to `var(--surface-2)`.
 * @cssprop {Length} --sidebar-width - The width of the sidebar when it is open. Defaults to `var(--size-content-1)`.
 * @cssprop {Length} --sidebar-padding - The padding around the content and between items within the sidebar. Defaults to `var(--size-m)`.
 *
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

  /**
   * Whether the sidebar is in a dashboard or not. This is currentl used to
   * determine whether to show a shadow on the sidebar or not.
   */
  @state() inDashboard: boolean = false;

  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      /* How much padding is around the content and between items within the
      sidebar? This variable controls a lot of the visual appearance */
      --padding: var(--sidebar-padding, var(--size-m));

      /* Sizes related to the toggle icon */
      --toggle-size: var(--padding);
      --toggle-pad: calc(var(--padding) / 4);

      /* Internal calculated properties - change at your own risk! */
      --full-padded-w: calc(var(--toggle-size) + 2 * var(--toggle-pad));

      /* TODO: Use container query units here if available */
      --open-width: min(
        var(
          --sidebar-width,
          calc((var(--size-content-1) + var(--size-content-2)) / 2)
        ),
        calc(100vw - (3 * var(--padding)))
      );
      --closed-width: var(--full-padded-w);

      /* Animation for opening and closing */
      --transition: var(--speed-fast) var(--ease-3);

      /* All the variables that have "*-content-*" in their names are passed
      through to the <shiny-section> tag that lets it know how to control its
      content so that it can selectively hide or show the content associated
      with an icon or not. I don't like how confusing it is and think something
      like subgrid could help with this */
      --section-icon-w: var(--size-l);
      --sidebar-content-columns: var(--section-icon-w) 1fr;
      --sidebar-content-gap: var(--padding);

      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: var(--sidebar-bg, var(--surface-1));
      width: var(--open-width);
      transition: width var(--transition), padding var(--transition);
    }

    :host([closed]) {
      width: var(--closed-width);
      cursor: e-resize;
      overflow: hidden;
    }

    /* Leave the sidebar wide enough to view the icons */
    :host([collapseToIcons]) {
      --closed-width: calc(var(--section-icon-w) + (2 * var(--padding)));
    }

    .content {
      height: 100%;
      overflow: auto;
      padding-inline: var(--padding);
      display: flex;
      flex-direction: column;
      background-color: inherit;
      width: var(--open-width);

      /* Move content up a bit so there's not an awkward amount of space before
      content starts */
      margin-top: calc(-2 * var(--toggle-pad));
      transition: opacity var(--transition);
    }

    /* For the normal sidebar collapse we want the opacity to go to zero when
    collapsed so the content doesn't show */
    :host([closed]:not([collapseToIcons])) .content {
      opacity: 0;
    }

    /* Styles for when the sidebar is in a very small container such as a card
    or mobile device */
    @container (max-width: 700px) {
      :host {
        width: var(--closed-width);
        z-index: 10;
      }

      .container {
        /* When on small screens we want the sidebar to slide over the main
        content rather than pushing it out of the way */
        position: absolute;
        background-color: inherit;
        width: var(--open-width);
        height: 100%;
        overflow: hidden;
        border-right: var(--border-standard);
      }

      .container.dashboard-sidebar {
        box-shadow: var(--shadow-l);
      }

      :host([closed]) .container {
        width: var(--closed-width);
      }
    }

    .content > ::slotted(shiny-section) {
      border-bottom: var(--border-normal);
    }

    .content > ::slotted(shiny-section:last-child) {
      border-bottom: none;
    }

    .toggle-icon {
      /* Resting state has a lower opacity to not make the toggle standout so
      much and distract from content */
      opacity: 0.5;
      font-size: var(--font-size-l);
      color: var(--text-3);
      cursor: pointer;
      user-select: none;

      /* Make sure we're always the same distance from the right of the sidebar
      when we're closed or open */
      margin-inline-start: auto;
      margin-inline-end: 0;
      width: var(--full-padded-w);
      height: var(--full-padded-w);
      padding: var(--toggle-pad);

      /* Make sure the icon itself is nice and centered */
      display: grid;
      place-content: center;

      /* We use a transform to flip icon to a collapse icon and also increase
      the opacity on hover, we animate these to look _cool_ */
      transition: transform var(--transition), opacity var(--transition);
    }

    /* Give feedback of action on hover */
    .toggle-icon:hover {
      opacity: 1;
    }

    /* When we're closed we invert the icon on the x-axis to make it an expand
    icon */
    :host([closed]) .toggle-icon {
      transform: scaleX(-1);
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

  /**
   * Toggles the `closed` property on the sidebar which will be reflected in
   * styles.
   */
  toggleClosed() {
    this.closed = !this.closed;
  }

  /**
   * Handles the click event on the toggle button. This is a separate function
   * so that we can stop propagation of the event.
   * @param e - The click event.
   * @returns void
   */
  handleToggleBtnClick(e: MouseEvent) {
    e.stopPropagation();
    this.toggleClosed();
  }

  /**
   * The list of elements that are allowed to be containers for the sidebar.
   * Currently, the known containers are `shiny-dashboard` and `shiny-card`. If
   * more containers are added in the future, this list will need to be updated
   * to generalize the search.
   * @static
   * @private
   * @memberof Sidebar
   * @readonly
   */
  static allowedContainers = [ShinyDashboard, ShinyCard];

  /**
   * Recursively searches for the closest parent element that is a known container
   * for the sidebar.
   *
   * @param sidebar - The sidebar element to start the search from.
   * @returns The closest parent element that is a known container for the sidebar,
   * or `null` if no container is found.
   */
  findSidebarContainer(sidebar: HTMLElement): HTMLElement | null {
    // If we don't find a container then we'll just return the body element
    const parent = sidebar.parentElement;
    if (!parent) {
      return null;
    }

    // Special case where we let the sidebar know it's in a dashboard
    if (parent instanceof ShinyDashboard) {
      this.inDashboard = true;
      return parent;
    }

    const parentIsContainer = Sidebar.allowedContainers.some(
      (p) => parent instanceof p
    );

    if (parentIsContainer) {
      return parent;
    }

    return this.findSidebarContainer(parent);
  }

  /**
   * Checks if the sidebar is in a small container and if so, automatically
   * collapses the sidebar to avoid it taking up too much space.
   */
  autoCollapseOnSmallScreens() {
    const container = this.findSidebarContainer(this);
    if (container && container.clientWidth < 700) {
      this.closed = true;
    }
  }

  /**
   * When the children of the sidebar change, we check if they are all
   * `<shiny-section>` elements. If they are, we collapse the sidebar to icons
   * on smaller screens.
   * @param e - The slotchange event.
   * @returns void
   */
  watchForIconSectionChildren(e: Event) {
    const elementsInSlot = getElementsFromSlotChangeEvent(e);

    // If we exclusivly have <shiny-section> elements in the sidebar then we should enable the icon collapse mode
    const hasOnlySections = elementsInSlot.every((el) => el instanceof Section);

    this.collapseToIcons = elementsInSlot.length > 0 && hasOnlySections;
  }

  connectedCallback() {
    super.connectedCallback();
    this.autoCollapseOnSmallScreens();
  }

  render() {
    return html`
      <div class="container ${this.inDashboard ? "dashboard-sidebar" : ""}">
        <div>
          <div
            class="toggle-icon"
            @click=${this.handleToggleBtnClick}
            title=${this.closed ? "Open sidebar" : "Close sidebar"}
          >
            <shiny-icon name="ri:expand-left-line"></shiny-icon>
          </div>
        </div>
        <div class="content" style="--sidebar-width: ${this.openWidthPx}px;">
          <slot @slotchange=${this.watchForIconSectionChildren}></slot>
        </div>
      </div>
    `;
  }
}
