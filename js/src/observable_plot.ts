import * as Plot from "@observablehq/plot";
import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { getElementsFromSlotChangeEvent } from "./utils/getElementsFromSlotChangeEvent";

@customElement("observable-plot")
export class ObservablePlot extends LitElement {
  static styles = [
    css`
      * {
        box-sizing: border-box;
      }

      .slots {
        display: none;
      }

      :host {
        display: block;
        height: 100%;
        padding: var(--size-m);
        padding-block-start: calc(2 * var(--size-m));
      }

      #plot {
        height: 100%;
      }

      figure {
        margin: 0;
        position: relative;
      }

      figure > :first-child {
        position: absolute;
        bottom: 100%;
        left: 0;
      }
    `,
  ];

  @property({ type: Number }) heightPx: number | null = null;
  @property({ type: Number }) widthPx: number | null = null;

  @state() data: object | null = null;

  watchDataSlot(e: Event) {
    const dataElements = getElementsFromSlotChangeEvent(e);

    // Find the first script tag in the data slot
    const dataScript = dataElements.find((el) => el.tagName === "SCRIPT") as
      | HTMLScriptElement
      | undefined;

    if (!dataScript) {
      console.warn("No data script found");
      return;
    }

    // Get the data from the script tag
    const data = JSON.parse(dataScript.textContent || "");

    this.data = data;
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  setPlotHeight(e: Event) {
    console.log("Resize occured", e);
  }

  updated() {
    const plotDiv = this.shadowRoot?.querySelector("#plot") as HTMLDivElement;

    if (plotDiv) {
      this.heightPx = plotDiv.offsetHeight;
      this.widthPx = plotDiv.offsetWidth;
    }
  }

  render() {
    console.log("Rendering observable-plot");
    return html`
      <div class="slots">
        <slot name="data" @slotchange=${this.watchDataSlot}></slot>
        <slot name="spec"></slot>
      </div>
      <div id="plot" @show=${this.setPlotHeight}>
        ${this.data &&
        this.heightPx &&
        this.widthPx &&
        Plot.plot({
          y: {
            grid: true,
            label: "↑ Annual revenue (billions, adj.)",
            transform: (d) => d / 1000, // convert millions to billions
          },
          height: this.heightPx,
          width: this.widthPx,
          color: { legend: true },
          marks: [
            Plot.areaY(
              this.data,
              Plot.stackY(
                { order: null, reverse: false },
                { x: "year", y: "revenue", z: "format", fill: "group" }
              )
            ),
            Plot.ruleY([0]),
          ],
        })}
      </div>
    `;
  }
}
