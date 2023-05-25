import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import Slider from "@mui/material/Slider";
import * as React from "react";
import { createRoot } from "react-dom/client";

// =============================================================================
// MuiSlider
// =============================================================================
export class MuiSlider extends HTMLElement {
  value: number | number[];
  elAttributes: Record<string, object>;
  onChangeCallback: (x: boolean) => void;

  constructor() {
    super();
    const elAttributes = getAttributesAsObject(this);
    // Don't pass along `id` to React component.
    delete elAttributes["id"];
    this.elAttributes = convertPropertiesFromJson(elAttributes);

    this.value = Number(this.elAttributes["defaultValue"]) || -1;
    this.onChangeCallback = (x: boolean) => {};
  }

  handleChange(
    event: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ): void {
    this.value = value;
    this.onChangeCallback(true);
  }

  connectedCallback() {
    const shadowContainer = this.attachShadow({ mode: "open" });
    const emotionRoot = document.createElement("style");
    const shadowRootElement = document.createElement("div");
    shadowContainer.appendChild(emotionRoot);
    shadowContainer.appendChild(shadowRootElement);

    const cache = createCache({
      key: "css",
      prepend: true,
      container: emotionRoot,
    });

    createRoot(shadowRootElement).render(
      <CacheProvider value={cache}>
        <Slider
          {...this.elAttributes}
          aria-label="Default"
          onChangeCommitted={(e, v) => this.handleChange(e, v)}
        />
      </CacheProvider>
    );
  }
}

customElements.define("mui-slider", MuiSlider);


// Mui Slider Shiny input binding
const Shiny = window.Shiny as Shiny;

export class MuiSliderInputBinding extends Shiny.InputBinding {
  constructor() {
    super();
  }

  find(scope: HTMLElement): JQuery<HTMLElement> {
    return $(scope).find("mui-slider");
  }

  getValue(el: MuiSlider) {
    return el.value;
  }

  subscribe(el: MuiSlider, callback: (x: boolean) => void): void {
    el.onChangeCallback = callback;
  }

  unsubscribe(el: MuiSlider): void {
    el.onChangeCallback = (x: boolean) => {};
  }
}

Shiny.inputBindings.register(
  new MuiSliderInputBinding(),
  "MuiSliderInputBinding"
);


// =============================================================================
// Helper functions
// =============================================================================

function getAttributesAsObject(el: HTMLElement): Record<string, string> {
  let obj: Record<string, string> = {};
  for (let attr of Array.from(el.attributes)) {
    const camelCaseName = attr.name.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    obj[camelCaseName] = attr.value;
  }
  return obj;
}

function convertPropertiesFromJson(
  obj: Record<string, string>
): Record<string, any> {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === "string") {
      obj[key] = JSON.parse(obj[key] as string);
    }
  }
  return obj;
}
