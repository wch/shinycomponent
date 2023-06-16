import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { setElAttr } from "./set_el_attr";
import { themePrimitives } from "./styles/op-classes";

@customElement("shiny-card")
export class ShinyCard extends LitElement {
  @property({ type: Boolean }) shadowed: boolean = false;
  @property({ type: Boolean, reflect: true }) centercontent: boolean = false;
  @property({ type: Boolean, reflect: true }) nofill: boolean = false;
  @property() height?: "content" | number;

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      --card-padding: var(--item-padding, var(--size-m));
      --card-radius: var(--item-radius, var(--radius-m));
      --child-radius: var(--radius-s);

      ${themePrimitives.surface_1}

      border: var(--border-standard);
      border-radius: var(--card-radius);
      overflow: hidden;
      display: block;
      flex: 1 1 auto;
    }

    :host([height]) {
      height: var(--card-h);
      flex: 0 0 var(--card-h);
    }

    :host([height="content"]) {
      height: fit-content;
      flex-basis: content;
    }

    .contents {
      display: flex;
      flex-direction: column;
      height: 99.999%;
    }

    .body {
      --spacing: var(--item-padding, var(--size-s));

      /* For some reason this prevents scrollbars from appearing when they arent
      needed on wide contents... I wish there was a more satisfying solution */
      display: flex;
      flex-direction: column;
      padding: var(--card-padding);
      gap: var(--spacing);
      overflow: auto;
      flex: 1;
    }

    :host([nofill]) .body {
      display: block;
    }

    ::slotted(*) {
      margin: 0;
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
    }

    .footer {
      margin-block-start: auto;
    }

    :host([shadowed]) {
      ${themePrimitives.fancy_shadow}
    }

    :host([centercontent]) .contents {
      display: grid;
      place-content: center;
      overflow: auto;
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    if (Number(this.height)) {
      this.style.setProperty("--card-h", `${this.height}px`);
    }
  }

  render() {
    return html`<div class="contents">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>`;
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

@customElement("shiny-card-header")
export class ShinyCardHeader extends ShinyCardSlot {
  constructor() {
    super();
    setElAttr(this, "slot", "header");
  }
}

@customElement("shiny-card-footer")
export class ShinyCardFooter extends ShinyCardSlot {
  constructor() {
    super();
    setElAttr(this, "slot", "footer");
  }
}
