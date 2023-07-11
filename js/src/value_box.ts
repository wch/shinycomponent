import Color from "colorjs.io";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("value-box")
export class ValueBox extends LitElement {
  @property({ reflect: true }) value: string = "";

  /**
   * Background color for the box. Default value is `"brand"`, which is the
   * brand color defined in your current theme. Other options are any of the
   * [color roots defined in open-props](https://open-props.style/#colors) (e.g.
   * `"red"`, `"pink"`, `"jungle"`, ...), a css-variable (e.g.
   * `"var(--my-color)"`), or a hex color (e.g. `"#ff0000"`). If no text color
   * is provided, light or dark text will be chosen based on the best contrast.
   */
  @property({ type: String }) bg: string = "brand";

  @property({ type: String }) textColor: string = "";

  /**
   * The name of the icon to display using iconify format. For list of all
   * available icons, see: https://icon-sets.iconify.design/
   * @property {string} icon
   * @default "gg:chart"
   */
  @property({ type: String }) icon: string = "gg:chart";
  @property({ type: String }) title: string = "";
  @property({ type: String }) subtitle: string = "";
  @property({ type: String }) subvalue: string = "";

  static styles = [
    css`
      :host {
        --bg-color: var(--surface-1);
        --text-color: var(--text-1);

        height: 100%;
        max-height: 200px;
        min-height: 100px;
        max-width: 400px;
        background-color: var(--bg-color);
        color: var(--text-color);
        padding: var(--size-m);
        border-radius: var(--radius-m);
        box-shadow: var(--shadow-m);
        display: grid;
        gap: var(--size-s);
        grid-template-areas:
          "title icon"
          "value icon";
      }

      .title {
        grid-area: title;
      }

      .title .main {
        font-size: var(--font-size-l);
        font-weight: var(--font-weight-bold);
      }

      .value {
        grid-area: value;
      }

      .value .main {
        font-size: var(--font-size-h1);
        font-family: var(--font-mono);
      }

      .subvalue {
        margin-top: calc(-1 * var(--size-xs));
      }

      .subtitle,
      .subvalue {
        font-size: var(--font-size-m);
        opacity: 0.8;
        font-style: italic;
      }

      .icon {
        grid-area: icon;
        font-size: var(--size-xl);
        display: grid;
        place-content: center;
      }
    `,
  ];

  updated() {
    console.log("Value box initialized");
    this.style.setProperty("--bg-color", validateBgColor(this.bg));
    this.style.setProperty(
      "--text-color",
      this.textColor !== "" ? this.textColor : this.decideTextColor(this.bg)
    );
  }

  decideTextColor(bgColor: string): string {
    let color: Color | null = null;

    const variableValue = sanatizeCssVarName(bgColor);
    if (variableValue) {
      const variableColor = this.getVariableColor(variableValue);

      console.log({ variableValue, variableColor });
      color = new Color(variableColor);
    }

    try {
      color = new Color(bgColor);
    } catch (e) {
      console.warn("Could not parse color", e);
    }

    if (!color) {
      return lightText;
    }

    const lightTextContrast = color.contrastWCAG21(new Color(lightText));
    const darkTextContrast = color.contrastWCAG21(new Color(darkText));

    console.log("Contrast decision", {
      color: this.bg,
      lightTextContrast,
      darkTextContrast,
    });
    return lightTextContrast > darkTextContrast ? lightText : darkText;
  }

  getVariableColor(variable: CSSVariable): string {
    const computedStyle = getComputedStyle(this);
    return computedStyle.getPropertyValue(variable);
  }

  render() {
    return html`
      <div class="title">
        <div class="main">
          <slot name="title">${this.title}</slot>
        </div>
        <div class="subtitle">
          <slot name="subtitle">${this.subtitle}</slot>
        </div>
      </div>
      <div class="value">
        <div class="main">
          <slot name="value">${sanatizeValue(this.value)}</slot>
        </div>
        <div class="subvalue">
          <slot name="subvalue">${this.subvalue}</slot>
        </div>
      </div>
      <div class="icon">
        <slot name="icon">
          <shiny-icon name=${this.icon}></shiny-icon>
        </slot>
      </div>
    `;
  }
}

function validateBgColor(value: string): string {
  const unwrappedCssVarName = sanatizeCssVarName(value);
  if (unwrappedCssVarName) {
    return `var(${unwrappedCssVarName})`;
  }

  return value;
}
type CSSVariable = `--${string}`;

/**
 * Makes sure that the passed css variable is in the format of `--my-variable`
 * rather than wrapped in a `var()` function. Can also be used to check if a
 * string is a valid css variable.
 * @param value The value to check
 * @returns The unwrapped css variable or null if the value is not a valid css
 * variable.
 */
function sanatizeCssVarName(value: string): CSSVariable | null {
  const validOPColors = new Set(
    [
      "Stone",
      "Red",
      "Pink",
      "Purple",
      "Violet",
      "Indigo",
      "Blue",
      "Cyan",
      "Teal",
      "Green",
      "Lime",
      "Yellow",
      "Orange",
      "Choco",
      "Brown",
      "Sand",
      "Camo",
      "Jungle",
    ].map((color) => color.toLowerCase())
  );

  if (validOPColors.has(value.toLowerCase())) {
    return `--${value.toLowerCase()}-8` as CSSVariable;
  }

  if (value.startsWith("var(--") && value.endsWith(")")) {
    return value.slice(4, -1) as CSSVariable;
  }

  if (value.startsWith("--")) {
    return value as CSSVariable;
  }

  return null;
}

function sanatizeValue(value: string): string {
  // If we can coerce the value to a number, do that and then truncate to 2 decimals
  const numberValue = Number(value);
  if (!isNaN(numberValue)) {
    return numberValue.toFixed(2);
  }

  return value;
}

function isHexColor(value: string): boolean {
  return value.startsWith("#");
}

const lightText = "#f1f3f5";
const darkText = "#212529";
