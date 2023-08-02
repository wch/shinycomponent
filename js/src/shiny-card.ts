import { css } from "lit";
import { customElement } from "lit/decorators.js";
import { LayoutContainer } from "./layout-container";

export const cardVariables = css`
  /* Exposed variables for styling card */
  --_card-bg: var(--card-bg, var(--surface-1));
  --_card-padding: var(--card-padding, var(--size-s));
  --_card-gap: var(--card-gap, var(--_card-padding));
  --_card-border: var(--card-border, var(--border-standard));
  --_card-shadow: var(--card-shadow, var(--shadow-m));
  --_card-radius: var(--card-radius, var(--radius-m));
  --_card-child-radius: var(--card-child-radius);
  --_card-h: var(--card-h, 100%);

  /* Map card-scoped variables to the underlying container variables */
  --_layout-container-bg: var(--_card-bg);
  --_layout-container-padding: var(--_card-padding);
  --_layout-container-gap: var(--_card-gap);
  --_layout-container-border: var(--_card-border);
  --_layout-container-shadow: var(--_card-shadow);
  --_layout-container-radius: var(--_card-radius);
  --_layout-container-h: var(--_card-h);
  --_layout-container-child-radius: var(--_card-child-radius);
`;

/**
 * A custom element that displays a card with a header, body, and footer.
 * The card can be customized with various properties.
 *
 * @element shiny-card
 *
 * @cssprop --card-bg - The surface color of the card.
 * @cssprop --card-padding - The padding of the card.
 * @cssprop --card-gap - The gap between elements in the card body.
 * @cssprop --card-border - The border of the card.
 * @cssprop --card-shadow - The shadow of the card.
 * @cssprop --card-radius - The border radius of the card.
 * @cssprop --card-child-radius - The border radius of the card's children. Defaults to nothing
 * @cssprop --card-h - The height of the card. Typically set by the `height` attribute instead of this variable.
 */
@customElement("shiny-card")
export class ShinyCard extends LayoutContainer {
  static styles = [
    LayoutContainer.styles,
    css`
      :host {
        ${cardVariables}
      }
    `,
  ];
}
