import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-article")
export class PageArticle extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        background-color: var(--surface-1);
      }

      .content {
        width: var(--size-content-3);
        margin-inline: auto;
        padding-inline: var(--size-l);
        padding-block: var(--size-l);
      }

      ::slotted(*) {
        margin-block: var(--size-l);
      }
    `,
  ];

  render() {
    return html`
      <div class="content">
        <slot></slot>
      </div>
    `;
  }
}
