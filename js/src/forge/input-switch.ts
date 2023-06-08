import { SlSwitch } from "@shoelace-style/shoelace";
import { CSSResultGroup, css } from "lit";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "../make_input_binding";
import { makeValueChangeEmitter } from "../make_value_change_emitter";

export class ForgeInputSwitch
  extends SlSwitch
  implements CustomElementInputGetValue<boolean>
{
  inline: boolean = false;

  // Make slider the same size as the "slot".
  static styles: CSSResultGroup = [
    SlSwitch.styles,
    css`
      :host([size="small"]) {
        --thumb-size: calc(var(--sl-toggle-size-small) * 0.85);
        --width: calc(var(--height) * 1.65);
      }
      :host([size="medium"]) {
        --thumb-size: calc(var(--sl-toggle-size-medium) * 0.85);
        --width: calc(var(--height) * 1.65);
      }
      :host([size="large"]) {
        --thumb-size: calc(var(--sl-toggle-size-large) * 0.85);
        --width: calc(var(--height) * 1.65);
      }
    `,
  ];

  onChangeCallback: (x: boolean) => void = (x: boolean) => {};

  onValueChange = makeValueChangeEmitter(this, this.id);

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

customElements.define("forge-input-switch", ForgeInputSwitch);

makeInputBinding("forge-input-switch");

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-switch": ForgeInputSwitch;
  }
}
