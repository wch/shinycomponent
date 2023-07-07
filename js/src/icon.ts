import "iconify-icon";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * A custom element that displays an icon using the Iconify library. For list of
 * all available icons, see: https://icon-sets.iconify.design/
 * @customElement shiny-icon
 * @extends LitElement
 */
@customElement("shiny-icon")
export class ShinyIcon extends LitElement {
  /**
   * The name of the icon to display using iconify format.
   * @property {string} name
   * @default "info-circle"
   */
  @property() name: string = "info-circle";

  /**
   * The styles for the ShinyIcon element.
   * @static
   * @property {CSSResult} styles
   */
  static styles = css`
    :host {
      display: inline-block;
      height: 1em;
    }
  `;

  /**
   * Renders the ShinyIcon element.
   * @returns {TemplateResult} The rendered template for the ShinyIcon element.
   */
  render() {
    return html`<iconify-icon icon="${this.name}"></iconify-icon>`;
  }
}
