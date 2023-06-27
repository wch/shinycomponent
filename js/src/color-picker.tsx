import React from "react";
import type { ColorResult } from "react-color";
import { SketchPicker } from "react-color";
import { createRoot } from "react-dom/client";
import { makeValueChangeEmitter } from "./make_value_change_emitter";
import {
  CustomElementInputValue,
  makeInputBinding,
} from "./shiny/make-input-binding";

// Color Picker React component
function ColorPickerReact({
  currentColorCallback,
}: {
  currentColorCallback: (x: string) => void;
}) {
  const [currentColor, setCurrentColor] = React.useState<string>("#fff");

  function handleChange(color: ColorResult) {
    setCurrentColor(color.hex);
    currentColorCallback(color.hex);
  }

  return <SketchPicker color={currentColor} onChange={handleChange} />;
}

// Color Picker WebComponent
export class ColorPicker
  extends HTMLElement
  implements CustomElementInputValue<string>
{
  value: string;
  onChangeCallback: (x: boolean) => void;
  onValueChange = makeValueChangeEmitter(this, this.id);

  constructor() {
    super();
    this.value = "#ffffff";
    this.onChangeCallback = (x: boolean) => {};
  }

  currentColorCallback(x: string): void {
    this.value = x;
    this.notifyChange();
  }

  notifyChange() {
    this.onChangeCallback(true); // Tell the output binding we've changed
    this.onValueChange({ type: "string", value: this.value });
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const root = createRoot(shadowRoot);

    setTimeout(() => {
      this.notifyChange();
    }, 0);

    root.render(
      <ColorPickerReact
        currentColorCallback={(x) => this.currentColorCallback(x)}
      />
    );
  }
}

customElements.define("color-picker", ColorPicker);

makeInputBinding("color-picker");

declare global {
  interface HTMLElementTagNameMap {
    "color-picker": ColorPicker;
  }
}
