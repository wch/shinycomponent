import { CSSResultGroup, css } from "lit";
import { property } from "lit/decorators.js";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "../make_input_binding";
import { makeValueChangeEmitter } from "../make_value_change_emitter";
import { ForgeInputText } from "./input-text";

export class ForgeInputNumber
  extends ForgeInputText
  implements CustomElementInputGetValue<number>
{
  onValueChange = makeValueChangeEmitter(this, this.id);

  @property({ type: Number }) min: number = -Infinity;
  @property({ type: Number }) max: number = Infinity;
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
        this.value = String(clampedValue);
        this.invalid = false;
      } else {
        this.invalid = true;
      }
      this.updateInvalidClass();
    });
    this.type = "number";
  }

  getValue(): number {
    return Number(this.value);
  }

  connectedCallback(): void {
    super.connectedCallback();
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
    this.onValueChange({ type: "number", value: this.getValue() });
  }
}

customElements.define("forge-input-number", ForgeInputNumber);
makeInputBinding("forge-input-number", { type: "shiny.number" });

function clamp(x: number, min: number, max: number): number {
  return Math.max(Math.min(x, max), min);
}

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-number": ForgeInputNumber;
  }
}
