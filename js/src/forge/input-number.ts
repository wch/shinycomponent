import { CSSResultGroup, css } from "lit";
import { property } from "lit/decorators.js";
import { make_input_binding } from "../make_input_binding";
import { make_value_change_emitter } from "../make_value_change_emitter";
import { ForgeInputText } from "./input-text";

export class ForgeInputNumber extends ForgeInputText {
  on_value_change = make_value_change_emitter(this, this.id);

  @property({ type: Number }) min: number = -Infinity;
  @property({ type: Number }) max: number = Infinity;
  @property({ type: Number }) value_num: number = Infinity;
  @property({ type: Boolean }) invalid: boolean = false;

  static styles: CSSResultGroup = [
    css`
      div.invalid {
        outline: 3px solid var(--color-error);
      }
    `,
    ForgeInputText.styles,
  ];

  constructor() {
    super();
    this.addEventListener("input", () => {
      const inputValue = this.shadowRoot!.querySelector("input")!.valueAsNumber;
      const clampedValue = clamp(inputValue, this.min, this.max);

      if (clampedValue === inputValue) {
        this.value_num = clampedValue;
        this.value = String(clampedValue);
        this.invalid = false;
      } else {
        this.invalid = true;
      }
      this.updateInvalidClass();
    });
    this.type = "number";
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.value_num = clamp(Number(this.value), this.min, this.max);
  }

  updateInvalidClass() {
    const wrapper = this.shadowRoot?.querySelector("div.input");
    if (this.invalid) {
      wrapper?.classList.add("invalid");
    } else {
      wrapper?.classList.remove("invalid");
    }
  }

  notifyChange(): void {
    if (this.invalid) {
      return;
    }
    this.onChangeCallback(true);
    this.on_value_change({ type: "number", value: this.value_num });
  }
}

customElements.define("forge-input-number", ForgeInputNumber);

make_input_binding("forge-input-number", {
  // TODO: Implement an accessor instead of value_field? That would also allow
  // us to avoid setting this.value_num in connectedCallback.
  value_field: "value_num",
  type: "shiny.number",
});

function clamp(x: number, min: number, max: number): number {
  return Math.max(Math.min(x, max), min);
}

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-number": ForgeInputNumber;
  }
}
