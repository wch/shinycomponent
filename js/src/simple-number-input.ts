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

  onChangeCallback = (x: boolean) => {};
  on_value_change = make_value_change_emitter(this, this.id);

  static properties = {
    min: { type: Number },
    max: { type: Number },
    value: { type: Number },
  };

  static styles = css`
    input {
      padding: var(--space-small);
      border: none;
      border-radius: var(--radius-small);
      outline-width: var(--border-small);
      font-size: var(--font-body);
      max-width: 100%;
      width: 300px;
    }
    input:invalid {
      outline: var(--border-medium) solid var(--color-error);
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

  handle_change(e: InputEvent) {
    this.value = clamp(
      (e.target as HTMLInputElement).valueAsNumber,
      this.min,
      this.max
    );
    // Tell the output binding we've changed
    this.alert_of_change();
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
      <input
        value=${this.value}
        min=${this.min}
        max=${this.max}
        @change=${this.handle_change}
        type="number"
      />
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
