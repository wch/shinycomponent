import { SlCheckbox } from "@shoelace-style/shoelace";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "../make_input_binding";
import {
  ValueChangeEmitter,
  makeValueChangeEmitter,
} from "../make_value_change_emitter";

// TODO: Figure out clearner way to deal with `value` attribute not containing
// the checked value.

export class ForgeInputCheckbox
  extends SlCheckbox
  implements CustomElementInputGetValue<boolean>
{
  inline: boolean = false;

  onChangeCallback: (x: boolean) => void = (x: boolean) => {};
  onValueChange: ValueChangeEmitter = () => {};

  connectedCallback() {
    super.connectedCallback();
    // Interpret the presence of a value attribute as "checked"
    if (this.value !== undefined) {
      this.checked = true;
    }
    if (!this.inline) {
      this.style.display = "block";
    }
  }

  constructor() {
    super();
    if (this.id) {
      this.onValueChange = makeValueChangeEmitter(this, this.id);
    }
  }

  getValue(): boolean {
    return this.checked;
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("checked")) {
      this.onChangeCallback(true);
      this.onValueChange({ type: "boolean", value: this.checked });
    }
  }
}

customElements.define("forge-input-checkbox", ForgeInputCheckbox);

makeInputBinding("forge-input-checkbox");

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-checkbox": ForgeInputCheckbox;
  }
}
