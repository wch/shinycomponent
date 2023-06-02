import { SlInput } from "@shoelace-style/shoelace";
import {
  CSSResultGroup,
  LitElement,
  PropertyValues,
  css,
  html,
  render,
} from "lit";
import { make_input_binding } from "../make_input_binding";
import { make_value_change_emitter } from "../make_value_change_emitter";
import { ForgeTextInput } from "./text-input";

export class ForgeNumberInput extends ForgeTextInput {
  on_value_change = make_value_change_emitter(this, this.id);

  static properties = {
    min: { type: Number },
    ...ForgeTextInput.properties,
  };

  min: number = -Infinity;
  max: number = Infinity;

  static styles: CSSResultGroup = [
    css`
      div.invalid {
        outline: 3px solid var(--color-error);
      }
    `,
    ForgeTextInput.styles,
  ];

  constructor() {
    super();
    this.type = "number";
  }

  setInvalidClass(invalid: boolean) {
    const wrapper = this.shadowRoot?.querySelector("div.input");
    if (invalid) {
      wrapper?.classList.add("invalid");
    } else {
      wrapper?.classList.remove("invalid");
    }
  }

  handleChange1() {
    const inputValue = this.shadowRoot!.querySelector("input")!.valueAsNumber;
    const clampedValue = clamp(inputValue, this.min, this.max);

    if (clampedValue === inputValue) {
      this.value = String(clampedValue);
      this.setInvalidClass(false);
      this.notifyChange();
    } else {
      this.setInvalidClass(true);
    }
  }

  notifyChange(): void {
    this.onChangeCallback(true);
    this.on_value_change({ type: "string", value: this.value });
  }
}

customElements.define("forge-number-input", ForgeNumberInput);

make_input_binding("forge-number-input");

function clamp(x: number, min: number, max: number): number {
  return Math.max(Math.min(x, max), min);
}
