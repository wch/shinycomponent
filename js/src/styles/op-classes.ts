import { css } from "lit";

export const surface1 = css`
  background-color: var(--surface-1);
  color: var(--text-2);
`;

/**
 * A series of psuedo classes that can be unfolded into a css declaration to
 * apply more than a single style in one go
 */
export const themePrimitives = {
  brand: css`
    color: var(--brand);
    background-color: var(--brand);
  `,
  surface_1: css`
    background-color: var(--surface-1);
    color: var(--text-1);
  `,
  surface_2: css`
    background-color: var(--surface-2);
    color: var(--text-1);
  `,
  surface_3: css`
    background-color: var(--surface-3);
    color: var(--text-1);
  `,
  surface_4: css`
    background-color: var(--surface-4);
    color: var(--text-1);
  `,
  fancy_shadow: css`
    border: 1px solid hsl(var(--brand-hue) 10% 50% / 15%);
    box-shadow: 0 1rem 0.5rem -0.5rem;
    box-shadow: 0 2.8px 2.2px
        hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
      0 6.7px 5.3px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 1%)),
      0 12.5px 10px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
      0 22.3px 17.9px
        hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
      0 41.8px 33.4px
        hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
      0 100px 80px hsl(var(--shadow-color) / var(--shadow-strength));
  `,
  /**
   * A series of definitions that will reset text in a component to use standards without having to manually assign everything.
   */
  text_reset: css`
    :where(h1, h2, h3, h4, h5, h6) {
      line-height: var(--line-height-headings);
      font-weight: var(--font-weight-headings);
    }

    :where(h1) {
      font-size: var(--font-size-h1);
    }

    :where(h2) {
      font-size: var(--font-size-h2);
    }

    :where(h3) {
      font-size: var(--font-size-h3);
    }

    :where(h4) {
      font-size: var(--font-size-h4);
    }

    :where(h5) {
      font-size: var(--font-size-h5);
    }

    :where(p, ul, ol, dl, h6) {
      font-size: var(--font-size-m);
    }

    :where(a, u, ins, abbr) {
      text-underline-offset: 1px;

      @supports (-moz-appearance: none) {
        text-underline-offset: 2px;
      }
    }
  `,
};
