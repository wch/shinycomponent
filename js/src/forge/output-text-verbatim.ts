import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { makeOutputBinding } from "../make-output-binding";

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

    pre:empty::before {
      content: " ";
    }
  `;

  render() {
    return html`<pre>${this.value}</pre>`;
  }
}

customElements.define("forge-output-text-verbatim", ForgeOutputTextVerbatim);

makeOutputBinding("forge-output-text-verbatim");

declare global {
  interface HTMLElementTagNameMap {
    "forge-output-text-verbatim": ForgeOutputTextVerbatim;
  }
}
