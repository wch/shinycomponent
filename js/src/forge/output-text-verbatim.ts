import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { Shiny } from "../OptionalShiny";

export class ForgeOutputTextVerbatim extends LitElement {
  @property({ type: Boolean }) value: string | null = null;

  static styles = css`
    pre {
      color: var(--text-1);
      background-color: var(--surface-2);
      border: var(--border-thin) solid var(--surface-4);
      border-radius: var(--radius-s);
      padding: var(--size-xs);
      font-size: var(–-font-size-main);
      font-family: var(--font-mono);
    }
    pre:empty:before {
      content: " ";
    }
  `;

  render() {
    return html`<pre>${this.value}</pre>`;
  }
}

customElements.define("forge-output-text-verbatim", ForgeOutputTextVerbatim);

(() => {
  if (!Shiny) return;

  class NewCustomBinding extends Shiny["OutputBinding"] {
    find(scope: HTMLElement): JQuery<HTMLElement> {
      console.log($(scope).find("forge-output-text-verbatim"));
      return $(scope).find("forge-output-text-verbatim");
    }

    renderValue(el: ForgeOutputTextVerbatim, data: string): void {
      el.value = data;
    }
  }

  Shiny.outputBindings.register(
    new NewCustomBinding(),
    `ForgeOutputTextVerbatimBinding`
  );
})();

declare global {
  interface HTMLElementTagNameMap {
    "forge-output-text-verbatim": ForgeOutputTextVerbatim;
  }
}
