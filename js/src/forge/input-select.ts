import { SlSelect } from "@shoelace-style/shoelace";
import { html, render } from "lit";
import { property } from "lit/decorators.js";
import {
  CustomElementInputGetValue,
  make_input_binding,
} from "../make_input_binding";
import { make_value_change_emitter } from "../make_value_change_emitter";
import { escapeSpaces, unescapeSpaces } from "./utils";

// TODO:
// - Multiple select
// - Figure out clearner way to deal with `value` attribute not containing the
//   checked value.
// - Accept choices as object, not just string[]

export class ForgeInputSelect
  extends SlSelect
  implements CustomElementInputGetValue<string>
{
  onChangeCallback: (x: boolean) => void = (x: boolean) => {};
  on_value_change = make_value_change_emitter(this, this.id);

  @property({ type: Array }) choices: string[] = [];
  @property({ type: String }) selected: string = "";

  connectedCallback(): void {
    super.connectedCallback();
    this.value = escapeSpaces(this.selected);

    // Insert the <sl-option> elements at this time, before the first update
    // cycle.
    const children = html`
      ${this.choices?.map(
        (choice) =>
          html`<sl-option value=${escapeSpaces(choice)}>${choice}</sl-option>`
      )}
    `;

    render(children, this);
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("value")) {
      this.onChangeCallback(true);
      this.on_value_change({
        type: "string",
        value: this.getValue(),
      });
    }
  }

  getValue(): string {
    return unescapeSpaces(this.value as string);
  }
}

customElements.define("forge-input-select", ForgeInputSelect);

make_input_binding("forge-input-select");

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-select": ForgeInputSelect;
  }
}
