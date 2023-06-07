import { SlRadioGroup } from "@shoelace-style/shoelace";
import { html, render } from "lit";
import { property } from "lit/decorators.js";
import {
  CustomElementInputValue,
  make_input_binding,
} from "../make_input_binding";
import { make_value_change_emitter } from "../make_value_change_emitter";
import { escapeSpaces, unescapeSpaces } from "./utils";

// TODO:
// - Accept choices as object, not just string[]
// - Is 'name' the right attribute name?

export class ForgeInputRadioButtons
  extends SlRadioGroup
  implements CustomElementInputValue<string>
{
  onChangeCallback: (x: boolean) => void = (x: boolean) => {};

  on_value_change = make_value_change_emitter(this, this.id);

  @property({ type: Array }) choices: string[] = [];
  @property({ type: String }) selected: string = "";
  @property({ type: String }) size: "small" | "medium" | "large" = "medium";
  @property({ type: Boolean }) inline: boolean = false;
  @property({ type: Boolean }) button: boolean = false;
  @property({ type: Boolean }) pill: boolean = false;

  connectedCallback(): void {
    super.connectedCallback();
    if (this.selected === undefined || this.selected === null)
      this.selected = "";
    this.value = escapeSpaces(this.selected);

    // Insert the <sl-radio> elements at this time, before the first update
    // cycle.
    const children = html`
      ${this.choices?.map((choice) => {
        if (this.button) {
          return html`<sl-radio-button
            style=${this.inline ? "display: inline;" : null}
            value=${escapeSpaces(choice)}
            size=${this.size}
            pill=${this.pill}
            >${choice}</sl-radio-button
          >`;
        } else {
          return html`<sl-radio
            style=${this.inline ? "display: inline;" : null}
            value=${escapeSpaces(choice)}
            >${choice}</sl-radio
          >`;
        }
      })}
    `;

    render(children, this);
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("value")) {
      this.onChangeCallback(true);
      this.on_value_change({ type: "string", value: this.getValue() });
    }
  }

  getValue(): string {
    return unescapeSpaces(this.value);
  }
}

customElements.define("forge-input-radio-buttons", ForgeInputRadioButtons);
make_input_binding("forge-input-radio-buttons");

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-radio-buttons": ForgeInputRadioButtons;
  }
}
