import SlInput from "@shoelace-style/shoelace/dist/components/input/input.js";
import debounce from "just-debounce-it";
import { property } from "lit/decorators.js";
import {
  CustomElementInputValue,
  makeInputBinding,
} from "../make-input-binding";
import { makeValueChangeEmitter } from "../make_value_change_emitter";

export class ForgeInputDate
  extends SlInput
  implements CustomElementInputValue<string>
{
  onChangeCallback: (x: boolean) => void = (x: boolean) => {};

  onValueChange = makeValueChangeEmitter(this, this.id);

  constructor() {
    super();
    this.type = "date";
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.addEventListener("input", () => {
      this.notifyChange();
    });

    this.addEventListener("blur", (e) => this.notifyChange());
  }

  notifyChange(): void {
    this.onChangeCallback(true);
    this.onValueChange({ type: "string", value: this.value });
  }
}

customElements.define("forge-input-date", ForgeInputDate);

makeInputBinding("forge-input-date");

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-date": ForgeInputDate;
  }
}
