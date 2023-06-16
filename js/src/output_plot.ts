import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("output-plot")
export class OutputPlot extends LitElement {
  @property({ reflect: true }) height?: number;

  static styles = css`
    * {
      box-sizing: border-box;
      min-width: 0;
    }

    :host {
      height: var(--plot-h, 400px);
      flex-basis: var(--plot-h);
    }

    .plot {
      background-image: var(--gradient-17);
      height: 100%;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    if (this.height) {
      this.style.setProperty("--plot-h", `${this.height}px`);
    }
  }

  render() {
    return html`<div class="plot"></div>`;
  }
}
