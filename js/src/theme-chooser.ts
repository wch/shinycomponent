import { LitElement, css, html } from "lit";
import { make_input_binding } from "./make_input_binding";

const themes = ["default", "purple", "green", "wild", "dark"] as const;
type Theme = (typeof themes)[number];
export class ThemeChooser extends LitElement {
  choice: Theme = themes[0];
  static properties = { choice: { reflect: true } };

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

// Register both the custom element and the input bindings
customElements.define("theme-chooser", ThemeChooser);
