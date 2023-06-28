import chroma from "chroma-js";

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("theme-provider")
export class ThemeProvider extends LitElement {
  @property({ type: String }) brand = "#e8590c";
  @property({ type: String }) background = "#f1f3f5";
  static styles = css`
    :host {
      display: none;
    }
  `;

  render() {
    attachThemeToRoot(
      buildThemePalette({
        brand: this.brand,
        background: this.background,
      })
    );
    return html``;
  }
}

type ThemeColors = {
  brand: string;
  "brand-hue": string;
  "brand-hsl": string;
  "text-1": string;
  "text-2": string;
  "text-3": string;
  "surface-1": string;
  "surface-2": string;
  "surface-3": string;
  "surface-4": string;
  "shadow-color": string;
  success: string;
  warning: string;
  danger: string;
};

type ThemeInfo = {
  tokens: ThemeColors;
  mode: "light" | "dark";
};

/**
 * Generate color palette for themeing an app with a subset of colors using chroma-js
 * @param colors A set of colors used to seed the theme
 * @returns An object with each variable needed to set theme colors for an app
 */
function buildThemePalette(colors: {
  brand: string;
  background: string;
}): ThemeInfo {
  const brand = chroma(colors.brand);
  const background = chroma(colors.background);
  if (!brand || !background) {
    throw new Error("Failed to parse theme colors");
  }

  const green = chroma(131, 0.54, 0.4, "hsl");
  const orange = chroma(21, 0.9, 0.48, "hsl");
  const red = chroma(0, 0.74, 0.54, "hsl");
  const darkColor = chroma(214, 0.14, 0.1, "hsl");
  const lightColor = chroma(210, 0.17, 0.95, "hsl");

  const darkMode = background.luminance() < 0.5;

  const incrementText = (color: chroma.Color) => {
    const delta = 0.1;
    return darkMode ? color.darken(delta) : color.brighten(delta);
  };

  const text1 = darkMode ? lightColor : darkColor;
  const text2 = incrementText(text1);
  const text3 = incrementText(text2);

  const incrementSurface = (color: chroma.Color) => {
    const delta = 0.1;
    return darkMode ? color.brighten(delta) : color.darken(delta);
  };

  const surface1 = background;
  const surface2 = incrementSurface(surface1);
  const surface3 = incrementSurface(surface2);
  const surface4 = incrementSurface(surface3);

  const [brandH, brandS, brandL] = brand.hsl();

  const parsedColors: Record<keyof ThemeColors, chroma.Color | string> = {
    brand,
    "brand-hue": String(brandH),
    "brand-hsl": [
      brandH,
      decimalToPercent(brandS),
      decimalToPercent(brandL),
    ].join(" "),
    "text-1": text1,
    "text-2": text2,
    "text-3": text3,
    "surface-1": surface1,
    "surface-2": surface2,
    "surface-3": surface3,
    "surface-4": surface4,
    "shadow-color": darkMode ? darkColor.darken(2) : lightColor.brighten(2),
    success: green,
    warning: orange,
    danger: red,
  };

  return {
    mode: darkMode ? "dark" : "light",
    tokens: Object.fromEntries(
      Object.entries(parsedColors).map(([key, color]) => [
        key,
        typeof color === "string" ? color : color.toString(),
      ])
    ) as ThemeColors,
  };
}

/**
 * Attach theme colors to the root element of the document as css variables
 * @param tokens A set of theme tokens to attach to the root element
 * @returns void
 */
function attachThemeToRoot({ mode, tokens }: ThemeInfo) {
  const root = document.documentElement;
  Object.entries(tokens).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });

  // Set color-scheme to dark or light
  root.style.setProperty("color-scheme", mode);
}

function decimalToPercent(x: number) {
  return `${x * 100}%`;
}
