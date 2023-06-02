import { SlSwitch } from "@shoelace-style/shoelace";
import { make_input_binding } from "../make_input_binding";
import { make_value_change_emitter } from "../make_value_change_emitter";

export class ForgeInputSwitch extends SlSwitch {
  onChangeCallback: (x: boolean) => void = (x: boolean) => {};

  on_value_change = make_value_change_emitter(this, this.id);

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("checked")) {
      this.onChangeCallback(true);
      this.on_value_change({ type: "boolean", value: this.checked });
    }
  }
}

customElements.define("forge-input-switch", ForgeInputSwitch);

make_input_binding("forge-input-switch", "checked");
