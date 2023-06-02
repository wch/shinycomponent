import { SlCheckbox } from "@shoelace-style/shoelace";
import { html } from "lit";
import { make_input_binding } from "../make_input_binding";
import { make_value_change_emitter } from "../make_value_change_emitter";

export class ForgeInputCheckbox extends SlCheckbox {
  inline: boolean = false;

  onChangeCallback: (x: boolean) => void = (x: boolean) => {};
  on_value_change = make_value_change_emitter(this, this.id);

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

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("checked")) {
      this.onChangeCallback(true);
      this.on_value_change({ type: "boolean", value: this.checked });
    }
  }
}

customElements.define("forge-input-checkbox", ForgeInputCheckbox);

make_input_binding("forge-input-checkbox", "checked");
