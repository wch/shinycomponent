import "iconify-icon";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

// For list of all available icons, see:
// https://icon-sets.iconify.design/
@customElement("shiny-icon")
export class ShinyIcon extends LitElement {
  @property() name: string = "info-circle";

  static styles = css`
    :host {
      display: inline-block;
      height: 1em;
    }
  `;

  render() {
    return html`<iconify-icon icon="${this.name}"></iconify-icon>`;
  }
}
