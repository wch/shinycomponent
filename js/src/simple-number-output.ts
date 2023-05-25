import { LitElement, PropertyDeclarations, css, html } from "lit";
import {
  DataPassingEventWatcher,
  dummy_data_passing_watcher,
  get_data_passing_event_value,
  make_data_passing_watcher,
  make_input_event_id,
} from "./make_value_change_emitter";

export class SimpleNumberOutput extends LitElement {
  value: number | null = null;
  watch: string = "";

  watcher: DataPassingEventWatcher = dummy_data_passing_watcher;

  static properties = {
    value: { type: Number },
    watch: { type: String },
  };

  connectedCallback() {
    super.connectedCallback();

    this.watcher = make_data_passing_watcher(this.watch, (payload) => {
      if (payload.type !== "number") {
        console.error("Expected number, got", payload.value);
        return;
      }
      this.value = payload.value;
    });
  }

  static styles = css`
    .value {
      display: block;
      font-size: var(--font-size-2);
      background-color: var(--blue-1);
    }
  `;

  render() {
    return html` <div class="value">Your number is: ${this.value}</div> `;
  }
}

// Register both the custom element and the input bindings
customElements.define("simple-number-output", SimpleNumberOutput);
