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
  @property({ type: Number }) width: number = 1;

  /**
   * The height of the grid item in rows of the enclosing grid.
   * Defaults to 1.
   */
  @property({ type: Number }) height: number = 1;

  connectedCallback() {
    super.connectedCallback();

    // Let the grid control height for this card variant
    this.style.removeProperty("--card-h");
    this.style.setProperty(
      "grid-area",
      `span ${this.height} / span ${this.width}`
    );
  }
}

customElements.define("shiny-grid-item", GridItem);
