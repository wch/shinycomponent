import { css } from "lit";
import { customElement } from "lit/decorators.js";
import { Container } from "./container";

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
export class ShinyCard extends Container {
  static styles = [
    Container.styles,
    css`
      :host {
        /* Map card-scoped variables to the underlying container variables */
        --_container-bg: var(--card-bg, var(--surface-1));
        --_container-padding: var(--card-padding, var(--size-s));
        --_container-gap: var(--card-gap, var(--_container-padding));
        --_container-border: var(--card-border, var(--border-standard));
        --_container-shadow: var(--card-shadow, var(--shadow-m));
        --_container-radius: var(--card-radius, var(--radius-m));
        --_container-child-radius: var(--card-child-radius);
        --_container-h: var(--card-h, 100%);
      }
    `,
  ];
}
