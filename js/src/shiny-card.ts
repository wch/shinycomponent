import { css } from "lit";
import { customElement } from "lit/decorators.js";
import { LayoutContainer } from "./layout-container";

/**
 * A custom element that displays a card with a header, body, and footer.
 * The card can be customized with various properties.
 *
 * @element shiny-card
 *
 * @cssprop --card-padding - The padding of the card.
 * @cssprop --card-gap - The gap between elements in the card body.
 * @cssprop --card-radius - The border radius of the card.
 * @cssprop --card-child-radius - The border radius of the card's children. Defaults to nothing
 * @cssprop --card-border - The border of the card.
 * @cssprop --card-shadow - The shadow of the card.
 * @cssprop --card-bg - The surface color of the card.
 * @cssprop --card-h - The height of the card. Typically set by the `height` attribute instead of this variable.
 */
@customElement("shiny-card")
export class ShinyCard extends LayoutContainer {
  static styles = [
    LayoutContainer.styles,
    css`
      :host {
        /* Map card-scoped variables to the underlying container variables */
        --_layout-container-bg: var(--card-bg, var(--surface-1));
        --_layout-container-padding: var(--card-padding, var(--size-s));
        --_layout-container-gap: var(
          --card-gap,
          var(--_layout-container-padding)
        );
        --_layout-container-border: var(--card-border, var(--border-standard));
        --_layout-container-shadow: var(--card-shadow, var(--shadow-m));
        --_layout-container-radius: var(--card-radius, var(--radius-m));
        --_layout-container-child-radius: var(--card-child-radius);
        --_layout-container-h: var(--card-h, 100%);
      }
    `,
  ];
}
