import { MdSlider } from "@material/web/slider/slider";
import {
  CustomElementInputValue,
  makeInputBinding,
} from "../make_input_binding";
import { makeValueChangeEmitter } from "../make_value_change_emitter";

export class M3Slider
  extends MdSlider
  implements CustomElementInputValue<number>
{
  onChangeCallback: (x: boolean) => void;

  onValueChange = makeValueChangeEmitter(this, this.id);

  constructor() {
    super();
    this.onChangeCallback = (x: boolean) => {};

    this.addEventListener("input", this.myHandleChange);
  }

  myHandleChange(e: Event): void {
    this.onChangeCallback(true);
    this.onValueChange({ type: "number", value: this.value });
  }
}

customElements.define("m3-slider", M3Slider);

makeInputBinding("m3-slider");

declare global {
  interface HTMLElementTagNameMap {
    "m3-slider": M3Slider;
  }
}
