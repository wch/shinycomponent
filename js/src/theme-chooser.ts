import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { make_input_binding } from "./make_input_binding";

const themes = ["default", "light", "dark", "dim", "grape"] as const;
type Theme = (typeof themes)[number];

@customElement("theme-chooser")
export class ThemeChooser extends LitElement {
  @property({ reflect: true }) choice: Theme = themes[0];

  static styles = css`
    input {
      border-radius: var(--radius-1);
    }
  `;
  handle_change(e: InputEvent) {
    this.choice = (e.target as HTMLInputElement).value as Theme;
  }
  render() {
    return html`
      <form>
        ${themes.map((choice, i) => {
          return html`
            <input
              type="radio"
              id="${choice}"
              name="theme"
              value="${choice}"
              @change=${this.handle_change}
              ?checked=${i === 0}
            />
            <label for="${choice}">${choice}</label>
          `;
        })}
      </form>
    `;
  }
}
