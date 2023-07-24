import { css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Container } from "./container";

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
export class Tab extends Container {
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

  static styles = [
    Container.styles,
    css`
      :host {
        /* Map card-scoped variables to the underlying container variables */
        --_container-padding: var(--tab-padding, var(--size-s));
        --_container-border: none;
        --_container-shadow: none;

        position: relative;
      }

      :host([aria-hidden]) {
        display: none;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "shiny-tab": Tab;
  }
}
