import Slider, { sliderClasses } from "@mui/base/Slider";
import debounce from "just-debounce-it";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "../make-input-binding";
import { makeValueChangeEmitter } from "../make_value_change_emitter";

// TODO:
// - Make slider rail look better in dark theme. Do we need a new entry in the
//   theme, like --brand-semi-transparent?

const css = /*css*/ `
:host {
  --rail-thickness: 2px;
  --thumb-size: 16px;
  --mark-size: 5px;
  --popup-size: 24px;
}

.label {
  font-size: var(--font-size-m);
}

.${sliderClasses.root} {
  color: var(--brand);
  height: var(--rail-thickness);
  width: 100%;
  padding: 16px 0;
  display: block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
}

.${sliderClasses.root}:hover {
  opacity: 1;
}

.${sliderClasses.disabled} {
  pointer-events: none;
  cursor: default;
  color: #afb8c1;
  opacity: 0.5;
}

.${sliderClasses.rail} {
  display: block;
  position: absolute;
  width: 100%;
  height: var(--rail-thickness);
  border-radius: 2px;
  background-color: hsl(var(--brand-hue) 90% 85%);
}

.${sliderClasses.track} {
  display: block;
  position: absolute;
  height: var(--rail-thickness);
  border-radius: 2px;
  background-color: currentColor;
}

.${sliderClasses.thumb} {
  position: absolute;
  width: var(--thumb-size);
  height: var(--thumb-size);
  margin-left: calc(0.5 * (var(--rail-thickness) - var(--thumb-size)));
  margin-top: calc(0.5 * (var(--rail-thickness) - var(--thumb-size)));
  box-sizing: border-box;
  border-radius: 50%;
  outline: 0;
  border: var(--rail-thickness) solid currentColor;
  background-color: var(--thumb-color, var(--surface-1));
  transition: box-shadow 0.1s linear;
}

.${sliderClasses.thumb}:hover, .${sliderClasses.thumb}.${sliderClasses.focusVisible} {
  box-shadow: 0 0 0 0.35rem hsl(var(--brand-hsl) / 15%);
}

/* Expand the halo while dragging. */
.${sliderClasses.thumb}.${sliderClasses.active} {
  box-shadow: 0 0 0 0.5rem hsla(var(--brand-hsl) / 15%);
}

.value-popup {
  font-family: var(--font-sans);
  font-size: 11px;
  background: unset;
  background-color: var(--brand);
  width: var(--popup-size);
  height: var(--popup-size);
  padding: 0px;
  visibility: hidden;
  color: #fff;
  border-radius: 50% 50% 50% 0;
  position: absolute;
  transform: translate(-25%, -140%) rotate(-45deg) scale(0);
  transition: transform var(--speed-fast) ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.${sliderClasses.thumb}:hover .value-popup,
.${sliderClasses.thumb}.${sliderClasses.active} .value-popup,
.${sliderClasses.thumb}.${sliderClasses.focusVisible} .value-popup {
  visibility: visible;
  transform: translate(-25%, -140%) rotate(-45deg) scale(1);
}

.${sliderClasses.thumb}:hover .value-text,
.${sliderClasses.thumb}.${sliderClasses.active} .value-text,
.${sliderClasses.thumb}.${sliderClasses.focusVisible} .value-text {
  transform: rotate(45deg);
  text-align: center;
}

.${sliderClasses.mark} {
  position: absolute;
  width: var(--mark-size);
  height: var(--mark-size);
  border-radius: 99%;
  background-color: hsl(var(--brand-hue) 90% 85%);
  transform: translateX(-50%) translateY(calc(0.5*(var(--rail-thickness)) - 50%));
}

.${sliderClasses.mark}.${sliderClasses.markActive} {
  background-color: var(--brand);
  opacity: 1;
}

.${sliderClasses.markLabel} {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 12px;
  position: absolute;
  top: 20px;
  transform: translateX(-50%);
  margin-top: 8px;
}
`;

type RichMark = {
  value: number;
  label?: string;
};

export class ForgeInputSlider
  extends HTMLElement
  implements CustomElementInputGetValue<number | number[]>
{
  value: number | number[] = 0;
  min: number = 0;
  max: number = 0;
  step: number | null = null;
  currentValue: number | number[] = 0;
  debounce: number = 200;
  marks: boolean | RichMark[] = false;

  onChangeCallback: (x: boolean) => void = (x: boolean) => {};
  onValueChange = makeValueChangeEmitter(this, this.id);

  getValue(): number | number[] {
    return this.currentValue;
  }

  constructor() {
    super();

    if (this.hasAttribute("value"))
      this.value = JSON.parse(this.getAttribute("value") || "");
    if (this.hasAttribute("min")) this.min = Number(this.getAttribute("min"));
    if (this.hasAttribute("max")) this.max = Number(this.getAttribute("max"));
    if (this.hasAttribute("debounce"))
      this.debounce = Number(this.getAttribute("debounce"));
    if (this.hasAttribute("step"))
      this.step = Number(this.getAttribute("step"));
    if (this.hasAttribute("marks"))
      this.marks = JSON.parse(this.getAttribute("marks") || "");

    this.currentValue = this.value;
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const root = createRoot(shadowRoot);

    const notifyChangeDebounced = debounce(() => {
      this.notifyChange();
    }, this.debounce);

    root.render(
      <>
        <style>{css}</style>
        <div className="label">
          <slot name="label"></slot>
        </div>
        <div style={{ width: "100%" }}>
          <Slider
            defaultValue={this.value}
            min={this.min}
            max={this.max}
            {...(this.step !== null
              ? { step: this.step, marks: this.marks }
              : {})}
            {...(this.marks ? { marks: this.marks } : {})}
            // step={null}
            // marks={[{ value: 3 }, { value: 6 }, { value: 103 }]}
            onChange={(e, value) => {
              this.currentValue = value;
              notifyChangeDebounced();
            }}
            slots={{ valueLabel: SliderValueLabel }}
          ></Slider>
        </div>
      </>
    );
  }

  notifyChange() {
    this.onChangeCallback(true);
    this.onValueChange({ type: "number", value: this.getValue() });
  }
}

interface SliderValueLabelProps {
  children: React.ReactElement;
}

function SliderValueLabel({ children }: SliderValueLabelProps) {
  return (
    <span className="value-popup">
      <div className="value-text">{children}</div>
    </span>
  );
}

customElements.define("forge-input-slider", ForgeInputSlider);

makeInputBinding("forge-input-slider");

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-slider": ForgeInputSlider;
  }
}
