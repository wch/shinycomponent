import { LitElement, html } from "lit";
import {
  DataPassingEventWatcher,
  dummyDataPassingWatcher,
  makeDataPassingWatcher,
} from "./make_value_change_emitter";

export class GeneralOutput extends LitElement {
  value: string | null = null;
  watch: string = "";

  watcher: DataPassingEventWatcher = dummyDataPassingWatcher;

  static properties = {
    value: {},
    watch: { type: String },
  };

  connectedCallback() {
    super.connectedCallback();
    this.watcher = makeDataPassingWatcher(this.watch, (payload) => {
      // Try and parse the value to string
      // this.value = JSON.stringify(payload.value);
      this.value = String(payload.value);
    });
  }

  render() {
    return html`<span class="value">${this.value}</span>`;
  }
}

// Register both the custom element and the input bindings
customElements.define("general-output", GeneralOutput);
