import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * A custom element that acts like a flexible layout container. It can have a
 * header, sidebar, and footer added to it. It is used as the base for other
 * elements like cards and dashboard layouts. Typically this component isn't
 * used directly.
 *
 * @element sc-container
 *
 * @cssprop --container-padding - The padding of the container.
 * @cssprop --container-radius - The border radius of the container.
 * @cssprop --child-radius - The border radius of the container's children. Defaults
 * to nothing
 * @cssprop --container-h - The height of the container. Typically set by the `height`
 * attribute instead of this variable.
 * @cssprop --spacing - The spacing between elements in the container.
 * @cssprop --container-shadow - The shadow of the container.
 * @cssprop --container-bg - The surface color of the container.
 */
@customElement("sc-container")
export class Container extends LitElement {
  /**
   * The height of the container. If a number is used, the height wil be set to that
   * number in pixels. If "content" is used, then the container will take the minimum
   * height needed to contain all the children (aka typical block-layout
   * behavior). This value is typically left unset and the container is allowed to to
   * sized by it's containing environment.
   *
   * @attr height
   */
  @property()
  rowHeight?: "content" | number;

  /**
   * Whether the content of the container should be centered or not.
   *
   * @attr centercontent
   */
  @property({ type: Boolean, reflect: true })
  centercontent: boolean = false;

  /**
   * Should the contents of the container take their natural size instead of filling remaining space in the container?
   *
   * @attr nofill
   */
  @property({ type: Boolean, reflect: true })
  nofill: boolean = false;

  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      --container-padding: var(--item-padding, var(--size-m));
      --content-padding: var(--container-padding);
      --content-gap: var(--spacing, var(--size-s));

      border: var(--border-standard);
      border-radius: var(--container-radius);
      box-shadow: var(--container-shadow);
      background-color: var(--container-bg);
      overflow: hidden;
      flex: 1 1 auto;
      display: grid;
      grid-template:
        "header header" auto
        "sidebar body" 1fr
        "footer footer" auto /
        auto 1fr;
      isolation: isolate;
      max-height: 100%;

      /* We use inline-size here because the more broad "size" value will force
      this element to declare its height explicitely. We only really care about
      width for container queries so that's fine. This is a funny gotcha though
      that isn't obvious */
      container-type: inline-size;
    }

    :host([height]) {
      height: var(--container-h);
      flex: 0 0 var(--container-h);
    }

    :host([height="content"]) {
      height: fit-content;
      flex-basis: content;
    }

    .header {
      grid-area: header;
      z-index: 3;
      position: relative;
    }

    .footer {
      grid-area: footer;
      z-index: 2;
      position: relative;
    }

    .sidebar {
      grid-area: sidebar;
      position: relative;
      z-index: 1;
    }

    .body {
      /* For some reason this prevents scrollbars from appearing when they arent
      needed on wide contents... I wish there was a more satisfying solution */
      display: flex;
      grid-area: body;
      flex-direction: column;
      padding: var(--content-padding);
      gap: var(--content-gap);
      overflow: auto;
      z-index: 0;
    }

    :host([nofill]) .body {
      display: block;
    }

    /* Make block-layout slotted children stretch without neccesary needing to
    specify it themselves. There's a special exception for inputs which we put
    into divs. This will leave text alone etc. It's unclear if this list should
    be expanded or not or if this is too strong of a selector but it seems
    reasonable. */
    ::slotted(:is(div:not(.shiny-input-container), section)) {
      flex: 1;
    }

    /* Need to set all children as block display to keep behavior similar to flex */
    :host([nofill]) .body > ::slotted(*) {
      display: block;
      border-radius: var(--child-radius);
    }

    :host([centercontent]) .body {
      display: grid;
      place-content: center;
      overflow: auto;
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    if (this.rowHeight) {
      // If the height is a pure number, add px to the end of it. Otherwise assume it's a css length and just use it as providede
      const height =
        typeof this.rowHeight === "number"
          ? `${this.rowHeight}px`
          : this.rowHeight;
      this.style.setProperty("--container-h", height);
    }
  }

  render() {
    return html`
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="sidebar">
        <slot name="sidebar"></slot>
      </div>
      <div class="body">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    `;
  }
}

export class ContainerSlot extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      --container-padding: var(--item-padding, var(--size-m));

      display: block;
      padding-inline: var(--container-padding);
      padding-block: var(--container-padding);
    }

    :host([slot="header"]) {
      border-bottom: var(--border-standard);
    }

    :host([slot="footer"]) {
      border-top: var(--border-standard);
    }

    ::slotted(*) {
      margin: 0;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

/**
 * Custom element to be paired with `<shiny-card>` to display a header stuck at
 * the top of the card.
 */
@customElement("sc-header")
export class Header extends ContainerSlot {
  @property({ type: String, reflect: true }) slot = "header";
}

/**
 * Custom element to be paired with `<shiny-card>` to display a footer stuck at
 * the bottom of the card.
 */
@customElement("sc-footer")
export class Footer extends ContainerSlot {
  @property({ type: String, reflect: true }) slot = "footer";
}
