import { CSSResultGroup, LitElement, TemplateResult, css, html } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "../make-input-binding";
import { makeValueChangeEmitter } from "../make_value_change_emitter";
import { escapeSpaces, unescapeSpaces } from "./utils";

export class ForgeInputCheckboxGroup
  extends LitElement
  implements CustomElementInputGetValue<string[]>
{
  static styles: CSSResultGroup = css`
    .form-control--small {
      font-size: var(--sl-input-label-font-size-small);
    }
    .form-control--medium {
      font-size: var(--sl-input-label-font-size-medium);
    }

    label.form-control-label {
      display: inline-block;
      color: var(--sl-input-label-color);
      margin-bottom: var(--sl-spacing-3x-small);
    }

    forge-input-checkbox {
      margin-bottom: var(--sl-spacing-3x-small);
    }
  `;
  onChangeCallback: (x: boolean) => void = (x: boolean) => {};

  onValueChange = makeValueChangeEmitter(this, this.id);

  @property({ type: String }) label: string | null = null;
  @property({ type: Array }) choices: string[] = [];
  @property({ type: Array }) selected: string[] = [];
  @property({ type: String }) size: "small" | "medium" | "large" = "medium";
  @property({ type: Boolean }) inline: boolean = false;

  connectedCallback(): void {
    super.connectedCallback();
    if (this.selected === undefined || this.selected === null) {
      this.selected = [];
    } else if (typeof this.selected === "string") {
      this.selected = [this.selected];
    }
  }

  handleChange() {
    this.selected = this.findSelectedItems();
    this.onValueChange({ type: "string[]", value: this.getValue() });
    this.onChangeCallback(true);
  }

  render() {
    const selected = this.selected || [];
    const changeCallback = () => {
      this.handleChange();
    };

    return html`
      <div
        part="form-control"
        class=${classMap({
          "form-control": true,
          "form-control--small": this.size === "small",
          "form-control--medium": this.size === "medium",
          "form-control--large": this.size === "large",
          "form-control--has-label": this.label !== null,
        })}
      >
        <label
          part="form-control-label"
          class="form-control-label"
          aria-hidden=${this.label !== null}
        >
          <slot name="label">${this.label}</slot>
        </label>
        <div part="form-control-input" class="form-control-input">
          ${generateOptions(
            this.choices,
            selected,
            this.size,
            this.inline,
            changeCallback
          )}
        </div>
      </div>
    `;
  }

  getValue(): string[] {
    return this.selected.map(unescapeSpaces);
  }

  findSelectedItems(): string[] {
    const selected: string[] = [];
    this.shadowRoot!.querySelectorAll("forge-input-checkbox").forEach((el) => {
      if (el.checked) {
        selected.push(unescapeSpaces(el.getAttribute("name")!));
      }
    });
    return selected;
  }
}

customElements.define("forge-input-checkbox-group", ForgeInputCheckboxGroup);
makeInputBinding("forge-input-checkbox-group");

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-checkbox-group": ForgeInputCheckboxGroup;
  }
}

// =============================================================================
// Utility functions
// =============================================================================

// Choices could be be like the following.
//   ["a", "b", "c"]
//   {"a": "Choice A", "b": "<i>Choice B</i>"}
type CheckboxGroupChoices = string[] | Record<string, string>;

type NormalizedCheckboxGroupChoices = Record<string, string>;

export function normalizeCheckboxGroupChoices(
  choices: CheckboxGroupChoices
): NormalizedCheckboxGroupChoices {
  if (Array.isArray(choices)) {
    return Object.fromEntries(choices.map((x) => [x, x]));
  } else {
    return choices;
  }
}

function generateOptions(
  choices: CheckboxGroupChoices,
  selected: string[],
  size: "small" | "medium" | "large",
  inline: boolean,
  changeCallback: () => void
): TemplateResult {
  const normalized = normalizeCheckboxGroupChoices(choices);
  return html`${Object.entries(normalized).map(([key, value]) => {
    return html`<forge-input-checkbox
      name=${escapeSpaces(key)}
      ?value=${selected.includes(escapeSpaces(key))}
      ?inline=${inline}
      size=${size}
      .onChangeCallback=${changeCallback}
      >${value}</forge-input-checkbox
    >`;
  })}`;
}
