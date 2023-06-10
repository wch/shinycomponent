import { LitElement, css, html } from "lit";
import {
  CustomElementInputValue,
  makeInputBinding,
} from "./make-input-binding";
import { makeValueChangeEmitter } from "./make_value_change_emitter";

export class SimpleNumberInput
  extends LitElement
  implements CustomElementInputValue<number>
{
  min: number = 0;
  max: number = 10;
  value: number = (this.min + this.max) / 2;
  invalid: boolean = false;

  onChangeCallback = (x: boolean) => {};
  onValueChange = makeValueChangeEmitter(this, this.id);

  static properties = {
    min: { type: Number },
    max: { type: Number },
    value: { type: Number },
    invalid: { type: Boolean },
  };

  static styles = css`
    :host {
      --inline-padding: var(--number-input-padding-block, var(--size-1));

      font-size: var(--number-input-font-size, var(--font-size-3));
      position: relative;
      width: var(--number-input-width, fit-content);
      height: var(--number-input-height, fit-content);
    }

    .wrapper {
      display: inline-flex;
      background-color: var(
        --number-input-bg-color,
        var(--sl-input-background-color)
      );
      background-image: var(--number-input-bg-image);
      color: var(--number-input-text-color, var(--sl-input-color));
      border: none;
      border-radius: var(
        --number-input-border-radius,
        var(--sl-border-radius-pill)
      );
      outline: var(--number-input-border-width, var(--sl-input-border-width))
        solid var(--number-input-border-color, var(--sl-input-border-color));
      padding: var(--inline-padding)
        var(--number-input-padding-inline, var(--size-2));
    }

    .wrapper.invalid {
      outline-color: var(--warning);
    }

    input {
      font-size: inherit;
      border: none;
      background-color: transparent;
      color: inherit;
      outline-width: 0;
      text-align: center;
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

    .plusminus {
      font-size: inherit;
      border: var(--number-input-plusminus-border, none);
      background-color: transparent;
      color: inherit;
    }

    .plusminus:hover {
      cursor: pointer;
    }

    .plusminus.left {
      padding-inline-start: var(--inline-padding);
    }

    .plusminus.right {
      padding-inline-end: var(--inline-padding);
    }

    .validation-msg {
      position: absolute;

      /* margin-left: var(--space-x-small); */
      font-size: var(
        --number-input-warning-font-size,
        var(--sl-font-size-x-small)
      );
      top: calc(115%);
      color: var(--warning);
      transform: scaleX(0);
      transition: transform var(--sl-transition-fast) var(--ease-squish-2);
      transform-origin: left;
    }

    .wrapper.invalid .validation-msg {
      transform: scaleX(1);
    }
  `;

  getInputElement(): HTMLInputElement {
    return this.shadowRoot!.querySelector("input")!;
  }

  handleMinus(e: InputEvent | KeyboardEvent) {
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
    this.alertOfChange();
  }

  handlePlus(e: InputEvent | KeyboardEvent) {
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
    this.alertOfChange();
  }

  handleChange(e: InputEvent) {
    const inputValue = (e.target as HTMLInputElement).valueAsNumber;
    const clampedValue = clamp(inputValue, this.min, this.max);

    if (clampedValue === inputValue) {
      this.value = clampedValue;
      this.invalid = false;
      this.alertOfChange();
    } else {
      this.invalid = true;
    }
  }

  alertOfChange() {
    this.onChangeCallback(true); // Tell the output binding we've changed
    this.onValueChange({ type: "number", value: this.value });
  }

  connectedCallback() {
    super.connectedCallback();

    // Attempt to send message about value as late as possible so watchers can still
    // pick it up.
    setTimeout(() => {
      this.alertOfChange();
    }, 2);
  }

  render() {
    return html`
      <div class="wrapper ${this.invalid ? "invalid" : null}">
        <button
          part="minus-button"
          class="plusminus left"
          @mousedown=${this.handleMinus}
          @keydown=${(e: KeyboardEvent) => {
            if (e.code === "Space") this.handleMinus(e);
          }}
        >
          −</button
        ><input
          part="input"
          value=${this.value}
          min=${this.min}
          max=${this.max}
          @input=${this.handleChange}
          type="number"
        /><button
          part="plus-button"
          class="plusminus right"
          @mousedown=${this.handlePlus}
          @keydown=${(e: KeyboardEvent) => {
            if (e.code === "Space") this.handlePlus(e);
          }}
        >
          +
        </button>
        <span class="validation-msg"
          >Make sure your number is between ${this.min} and ${this.max}</span
        >
      </div>
    `;
  }
}

// Register both the custom element and the input bindings
customElements.define("simple-number-input", SimpleNumberInput);
makeInputBinding("simple-number-input");

function clamp(x: number, min: number, max: number): number {
  return Math.max(Math.min(x, max), min);
}
