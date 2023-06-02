import { SlInput } from "@shoelace-style/shoelace";
import debounce from "just-debounce-it";
import { make_input_binding } from "../make_input_binding";
import { make_value_change_emitter } from "../make_value_change_emitter";

export class ForgeInputText extends SlInput {
  onChangeCallback: (x: boolean) => void = (x: boolean) => {};
  "wait-for-enter": boolean = false;
  debounce: number = 250;

  static properties = {
    "wait-for-enter": { type: Boolean },
    debounce: { type: Number },
  };

  on_value_change = make_value_change_emitter(this, this.id);

  connectedCallback(): void {
    super.connectedCallback();

    const notifyChangeDebounced = debounce(() => {
      this.notifyChange();
    }, this.debounce);

    this.addEventListener("input", () => {
      if (this["wait-for-enter"]) return;
      notifyChangeDebounced();
    });

    this.addEventListener("keydown", (e) => {
      if (!this["wait-for-enter"]) return;
      if (e.code === "Enter") {
        this.notifyChange();
      }
    });

    this.addEventListener("blur", (e) => this.notifyChange());
  }

  notifyChange(): void {
    this.onChangeCallback(true);
    this.on_value_change({ type: "string", value: this.value });
  }
}

customElements.define("forge-input-text", ForgeInputText);

make_input_binding("forge-input-text");
