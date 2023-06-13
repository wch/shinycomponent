import { LitElement, css, html } from "lit";
import {
  DataPassingEventWatcher,
  dummyDataPassingWatcher,
  makeDataPassingWatcher,
} from "./make_value_change_emitter";

export class SimpleNumberOutput extends LitElement {
  value: number | null = null;
  watch: string = "";

  watcher: DataPassingEventWatcher = dummyDataPassingWatcher;

  static properties = {
    value: { type: Number },
    watch: { type: String },
  };

  connectedCallback() {
    super.connectedCallback();

    this.watcher = makeDataPassingWatcher(this.watch, (payload) => {
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
      font-size: var(--font-size-main);
      background-color: var(--surface-3);
    }
  `;

  render() {
    return html` <div class="value">Your number is: ${this.value}</div> `;
  }
}
// Register both the custom element and the input bindings
customElements.define("simple-number-output", SimpleNumberOutput);
