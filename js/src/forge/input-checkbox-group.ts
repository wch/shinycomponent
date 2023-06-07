import { LitElement, html } from "lit";
import {
  CustomElementInputValue,
  makeInputBinding,
} from "../make_input_binding";
import { makeValueChangeEmitter } from "../make_value_change_emitter";

// TODO:
// - Accept choices as object, not just string[]
// - Is 'name' the right attribute name?

export class ForgeInputCheckboxGroup
  extends LitElement
  implements CustomElementInputValue<string[]>
{
  onChangeCallback: (x: boolean) => void = (x: boolean) => {};

  onValueChange = makeValueChangeEmitter(this, this.id);

  static properties = {
    choices: { type: Array },
    selected: { type: Array },
    value: { type: Array },
  };
  choices?: string[];
  selected?: string[] = [];
  value: string[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    if (this.selected === undefined || this.selected === null) {
      this.selected = [];
    } else if (typeof this.selected === "string") {
      this.selected = [this.selected];
    }

    this.value = [...this.selected];
  }

  handleChange() {
    this.value = [];
    this.shadowRoot!.querySelectorAll("forge-input-checkbox").forEach((el) => {
      if (el.checked) {
        this.value.push(el.getAttribute("name")!);
      }
    });

    this.onValueChange({ type: "string[]", value: this.value });
    this.onChangeCallback(true);
  }

  render() {
    const selected = this.selected || [];

    return html`
      <div class="checkbox-group">
        ${this.choices?.map((choice) => {
          return html`<forge-input-checkbox
            name=${choice}
            ?value=${selected.includes(choice)}
            .onChangeCallback=${() => {
              this.handleChange();
            }}
            >${choice}</forge-input-checkbox
          >`;
        })}
      </div>
    `;
  }
}

customElements.define("forge-input-checkbox-group", ForgeInputCheckboxGroup);
makeInputBinding("forge-input-checkbox-group");

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-checkbox-group": ForgeInputCheckboxGroup;
  }
}
