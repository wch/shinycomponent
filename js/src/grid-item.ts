import { property } from "lit/decorators.js";
import { ShinyCard } from "./shiny-card";

/**
 * A custom element representing a grid item.
 * Inherits from ShinyCard.
 */
export class GridItem extends ShinyCard {
  /**
   * The width of the grid item in columns of the enclosing grid.
   * Defaults to 1.
   */
  @property({ type: Number }) colWidth: number = 1;

  /**
   * The height of the grid item in rows of the enclosing grid.
   * Defaults to 1.
   */
  @property({ type: Number }) rowHeight: number = 1;

  /**
   * Whether to style the grid item as a card. Aka wrapping the children in a
   * `<shiny-card>` element.
   */
  @property({ type: Boolean }) cardStyled: boolean = true;

  connectedCallback() {
    super.connectedCallback();

    // Let the grid control height for this card variant
    this.style.setProperty(
      "grid-area",
      `span ${this.rowHeight} / span ${this.colWidth}`
    );
  }
}

customElements.define("shiny-grid-item", GridItem);
