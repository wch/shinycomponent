import { MdStandardIconButton } from "@material/web/iconbutton/standard-icon-button";
import { makeInputBinding } from "../make-input-binding";
import { makeValueChangeEmitter } from "../make_value_change_emitter";

export class M3StandardIconButton extends MdStandardIconButton {
  onChangeCallback: (x: boolean) => void;

  onValueChange = makeValueChangeEmitter(this, this.id);

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

makeInputBinding("m3-standard-icon-button");

declare global {
  interface HTMLElementTagNameMap {
    "m3-standard-icon-button": M3StandardIconButton;
  }
}
