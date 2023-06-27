import SlCheckbox from "@shoelace-style/shoelace/dist/components/checkbox/checkbox.js";
import { CSSResultGroup, css } from "lit";
import { property } from "lit/decorators.js";
import {
  ValueChangeEmitter,
  makeValueChangeEmitter,
} from "../make_value_change_emitter";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "../shiny/make-input-binding";

export class ForgeInputCheckbox
  extends SlCheckbox
  implements CustomElementInputGetValue<boolean>
{
  static styles: CSSResultGroup = [
    SlCheckbox.styles,
    css`
      :host {
        display: block;
      }

      :host(.inline) {
        display: inline-block;
        margin-right: var(--sl-spacing-small);
      }
    `,
  ];

  @property({ type: Boolean }) inline: boolean = false;

  onChangeCallback: (x: boolean) => void = (x: boolean) => {};
  onValueChange: ValueChangeEmitter = () => {};

  connectedCallback() {
    super.connectedCallback();
    // Interpret the presence of a value attribute as "checked"
    if (this.value !== undefined) {
      this.checked = true;
    }
    if (this.inline) {
      this.classList.add("inline");
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
