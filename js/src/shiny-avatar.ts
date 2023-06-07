import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { theme_primitives } from "./styles/op-classes";
// setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist");

@customElement("shiny-avatar")
export class ShinyAvatar extends LitElement {
  @property() size: number = 40;
  @property() src: string = "";
  @property() alt: string = "Avatar photo";
  @property() variant: string = "circle";
  @property() name: string = "";
  @property({ type: Boolean, reflect: true }) inline: boolean = true;

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: calc(var(--size-fluid-1));
    }

    :host([inline]) {
      display: inline-flex;
    }

    img {
      aspect-ratio: 1;
      ${theme_primitives.fancy_shadow}
    }

    img.circle {
      border-radius: var(--radius-round);
    }

    img.blob {
      border-radius: var(--radius-blob-2);
    }

    .name {
      font-weight: var(--font-weight-5);
      font-size: var(--font-size-fluid-1);
    }

    .name:empty {
      display: none;
    }

    * {
      box-sizing: border-box;
      min-width: 0;
    }
  `;

  render() {
    return html` <span class="name"> ${this.name}</span>
      <img
        class="${this.variant}"
        style="width:${this.size}px;"
        src="${this.src}"
        alt="${this.alt}"
      />`;
  }
}
