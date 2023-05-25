import React from "react";
import type { ColorResult } from "react-color";
import { SketchPicker } from "react-color";
import { createRoot } from "react-dom/client";
import { Shiny } from "./OptionalShiny";
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
export class ColorPicker extends HTMLElement {
  color: string;
  onChangeCallback: (x: boolean) => void;

  constructor() {
    super();
    this.color = "#fff";
    this.onChangeCallback = (x: boolean) => {};
  }

  currentColorCallback(x: string): void {
    this.color = x;
    this.onChangeCallback(true);
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const root = createRoot(shadowRoot);
    root.render(
      <ColorPickerReact
        currentColorCallback={(x) => this.currentColorCallback(x)}
      />
    );
  }
}

customElements.define("color-picker", ColorPicker);

(() => {
  if (!Shiny) {
    return;
  }
  class ColorPickerInputBinding extends Shiny.InputBinding {
    constructor() {
      super();
    }

    find(scope: HTMLElement): JQuery<HTMLElement> {
      return $(scope).find("color-picker");
    }

    getValue(el: ColorPicker) {
      return el.color;
    }

    subscribe(el: ColorPicker, callback: (x: boolean) => void): void {
      el.onChangeCallback = callback;
    }

    unsubscribe(el: ColorPicker): void {
      el.onChangeCallback = (x: boolean) => {};
    }
  }

  Shiny.inputBindings.register(
    new ColorPickerInputBinding(),
    "ColorPickerInputBinding"
  );
})();
