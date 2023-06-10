import { SlTextarea } from "@shoelace-style/shoelace";
import debounce from "just-debounce-it";
import { property } from "lit/decorators.js";
import {
  CustomElementInputValue,
  makeInputBinding,
} from "../make_input_binding";
import { makeValueChangeEmitter } from "../make_value_change_emitter";

export class ForgeInputTextArea
  extends SlTextarea
  implements CustomElementInputValue<string>
{
  onChangeCallback: (x: boolean) => void = (x: boolean) => {};

  @property({ type: Boolean, attribute: "wait-for-enter" })
  waitForEnter: boolean = false;
  @property({ type: Number })
  debounce: number = 250;

  onValueChange = makeValueChangeEmitter(this, this.id);

  connectedCallback(): void {
    super.connectedCallback();

    const notifyChangeDebounced = debounce(() => {
      this.notifyChange();
    }, this.debounce);

    this.addEventListener("input", () => {
      if (this.waitForEnter) return;
      notifyChangeDebounced();
    });

    this.addEventListener("keydown", (e) => {
      if (!this.waitForEnter) return;
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

customElements.define("forge-input-text-area", ForgeInputTextArea);

makeInputBinding("forge-input-text-area");

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-text-area": ForgeInputTextArea;
  }
}
