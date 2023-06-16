import { ShinyCard } from "./shiny-card";

export class GridItem extends ShinyCard {
  width: number = 1;
  height: number = 1;

  static properties = {
    width: { type: Number },
    height: { type: Number },
    ...ShinyCard.properties,
  };

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
