import { ShinyCard } from "./shiny-card";

export class GridItem extends ShinyCard {
  width: Number = 1;
  height: Number = 1;

  static properties = {
    width: { type: Number },
    height: { type: Number },
    shadowed: { type: Boolean },
    centercontent: { type: Boolean },
  };

  connectedCallback() {
    super.connectedCallback();

    this.style.setProperty(
      "grid-area",
      `span ${this.height} / span ${this.width}`
    );
  }
}

customElements.define("shiny-grid-item", GridItem);
