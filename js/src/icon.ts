import "iconify-icon";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

// For list of all available icons, see:
// https://icon-sets.iconify.design/
@customElement("shiny-icon")
export class ShinyIcon extends LitElement {
  @property() name: string = "info-circle";

  render() {
    return html`<iconify-icon icon="${this.name}"></iconify-icon>`;
  }
}
