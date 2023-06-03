import { CSSResultGroup, css } from "lit";
import { make_input_binding } from "../make_input_binding";
import { make_value_change_emitter } from "../make_value_change_emitter";
import { ForgeInputText } from "./input-text";

export class ForgeInputNumber extends ForgeInputText {
  on_value_change = make_value_change_emitter(this, this.id);

  static properties = {
    min: { type: Number },
    max: { type: Number },
    invalid: { type: Boolean },
    ...ForgeInputText.properties,
  };

  min: number = -Infinity;
  max: number = Infinity;
  invalid: boolean = false;

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
        this.value = String(clampedValue);
        this.invalid = false;
      } else {
        this.invalid = true;
      }
      this.updateInvalidClass();
    });
    this.type = "number";
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
    this.on_value_change({ type: "string", value: this.value });
  }
}

customElements.define("forge-input-number", ForgeInputNumber);

make_input_binding("forge-input-number", { type: "shiny:number" });

function clamp(x: number, min: number, max: number): number {
  return Math.max(Math.min(x, max), min);
}

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-number": ForgeInputNumber;
  }
}
