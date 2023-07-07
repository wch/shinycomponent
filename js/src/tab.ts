import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * A custom element representing a tab that is consumed by the
 * `<shiny-dashboard>` element.
 *
 * The default title of the tab is just the string provided by the `name`
 * attribute. However, you can also add an icon with the `icon` attribute. or
 * you can use the complementary `<tab-label` element to provide a more complex
 * label. Note that the id of the tab will still be the `name` attribute,
 * regardless of what your label says.
 *
 * @element shiny-tab
 *
 * @cssprop --tab-padding - The padding of the tab.
 */
@customElement("shiny-tab")
export class Tab extends LitElement {
  /**
   * The name of the tab. This is also used as the id returned when treating the tabset as an input
   *
   * @attr name
   * @type {string}
   */
  @property({ type: String }) name: string = "tab";

  /**
   * Optional icon of the tab. If this is provided the icon will be prefixed to
   * the tab label before the name. This will be ignored if a `<tab-label>`
   * element is provided.
   *
   * @attr icon
   * @type {string}
   */
  @property({ type: String }) icon: string = "";

  /**
   * Styles are scoped to this element: they won't conflict with styles
   * on the main page or in other components. Styling API can be exposed
   * via CSS custom properties.
   */
  static styles = css`
    :host {
      display: block;
      position: relative;
      height: 100%;
      min-height: 0;
      width: 100%;
      min-width: 0;
      padding: var(--tab-padding);
    }
  `;

  render() {
    return html` <slot></slot> `;
  }
}

/**
 * A custom element representing a label for a tab. This is effectively a div
 * that can have anything put in it which it will layout using a flexbox layout with
 * `align-items: center` and `gap: var(--size-xxs)`.
 */
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

declare global {
  interface HTMLElementTagNameMap {
    "shiny-tab": Tab;
  }
}
