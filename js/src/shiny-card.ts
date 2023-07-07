import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { setElAttr } from "./set_el_attr";
import { themePrimitives } from "./styles/op-classes";

/**
 * A custom element that displays a card with a header, body, and footer.
 * The card can be customized with various properties.
 *
 * @element shiny-card
 *
 * @cssprop --card-padding - The padding of the card.
 * @cssprop --card-radius - The border radius of the card.
 * @cssprop --child-radius - The border radius of the card's children. Defaults to nothing
 * @cssprop --card-h - The height of the card. Typically set by the `height` attribute instead of this variable.
 * @cssprop --spacing - The spacing between elements in the card.
 * @cssprop --card-shadow - The shadow of the card.
 * @cssprop --card-bg - The surface color of the card.
 */
@customElement("shiny-card")
export class ShinyCard extends LitElement {
  /**
   * The height of the card. If a number is used, the height wil be set to that
   * number in pixels. If "content" is used, then the card will take the minimum
   * height needed to contain all the children (aka typical block-layout
   * behavior). This value is typically left unset and the card is allowed to to
   * sized by it's containing environment.
   *
   * @attr height
   */
  @property()
  height?: "content" | number;

  /**
   * Whether the content of the card should be centered or not.
   *
   * @attr centercontent
   */
  @property({ type: Boolean, reflect: true })
  centercontent: boolean = false;

  /**
   * Should the contents of the card take their natural size instead of filling remaining space in the card?
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
      --card-padding: var(--item-padding, var(--size-m));

      ${themePrimitives.surface_1}

      /* We use inline-size here because the more broad "size" value will force
      this element to declare its height explicitely. We only really care about
      width for container queries so that's fine. This is a funny gotcha though
      that isn't obvious */
      container-type: inline-size;
      border: var(--border-standard);
      border-radius: var(--card-radius, var(--radius-m));
      box-shadow: var(--card-shadow, var(--shadow-m));
      background-color: var(--card-bg, var(--surface-1));
      overflow: hidden;
      flex: 1 1 auto;
      display: grid;
      grid-template:
        "header header" auto
        "sidebar body" 1fr
        "footer footer" auto /
        auto 1fr;
      isolation: isolate;
    }

    :host([height]) {
      height: var(--card-h);
      flex: 0 0 var(--card-h);
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
      padding: var(--card-padding);
      gap: var(--spacing, var(--size-s));
      overflow: auto;
      z-index: 0;
    }

    :host([nofill]) .body {
      display: block;
    }

    /* Make block-layout slotted children stretch without neccesary needing to
    specify it themselves. This will leave text alone etc. It's unclear if this
    list should be expanded or not or if this is too strong of a selector but it
    seems reasonable. */
    ::slotted(:is(div, section)) {
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

    if (this.height) {
      // If the height is a pure number, add px to the end of it. Otherwise assume it's a css length and just use it as providede
      const height =
        typeof this.height === "number" ? `${this.height}px` : this.height;
      this.style.setProperty("--card-h", height);
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

export class ShinyCardSlot extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      --card-padding: var(--item-padding, var(--size-m));

      display: block;
      padding-inline: var(--card-padding);
      padding-block: var(--card-padding);
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
@customElement("shiny-card-header")
export class ShinyCardHeader extends ShinyCardSlot {
  constructor() {
    super();
    setElAttr(this, "slot", "header");
  }
}

/**
 * Custom element to be paired with `<shiny-card>` to display a footer stuck at
 * the bottom of the card.
 */
@customElement("shiny-card-footer")
export class ShinyCardFooter extends ShinyCardSlot {
  constructor() {
    super();
    setElAttr(this, "slot", "footer");
  }
}
