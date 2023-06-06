import { css } from "lit";

export const surface_1 = css`
  background-color: var(--surface-1);
  color: var(--text-2);
`;

/**
 * A series of psuedo classes that can be unfolded into a css declaration to
 * apply more than a single style in one go
 */
export const theme_primitives = {
  brand: css`
    color: var(--brand);
    background-color: var(--brand);
  `,
  surface_1: css`
    background-color: var(--surface-1);
    color: var(--text-2);
  `,
  surface_2: css`
    background-color: var(--surface-2);
    color: var(--text-2);
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
        hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 3%)),
      0 6.7px 5.3px
        hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 1%)),
      0 12.5px 10px
        hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 2%)),
      0 22.3px 17.9px
        hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 2%)),
      0 41.8px 33.4px
        hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 3%)),
      0 100px 80px hsl(var(--surface-shadow) / var(--shadow-strength));
  `,
};
