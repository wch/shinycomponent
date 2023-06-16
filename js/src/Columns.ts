import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

// Component for generating auto-fill columns. Like shiny-grid but the number of
// rows is dynamic and the columns can spill over if not enough fit in the size
// range defined
@customElement("shiny-columns")
export class Columns extends LitElement {
  @property({ type: Number }) colMinWidth?: number;
  @property({ type: Number }) colMaxWidth?: number;
  @property({ type: Number }) gap?: number;

  @property({ type: String }) alignItems: string = "stretch";

  static styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(
        auto-fill,
        var(--column-widths, var(---size-content-1))
      );
      gap: var(--col-gap, var(--size-m));
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

    if (this.colMinWidth) {
      this.style.setProperty("--col-min-w", `${this.colMinWidth}px`);
    }

    if (this.colMaxWidth) {
      this.style.setProperty("--col-max-w", `${this.colMaxWidth}px`);
    }

    if (this.gap) {
      this.style.setProperty("--col-gap", `${this.gap}px`);
    }

    this.style.setProperty("--align-items", this.alignItems);
  }

  render() {
    return html`<slot></slot>`;
  }
}
