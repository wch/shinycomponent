import { LitElement, css, html } from "lit";

// =============================================================================
// WebComponent definition
// =============================================================================
export class ExampleNumberInput extends LitElement {
  min: number = 0;
  max: number = 10;
  value: number = (this.min + this.max) / 2;
  onChangeCallback = (x: boolean) => {};

  static properties = {
    min: { type: Number },
    max: { type: Number },
    value: { type: Number },
  };

  static styles = css`
    input {
      padding: var(--size-2);
      border-radius: var(--radius-2);
      font-size: var(--font-size-1);
    }
    input:invalid {
      outline: var(--border-size-2) solid var(--red-10);
    }
    span {
      display: inline-block;
      font-size: var(--font-size-1);
      font-weight: var(--font-weight-2);
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
      this.min,
      this.max
    );
    // Tell the output binding we've changed
    this.onChangeCallback(true);
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

// Register the custom element with the browser.
customElements.define("example-number-input", ExampleNumberInput);

// =============================================================================
// Register Shiny input binding
// =============================================================================
class ExampleNumberInputBinding extends Shiny.InputBinding {
  constructor() {
    super();
  }

  find(scope: HTMLElement): JQuery<HTMLElement> {
    return $(scope).find("example-number-input");
  }

  getId(el: ExampleNumberInput): string {
    return el.id;
  }

  getValue(el: ExampleNumberInput) {
    return el.value;
  }

  subscribe(el: ExampleNumberInput, callback: (x: boolean) => void): void {
    el.onChangeCallback = callback;
  }

  unsubscribe(el: ExampleNumberInput): void {
    el.onChangeCallback = (x: boolean) => {};
  }
}

Shiny.inputBindings.register(
  new ExampleNumberInputBinding(),
  "ExampleNumberInputBindingBinding"
);

// =============================================================================
// Utility functions
// =============================================================================
function clamp(x: number, min: number, max: number): number {
  return Math.max(Math.min(x, max), min);
}
