import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("shiny-grid")
export class Grid extends LitElement {
  @property({ type: Number }) nRows: number = 2;
  @property({ type: Number }) nCols: number = 2;
  @property({ type: String }) alignItems: string = "stretch";

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(var(--nCols), 1fr);
      grid-template-rows: repeat(var(--nRows), 1fr);
      gap: var(--grid-gap, var(--size-fluid-2));
      align-items: var(--align-items);
      height: 100%;
    }
    * {
      box-sizing: border-box;
    }

    ::slotted(*) {
      min-height: 0;
      min-width: 0;
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    this.style.setProperty("--nRows", this.nRows.toString());
    this.style.setProperty("--nCols", this.nCols.toString());
    this.style.setProperty("--align-items", this.alignItems);
  }

  render() {
    return html`<slot></slot>`;
  }
}
