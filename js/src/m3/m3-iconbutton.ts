import { MdStandardIconButton } from "@material/web/iconbutton/standard-icon-button";
import { make_input_binding } from "../make_input_binding";
import { make_value_change_emitter } from "../make_value_change_emitter";

export class M3StandardIconButton extends MdStandardIconButton {
  onChangeCallback: (x: boolean) => void;

  on_value_change = make_value_change_emitter(this, this.id);

  constructor() {
    super();
    this.onChangeCallback = (x: boolean) => {};

    // this.addEventListener("input", this.myHandleChange);
  }

  // myHandleChange(e: Event): void {
  //   this.onChangeCallback(true);
  //   this.on_value_change({ type: "number", value: this.value });
  // }
}

customElements.define("m3-standard-icon-button", M3StandardIconButton);

make_input_binding("m3-standard-icon-button");
