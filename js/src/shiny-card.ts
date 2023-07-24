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
        --container-padding: var(--card-padding);
        --container-gap: var(--card-gap);
        --container-radius: var(--card-radius, var(--radius-m));
        --container-child-radius: var(--card-child-radius);
        --container-border: var(--card-border);
        --container-shadow: var(--card-shadow, var(--shadow-m));
        --container-bg: var(--card-bg, var(--surface-1));
        --container-h: var(--card-h);
      }
    `,
  ];
}
