import { LitElement, css, html } from "lit";
import { make_input_binding } from "./make_input_binding";
import {
  make_input_event_id,
  make_value_change_emitter,
} from "./make_value_change_emitter";

export class SimpleNumberInput extends LitElement {
  min: number = 0;
  max: number = 10;
  value: number = (this.min + this.max) / 2;
  invalid: boolean = false;

  onChangeCallback = (x: boolean) => {};
  on_value_change = make_value_change_emitter(this, this.id);

  static properties = {
    min: { type: Number },
    max: { type: Number },
    value: { type: Number },
    invalid: { type: Boolean },
  };

  static styles = css`
    .wrapper {
      display: inline-block;
      background-color: #fff;
      border: none;
      border-radius: 999px;
      outline: var(--border-small) solid var(--color-border-2);
    }
    .wrapper.invalid {
      outline: var(--border-small) solid var(--color-error);
    }

    input {
      background-color: #fff;
      padding: var(--space-x-small) 0;
      border: none;
      border-radius: 0;
      outline-width: 0;
      font-size: var(--font-body);
      text-align: center;
      /* max-width: 100%;
      width: 300px; */
    }
    input:focus-visible {
      outline-width: 0;
    }

    /* Hide the number input's spin buttons */
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }

    button {
      display: inline-block;
      padding-top: var(--space-small);
      padding-bottom: var(--space-small);
      font-size: var(--font-body);
      border: none;
      background-color: rgba(0, 0, 0, 0);
    }
    button:hover {
      cursor: pointer;
    }
    button.left {
      padding-right: var(--space-x-small);
      padding-left: var(--space-small);
    }
    button.right {
      padding-right: var(--space-small);
      padding-left: var(--space-x-small);
    }

    span {
      display: inline-block;
      margin-left: var(--space-x-small);
      font-size: var(--font-body);
      color: var(--color-error);
      transform: scaleX(0);
      transition: transform 0.3s var(--ease-squish-2);
      transform-origin: left;
    }
    input:invalid + span {
      transform: scaleX(1);
    }
  `;

  getInputElement(): HTMLInputElement {
    return this.shadowRoot!.querySelector("input")!;
  }

  handle_minus(e: InputEvent | KeyboardEvent) {
    // Cases:
    // - inputValue is min or less : set to min
    // - inputValue is between (min, max] : set to inputValue - 1
    // - inputValue is greater than max : set to max
    // - inputValue is NaN : set to min
    const inputValue = this.getInputElement().valueAsNumber;
    let newValue;

    if (isNaN(inputValue)) {
      newValue = this.min;
    } else {
      newValue = clamp(inputValue - 1, this.min, this.max);
    }

    this.getInputElement().value = newValue.toString();
    this.value = newValue;
    this.invalid = false;
    this.alert_of_change();
  }

  handle_plus(e: InputEvent | KeyboardEvent) {
    const inputValue = this.getInputElement().valueAsNumber;
    let newValue;

    if (isNaN(inputValue)) {
      newValue = this.max;
    } else {
      newValue = clamp(inputValue + 1, this.min, this.max);
    }

    this.getInputElement().value = newValue.toString();
    this.value = newValue;
    this.invalid = false;
    this.alert_of_change();
  }

  handle_change(e: InputEvent) {
    const inputValue = (e.target as HTMLInputElement).valueAsNumber;
    const clampedValue = clamp(inputValue, this.min, this.max);

    if (clampedValue === inputValue) {
      this.value = clampedValue;
      this.invalid = false;
      this.alert_of_change();
    } else {
      this.invalid = true;
    }
  }

  alert_of_change() {
    this.onChangeCallback(true); // Tell the output binding we've changed
    this.on_value_change({ type: "number", value: this.value });
  }

  connectedCallback() {
    super.connectedCallback();

    // Attempt to send message about value as late as possible so watchers can still
    // pick it up.
    setTimeout(() => {
      this.alert_of_change();
    }, 2);
  }

  render() {
    return html`
      <div class="wrapper ${this.invalid ? "invalid" : null}">
        <button
          class="plusminus left"
          @mousedown=${this.handle_minus}
          @keydown=${(e: KeyboardEvent) => {
            if (e.code === "Space") this.handle_minus(e);
          }}
        >
          −</button
        ><input
          value=${this.value}
          min=${this.min}
          max=${this.max}
          @input=${this.handle_change}
          type="number"
        /><button
          class="plusminus right"
          @mousedown=${this.handle_plus}
          @keydown=${(e: KeyboardEvent) => {
            if (e.code === "Space") this.handle_plus(e);
          }}
        >
          +
        </button>
      </div>
      <span>Make sure your number is between ${this.min} and ${this.max}</span>
    `;
  }
}

// Register both the custom element and the input bindings
customElements.define("simple-number-input", SimpleNumberInput);
make_input_binding("simple-number-input");

function clamp(x: number, min: number, max: number): number {
  return Math.max(Math.min(x, max), min);
}
