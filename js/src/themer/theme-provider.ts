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

/**
 * Generate color palette for themeing an app with a subset of colors using chroma-js
 * @param colors A set of colors used to seed the theme
 * @returns An object with each variable needed to set theme colors for an app
 */
function buildThemePalette(colors: {
  brand: string;
  background: string;
}): ThemeColors {
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

  const textDelta = 0.15;
  const text1 = darkMode ? lightColor : darkColor;
  const text2 = darkMode ? text1.darken(textDelta) : text1.brighten(textDelta);
  const text3 = darkMode ? text2.darken(textDelta) : text2.brighten(textDelta);

  const surface1 = darkMode ? darkColor : lightColor;
  const surfaceDelta = 0.15;
  const surface2 = darkMode
    ? surface1.brighten(surfaceDelta)
    : surface1.darken(surfaceDelta);
  const surface3 = darkMode
    ? surface2.brighten(surfaceDelta)
    : surface2.darken(surfaceDelta);
  const surface4 = darkMode
    ? surface3.brighten(surfaceDelta)
    : surface3.darken(surfaceDelta);

  const parsedColors: Record<keyof ThemeColors, chroma.Color> = {
    brand,
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

  return Object.fromEntries(
    Object.entries(parsedColors).map(([key, color]) => [key, color.toString()])
  ) as ThemeColors;
}

type ThemeTokens = ThemeColors;

/**
 * Attach theme colors to the root element of the document as css variables
 * @param tokens A set of theme tokens to attach to the root element
 * @returns void
 */
function attachThemeToRoot(tokens: ThemeTokens) {
  const root = document.documentElement;
  Object.entries(tokens).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}
