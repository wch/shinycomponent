import { LitElement, css, html } from "lit";
import { make_input_binding } from "./make_input_binding";
import {
  make_value_change_emitter,
  make_input_event_id,
} from "./make_value_change_emitter";

export class SimpleNumberInput extends LitElement {
  low: number = 0;
  high: number = 10;
  value: number = (this.low + this.high) / 2;

  onChangeCallback = (x: boolean) => {};
  on_value_change = make_value_change_emitter(this, this.id);

  static properties = { value: { type: Number } };
  static styles = css`
    input {
      border-radius: var(--radius-1);
    }
    input:invalid {
      outline: var(--border-size-2) solid var(--red-10);
    }
    span {
      display: inline-block;
      font-size: var(--font-size-0);
      font-weight: var(--font-weight-1);
      color: var(--red-6);
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
      this.low,
      this.high
    );
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
        min=${this.low}
        max=${this.high}
        @change=${this.handle_change}
        type="number"
      />
      <span>Make sure your number is between ${this.low} and ${this.high}</span>
    `;
  }
}

// Register both the custom element and the input bindings
customElements.define("simple-number-input", SimpleNumberInput);
make_input_binding("simple-number-input");

function clamp(x: number, min: number, max: number): number {
  return Math.max(Math.min(x, max), min);
}
