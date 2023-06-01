import { LitElement, css, html } from "lit";

export class Grid extends LitElement {
  nRows: Number = 2;
  nCols: Number = 2;

  static properties = {
    nRows: { type: Number },
    nCols: { type: Number },
  };

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      height: 100%;
      display: grid;
      grid-template-columns: repeat(var(--nCols), 1fr);
      grid-template-rows: repeat(var(--nRows), 1fr);
      gap: var(--grid-gap, var(--size-3));
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
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define("shiny-grid", Grid);
