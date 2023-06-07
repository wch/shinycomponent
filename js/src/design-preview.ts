import { LitElement, css, html } from "lit";

const colors = [
  "primary",
  "action",
  "error",
  "bg",
  "bg-1",
  "bg-2",
  "border",
  "border-1",
  "border-2",
  "text",
  "text-1",
  "text-2",
].map((c) => `--color-${c}`);

const fontSizes = [
  "heading-1",
  "heading-2",
  "heading-3",
  "heading-4",
  "body",
  "small",
  "x-small",
].map((s) => `--font-${s}`);

const sml = ["small", "medium", "large"];
const shadows = sml.map((x) => `--shadow-${x}`);
const borders = sml.map((x) => `--border-${x}`);
const radii = sml.map((x) => `--radius-${x}`);
const spacings = ["x-small", ...sml, "x-large", "xx-large"].map(
  (s) => `--space-${s}`
);

export class DesignPreview extends LitElement {
  static properties = {};

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: block;
      height: 100%;
      overflow: auto;
      position: relative;
      padding: var(--space-medium);
      color: var(--color-text);
    }

    :host > div {
      padding: var(--space-medium);
      position: relative;
      margin-block: var(--space-medium);
      outline: var(--border-small) solid var(--color-border);
      border-radius: var(--radius-small);
      box-shadow: var(--shadow-small);
    }

    .box-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      grid-gap: var(--space-medium);
    }

    .box {
      min-width: 0;
      max-width: 100%;
      aspect-ratio: 1;
      display: grid;
      align-items: end;
      border: 0px solid var(--color-border);
      box-shadow: var(--shadow-medium);
      border-radius: var(--radius-small);
      background-color: var(--color-bg-2);
      overflow: hidden;
    }

    .label {
      font-size: var(--font-x-small);
      font-family: var(--font-mono);
    }

    .box > div.label {
      background-color: var(--color-bg-1);
      padding-inline: var(--space-medium);
    }

    .font-sizes-container > p {
      padding: 0;
      margin: 0;
      line-height: var(--font-lineheight-5);
    }

    .spacings {
      display: flex;
      align-items: center;
      padding: var(--space-small);
      gap: var(--space-small);
    }
  `;

  render() {
    return html`
      <div>
        <h2>Colors</h2>
        <div class="box-container">
          ${colors.map(
            (c) => html`<div class="box" style="background-color: var(${c})">
              <div class="label">${c}</div>
            </div>`
          )}
        </div>
      </div>

      <div>
        <h2>Font Sizes</h2>
        <div class="font-sizes-container">
          ${fontSizes.map(
            (size) => html`<p class="font-size" style="font-size: var(${size})">
              ${size}
            </p>`
          )}
        </div>
      </div>

      <div>
        <h2>Border Widths</h2>
        <div class="box-container">
          ${borders.map(
            (border) => html`<div
              class="box"
              style="border-width: var(${border});"
            >
              <div class="label">${border}</div>
            </div>`
          )}
        </div>
      </div>

      <div>
        <h2>Radii</h2>
        <div class="box-container">
          ${radii.map(
            (r) => html`<div class="box" style="border-radius: var(${r});">
              <div class="label">${r}</div>
            </div>`
          )}
        </div>
      </div>

      <div>
        <h2>Spacings</h2>
        <div>
          ${spacings.map(
            (s) => html`
              <div class="spacings">
                <div
                  style="width: var(${s}); aspect-ratio: 1; background-color: var(--color-primary);"
                ></div>
                <div class="label">${s}</div>
              </div>
            `
          )}
        </div>
      </div>
      <div>
        <h2>Box Shadows</h2>
        <div class="box-container">
          ${shadows.map(
            (shadow) => html`<div
              class="box"
              style="box-shadow: var(${shadow});"
            >
              <div class="label">${shadow}</div>
            </div>`
          )}
        </div>
      </div>
    `;
  }
}

customElements.define("design-preview", DesignPreview);
