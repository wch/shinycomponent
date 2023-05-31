import { LitElement, css, html } from "lit";

export class GridItem extends LitElement {
  width: Number = 1;
  height: Number = 1;

  static properties = {
    width: { type: Number },
    height: { type: Number },
  };

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;

      /* background-color: pink; */
      background-color: var(--item-bg-color, var(--sl-panel-background-color));
      border: var(--sl-panel-border-width) solid var(--sl-panel-border-color);
      border-radius: var(--item-radius, var(--sl-border-radius-medium));
      /* box-shadow: var(--item-shadow, var(--sl-shadow-medium)); */
      padding: var(--item-padding, var(--sl-spacing-small));
      gap: var(--item-padding, var(--sl-spacing-small));
    }

    ::slotted(*) {
      flex: 1;
    }
    * {
      box-sizing: border-box;
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    this.style.setProperty(
      "grid-area",
      `span ${this.height} / span ${this.width}`
    );
  }

  render() {
    return html`<slot></slot>`;
  }
}
customElements.define("shiny-grid-item", GridItem);
