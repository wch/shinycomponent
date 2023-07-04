import { spread } from "@open-wc/lit-helpers";
import debounce from "just-debounce-it";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { Shiny } from "../shiny/OptionalShiny";
import { makeOutputBinding } from "../shiny/make-output-binding";

export class ForgeOutputPlot extends LitElement {
  @property({ type: Array }) value: Record<string, string> | undefined =
    undefined;

  static styles = css`
    :host {
      height: 400px;
      width: 100%;
    }
  `;

  sendShinyCurrentSize() {
    if (Shiny) {
      Shiny.setInputValue!(
        ".clientdata_output_" + this.id + "_width",
        this.offsetWidth
      );
      Shiny.setInputValue!(
        ".clientdata_output_" + this.id + "_height",
        this.offsetHeight
      );
    }
  }

  connectedCallback(): void {
    super.connectedCallback();

    if (Shiny) {
      $(document).on("shiny:connected", () => {
        this.sendShinyCurrentSize();
      });
    }

    const sendShinyCurrentSizeDebounced = debounce(
      () => this.sendShinyCurrentSize(),
      200
    );

    const resizeObserver = new ResizeObserver((els) => {
      for (const el of els) {
        if (el.target === this) {
          sendShinyCurrentSizeDebounced();
        }
      }
    });

    resizeObserver.observe(this);
  }

  render() {
    if (!this.value) {
      return html``;
    }
    return html`<img
     ${spread(this.value)}
    ></img>`;
  }
}

customElements.define("forge-output-plot", ForgeOutputPlot);

makeOutputBinding("forge-output-plot");

declare global {
  interface HTMLElementTagNameMap {
    "forge-output-plot": ForgeOutputPlot;
  }
}
