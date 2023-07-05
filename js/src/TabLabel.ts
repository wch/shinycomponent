import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("tab-label")
export class TabLabel extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        align-items: center;
        gap: var(--size-xxs);
      }
    `,
  ];

  render() {
    return html`<slot></slot>`;
  }
}
