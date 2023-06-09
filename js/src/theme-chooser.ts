import type { SlChangeEvent } from "@shoelace-style/shoelace";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

const themes = ["default", "light", "dark", "dim", "grape", "choco"] as const;
type Theme = (typeof themes)[number];

@customElement("theme-chooser")
export class ThemeChooser extends LitElement {
  @property({ reflect: true }) choice: Theme = themes[0];

  static styles = css`
    input {
      border-radius: var(--radius-s);
    }
  `;

  handleChange(e: SlChangeEvent) {
    const radios = this.shadowRoot!.querySelector("forge-input-radio-buttons")!;
    this.choice = radios.getValue() as Theme;

    if (this.choice === "default") {
      delete document.documentElement.dataset["shinytheme"];
      return;
    }
    document.documentElement.dataset["shinytheme"] = this.choice;
  }

  constructor() {
    super();
    this.addEventListener("sl-change", this.handleChange);
  }

  render() {
    return html`
      <forge-input-radio-buttons
        choices=${JSON.stringify(themes)}
        selected="default"
        size="small"
        inline
        button
        pill
      >
      </forge-input-radio-buttons>
    `;
  }
}
