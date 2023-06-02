import { SlInput } from "@shoelace-style/shoelace";
import debounce from "just-debounce-it";
import { make_input_binding } from "../make_input_binding";
import { make_value_change_emitter } from "../make_value_change_emitter";

export class ForgeTextInput extends SlInput {
  onChangeCallback: (x: boolean) => void;
  "wait-for-enter": boolean = false;
  debounce: number = 250;

  static properties = {
    "wait-for-enter": { type: Boolean },
    debounce: { type: Number },
  };

  on_value_change = make_value_change_emitter(this, this.id);

  constructor() {
    super();
    const handleChangeDebounced = debounce(() => {
      this.handleChange1();
    }, this.debounce);

    this.onChangeCallback = (x: boolean) => {};
    this.addEventListener("input", () => {
      if (this["wait-for-enter"]) return;
      handleChangeDebounced();
    });
    this.addEventListener("keydown", (e) => {
      if (!this["wait-for-enter"]) return;

      if (e.code === "Enter") {
        this.handleChange1();
      }
    });
  }

  handleChange1() {
    this.notifyChange();
  }

  notifyChange(): void {
    this.onChangeCallback(true);
    this.on_value_change({ type: "string", value: this.value });
  }
}

customElements.define("forge-text-input", ForgeTextInput);

make_input_binding("forge-text-input");
