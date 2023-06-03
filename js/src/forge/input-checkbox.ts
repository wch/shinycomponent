import { SlCheckbox } from "@shoelace-style/shoelace";
import { make_input_binding } from "../make_input_binding";
import {
  ValueChangeEmitter,
  make_value_change_emitter,
} from "../make_value_change_emitter";

// TODO: Figure out clearner way to deal with `value` attribute not containing
// the checked value.

export class ForgeInputCheckbox extends SlCheckbox {
  inline: boolean = false;

  onChangeCallback: (x: boolean) => void = (x: boolean) => {};
  on_value_change: ValueChangeEmitter = () => {};

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
      this.on_value_change = make_value_change_emitter(this, this.id);
    }
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("checked")) {
      this.onChangeCallback(true);
      this.on_value_change({ type: "boolean", value: this.checked });
    }
  }
}

customElements.define("forge-input-checkbox", ForgeInputCheckbox);

make_input_binding("forge-input-checkbox", { value_field: "checked" });

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-checkbox": ForgeInputCheckbox;
  }
}
