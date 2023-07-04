import SlInput from "@shoelace-style/shoelace/dist/components/input/input.js";
import debounce from "just-debounce-it";
import { CSSResultGroup, css } from "lit";
import { property } from "lit/decorators.js";
import { makeValueChangeEmitter } from "../make_value_change_emitter";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "../shiny/make-input-binding";

export class ForgeInputNumber
  extends SlInput
  implements CustomElementInputGetValue<number>
{
  static styles: CSSResultGroup = [
    SlInput.styles,
    css`
      .form-control--has-label.form-control--medium .form-control__label {
        margin-bottom: var(--size-xs);
        font-size: var(--font-size-m);
      }

      div.invalid {
        outline-offset: -1px;
        outline: 3px solid var(--danger);
      }
    `,
  ];

  @property({ type: Number }) min: number = -Infinity;
  @property({ type: Number }) max: number = Infinity;
  @property({ type: Boolean }) invalid: boolean = false;
  @property({ type: Boolean, attribute: "wait-for-enter" })
  waitForEnter: boolean = false;
  @property({ type: Number }) debounce: number = 200;

  onValueChange = makeValueChangeEmitter(this, this.id);
  onChangeCallback: (x: boolean) => void = (x: boolean) => {};

  // Record the most recent valid value. We do this because of debouncing: if
  // the user types a valid value, and then keeps adding digits to make it
  // invalid, we want to send the last valid value (before it went into the
  // invalid range).
  //
  // For example, if starting value is 1 and the max is 1000, then if the user
  // types 2, 2, 2, in quick succession, the values in the box will be 12, 122,
  // and 1222. We want to send 122, but this requires a bit of record keeping
  // because updates are debounced. That's what lastValidValue is for.
  lastValidValue: number;

  constructor() {
    super();
    this.type = "number";
    this.lastValidValue = Number(this.value);
  }

  connectedCallback(): void {
    super.connectedCallback();

    const notifyChangeDebounced = debounce(
      () => this.notifyChange(),
      this.debounce
    );

    this.addEventListener("input", () => {
      if (this.waitForEnter) return;

      const rawValue = this.shadowRoot!.querySelector("input")!.valueAsNumber;

      if (rawValue >= this.min && rawValue <= this.max) {
        this.lastValidValue = rawValue;
        this.invalid = false;
        notifyChangeDebounced();
      } else {
        this.invalid = true;
      }
      this.updateInvalidClass();
    });

    this.addEventListener("keydown", (e) => {
      if (!this.waitForEnter) return;
      if (e.code === "Enter") {
        this.notifyChange();
      }
    });

    this.addEventListener("blur", (e) => this.notifyChange());
  }

  getValue(): number {
    return this.lastValidValue;
  }

  updateInvalidClass() {
    const wrapper = this.shadowRoot?.querySelector("div.input");
    if (this.invalid) {
      wrapper?.classList.add("invalid");
    } else {
      wrapper?.classList.remove("invalid");
    }
  }

  notifyChange(): void {
    this.onChangeCallback(true);
    this.onValueChange({ type: "number", value: this.getValue() });
  }
}

customElements.define("forge-input-number", ForgeInputNumber);
makeInputBinding("forge-input-number", { type: "shiny.number" });

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-number": ForgeInputNumber;
  }
}
