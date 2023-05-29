import { MdSlider } from "@material/web/slider/slider.js";
import { make_input_binding } from "./make_input_binding";
import { make_value_change_emitter } from "./make_value_change_emitter";

export class MaterialSlider extends MdSlider {
  onChangeCallback: (x: boolean) => void;

  on_value_change = make_value_change_emitter(this, this.id);

  constructor() {
    super();
    this.onChangeCallback = (x: boolean) => {};

    this.addEventListener("input", this.myHandleChange);
  }

  myHandleChange(e: Event): void {
    this.onChangeCallback(true);
    this.on_value_change({ type: "number", value: this.value });
  }
}

customElements.define("material-slider", MaterialSlider);

make_input_binding("material-slider");
