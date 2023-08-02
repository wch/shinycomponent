import { css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { LayoutContainer } from "../layout-container";
import { cardVariables } from "../shiny-card";

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
 * @prop {string} name - The name of the tab. This is also used as the id
 * returned when treating the tabset as an input
 * @prop {string} icon - Optional icon of the tab. If this is provided the icon
 * will be prefixed to the tab label before the name. This will be ignored if a
 * `<tab-label>` element is provided.
 * @prop {boolean} cardStyle - Whether to use a more card-like style for the
 * tab. This is useful when using the tab as a card. When set to true the tab
 * will obey styling like the `shiny-card` element, including the `card-`
 * prefixed variables.
 *
 * @element shiny-tab
 *
 * @cssprop --tab-padding - The padding of the tab.
 * @cssprop --tab-margin - The margin of the tab. Defaults to 0 (or `--size-s`
 * when `cardStyle=true`).
 */
@customElement("shiny-tab")
export class Tab extends LayoutContainer {
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
   * Whether to use a more card-like style for the tab. This is useful when
   * using the tab as a card.
   * @attr card-style
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean, reflect: true }) cardStyle: boolean = false;

  static styles = [
    LayoutContainer.styles,
    css`
      :host {
        /*  Available things to customize for the tab */
        --_tab-padding: var(--tab-padding, var(--size-s));
        --_tab-border: var(--tab-border);
        --_tab-shadow: var(--tab-shadow);
        --_tab-margin: var(--tab-margin, 0);

        /* Map tab-scoped variables to the underlying container variables */
        --_layout-container-padding: var(--_tab-padding);
        --_layout-container-border: var(--_tab-border);
        --_layout-container-shadow: var(--_tab-shadow);

        margin: var(--_tab-margin);
        position: relative;
      }

      :host([aria-hidden]) {
        display: none;
      }

      :host([card-style]) {
        --_tab-margin: var(--tab-margin, var(--size-s));

        ${cardVariables}
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "shiny-tab": Tab;
  }
}
