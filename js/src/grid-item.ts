import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

/**
 * A custom element representing a grid item.
 * Inherits from ShinyCard.
 */
export class GridItem extends LitElement {
  /**
   * The width of the grid item in columns of the enclosing grid.
   * Defaults to 1.
   */
  @property({ type: Number }) width: number = 1;

  /**
   * The height of the grid item in rows of the enclosing grid.
   * Defaults to 1.
   */
  @property({ type: Number }) height: number = 1;

  /**
   * Whether to style the grid item as a card. Aka wrapping the children in a
   * `<shiny-card>` element.
   */
  @property({ type: Boolean }) cardStyled: boolean = true;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    // Let the grid control height for this card variant
    this.style.setProperty(
      "grid-area",
      `span ${this.height} / span ${this.width}`
    );
  }

  render() {
    const children = html`<slot></slot>`;

    return this.cardStyled
      ? html`<shiny-card>${children}</shiny-card>`
      : children;
  }
}

customElements.define("shiny-grid-item", GridItem);
