import SlRadioButton from "@shoelace-style/shoelace/dist/components/radio-button/radio-button.js";
import SlRadioGroup from "@shoelace-style/shoelace/dist/components/radio-group/radio-group.js";
import SlRadio from "@shoelace-style/shoelace/dist/components/radio/radio.js";
import { CSSResultGroup, TemplateResult, css, html, render } from "lit";
import { property } from "lit/decorators.js";
import {
  CustomElementInputValue,
  makeInputBinding,
} from "../make-input-binding";
import { makeValueChangeEmitter } from "../make_value_change_emitter";
import { escapeSpaces, unescapeSpaces } from "./utils";

// Prevent tree-shaking of these components, which we rely on.
SlRadio;
SlRadioButton;

export class ForgeInputRadioButtons
  extends SlRadioGroup
  implements CustomElementInputValue<string>
{
  static styles: CSSResultGroup = [
    SlRadioGroup.styles,
    css`
      ::slotted(sl-radio.inline) {
        display: inline-block;

        /* TODO: Fix precedence so this rule gets used. */
        margin-right: var(--sl-spacing-small);
      }

      ::slotted(sl-radio) {
        margin-bottom: var(--sl-spacing-3x-small);
      }
    `,
  ];

  onChangeCallback: (x: boolean) => void = (x: boolean) => {};

  onValueChange = makeValueChangeEmitter(this, this.id);

  @property({ type: Array }) choices: string[] = [];
  @property({ type: String }) selected: string | null = null;
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
    const children = generateOptions(
      this.choices,
      this.button,
      this.size,
      this.inline,
      this.pill
    );
    render(children, this);
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("value")) {
      this.onChangeCallback(true);
      this.onValueChange({ type: "string", value: this.getValue() });
    }
  }

  getValue(): string {
    return unescapeSpaces(this.value);
  }
}

customElements.define("forge-input-radio-buttons", ForgeInputRadioButtons);
makeInputBinding("forge-input-radio-buttons");

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-radio-buttons": ForgeInputRadioButtons;
  }
}

// =============================================================================
// Utility functions
// =============================================================================

// Choices could be be like the following.
//   ["a", "b", "c"]
//   {"a": "Choice A", "b": "<i>Choice B</i>"}
type RadioChoices = string[] | Record<string, string>;

type NormalizedRadioChoices = Record<string, string>;

export function normalizeRadioChoices(
  choices: RadioChoices
): NormalizedRadioChoices {
  if (Array.isArray(choices)) {
    return Object.fromEntries(choices.map((x) => [x, x]));
  } else {
    return choices;
  }
}

function generateOptions(
  choices: RadioChoices,
  button: boolean,
  size: "small" | "medium" | "large",
  inline: boolean,
  pill: boolean
): TemplateResult {
  const normalized = normalizeRadioChoices(choices);

  return html`${Object.entries(normalized).map(([key, value]) => {
    if (button) {
      return html`<sl-radio-button
        value=${escapeSpaces(key)}
        size=${size}
        pill=${pill}
        >${value}</sl-radio-button
      >`;
    } else {
      return html`<sl-radio
        value=${escapeSpaces(key)}
        class=${inline ? "inline" : null}
        size=${size}
        >${value}</sl-radio
      >`;
    }
  })}`;
}
