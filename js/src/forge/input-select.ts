import { SlSelect } from "@shoelace-style/shoelace";
import { html, render } from "lit";
import { property } from "lit/decorators.js";
import { make_input_binding } from "../make_input_binding";
import { make_value_change_emitter } from "../make_value_change_emitter";

// TODO:
// - Multiple select
// - Figure out clearner way to deal with `value` attribute not containing the
//   checked value.
// - Accept choices as object, not just string[]

export class ForgeInputSelect extends SlSelect {
  onChangeCallback: (x: boolean) => void = (x: boolean) => {};
  on_value_change = make_value_change_emitter(this, this.id);

  @property({ type: Array }) choices: string[] = [];
  @property({ type: String }) selected: string = "";
  @property({ type: String }) value_unescaped: string = "";

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

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("value")) {
      this.value_unescaped = unescapeSpaces(this.value as string);
      this.onChangeCallback(true);
      this.on_value_change({
        type: "string",
        value: this.value_unescaped as string,
      });
    }
  }
}

customElements.define("forge-input-select", ForgeInputSelect);

make_input_binding("forge-input-select", "value_unescaped");

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-select": ForgeInputSelect;
  }
}

function escapeSpaces(str: string): string {
  return str.replace(/_/g, "__").replace(/ /g, "_-");
}

function unescapeSpaces(str: string): string {
  let unescaped = "";
  let state: "normal" | "escaping" = "normal";

  for (const char of str) {
    switch (state) {
      case "normal":
        if (char === "_") {
          state = "escaping";
        } else {
          unescaped += char;
        }
        break;
      case "escaping":
        if (char === "-") {
          unescaped += " ";
        } else if (char === "_") {
          unescaped += "_";
        } else {
          unescaped += "_" + char;
        }
        state = "normal";
        break;
    }
  }

  return unescaped;
}
