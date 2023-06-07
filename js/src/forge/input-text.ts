import { SlInput } from "@shoelace-style/shoelace";
import debounce from "just-debounce-it";
import {
  CustomElementInputValue,
  makeInputBinding,
} from "../make_input_binding";
import { makeValueChangeEmitter } from "../make_value_change_emitter";

export class ForgeInputText
  extends SlInput
  implements CustomElementInputValue<string>
{
  onChangeCallback: (x: boolean) => void = (x: boolean) => {};
  "wait-for-enter": boolean = false;
  debounce: number = 250;

  static properties = {
    "wait-for-enter": { type: Boolean },
    debounce: { type: Number },
  };

  onValueChange = makeValueChangeEmitter(this, this.id);

  connectedCallback(): void {
    super.connectedCallback();

    const notifyChangeDebounced = debounce(() => {
      this.notifyChange();
    }, this.debounce);

    this.addEventListener("input", () => {
      if (this["wait-for-enter"]) return;
      notifyChangeDebounced();
    });

    this.addEventListener("keydown", (e) => {
      if (!this["wait-for-enter"]) return;
      if (e.code === "Enter") {
        this.notifyChange();
      }
    });

    this.addEventListener("blur", (e) => this.notifyChange());
  }

  notifyChange(): void {
    this.onChangeCallback(true);
    this.onValueChange({ type: "string", value: this.value });
  }
}

customElements.define("forge-input-text", ForgeInputText);

makeInputBinding("forge-input-text");

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-text": ForgeInputText;
  }
}
