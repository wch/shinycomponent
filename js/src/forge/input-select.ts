import { SlSelect } from "@shoelace-style/shoelace";
import { TemplateResult, html, render } from "lit";
import { property } from "lit/decorators.js";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "../make-input-binding";
import { makeValueChangeEmitter } from "../make_value_change_emitter";
import { escapeSpaces, unescapeSpaces } from "./utils";

// TODO:
// - Multiple select
// - Figure out clearner way to deal with `value` attribute not containing the
//   checked value.
// - Accept choices as object, not just string[]

export class ForgeInputSelect
  extends SlSelect
  implements CustomElementInputGetValue<string | string[]>
{
  onChangeCallback: (x: boolean) => void = (x: boolean) => {};
  onValueChange = makeValueChangeEmitter(this, this.id);

  @property({ type: Array }) choices: string[] | Record<string, string> = [];
  @property({ type: String }) selected: string = "";

  connectedCallback(): void {
    super.connectedCallback();
    let selected: string | string[] | null = JSON.parse(this.selected);
    if (selected === undefined || selected === null) {
      selected = [];
    }
    if (typeof selected === "string") {
      selected = [selected];
    }
    this.value = selected.map(escapeSpaces);
    const choices = normalizeSelectChoices(this.choices);
    // Insert the <sl-option> elements at this time, before the first update
    // cycle.
    const children = generateOptions(choices);

    render(children, this);
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("value")) {
      this.onChangeCallback(true);
      let value = this.getValue();
      // TODO: Modify makeValueChangeEmitter to allow for union types, like
      // string | string[]. Then the wrapping below can be removed.
      if (!Array.isArray(value)) {
        value = [value];
      }
      this.onValueChange({
        type: "string[]",
        value: value,
      });
    }
  }

  getValue(): string | string[] {
    if (Array.isArray(this.value)) {
      return this.value.map(unescapeSpaces);
    }
    return unescapeSpaces(this.value as string);
  }
}

customElements.define("forge-input-select", ForgeInputSelect);

makeInputBinding("forge-input-select");

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-select": ForgeInputSelect;
  }
}

// =============================================================================
// Utility functions
// =============================================================================

// Choices could be be like the following. It allows one level of nesting.
//   ["a", "b", "c"]
//   {"a": "Choice A", "b": "<i>Choice B</i>"}
//   {"Group A": {"a1": "Choice A1", "a2": "<i>Choice A2</i>"},
//    "Group B": {},
//    "c": ["c1", "c2"],
//    "d": "Choice D"
//   }
type SelectChoices =
  | string[]
  | Record<string, string>
  | Record<string, string | string[] | Record<string, string>>;

type NormalizedSelectChoices = Record<string, string | Record<string, string>>;

export function normalizeSelectChoices(
  choices: SelectChoices
): NormalizedSelectChoices {
  if (Array.isArray(choices)) {
    return Object.fromEntries(choices.map((x) => [x, x]));
  } else {
    const normalized: NormalizedSelectChoices = {};
    for (const [key, value] of Object.entries(choices)) {
      if (Array.isArray(value)) {
        normalized[key] = Object.fromEntries(value.map((x) => [x, x]));
      } else {
        normalized[key] = value;
      }
    }
    return normalized;
  }
}

function generateOptions(choices: SelectChoices): TemplateResult {
  const normalized = normalizeSelectChoices(choices);
  return html`${Object.entries(normalized).map(([key, value]) => {
    if (typeof value === "string") {
      return html`<sl-option value=${escapeSpaces(key)}>${value}</sl-option>`;
    } else {
      return html`
        <small>${key}</small>
        ${Object.entries(value).map(([key, value]) => {
          return html`<sl-option value=${escapeSpaces(key)}
            >${value}</sl-option
          >`;
        })}
      </sl-menu>`;
    }
  })}`;
}
