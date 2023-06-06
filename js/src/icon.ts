import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

// TODO: This requires an internet connection so it will need to be figured out how to make it work efficiently offline.
setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist");

@customElement("shiny-icon")
export class ShinyIcon extends LitElement {
  @property({ type: String }) name: string = "home";
  @property({ type: String }) color: string = "var(--text-2)";
  static styles = css`
    :host {
      color: var(--icon-color);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.style.setProperty("--icon-color", this.color);
  }

  render() {
    return html`<sl-icon name="${this.name}"></sl-icon>`;
  }
}
