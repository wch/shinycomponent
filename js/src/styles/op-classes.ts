import { css } from "lit";

export const surface_1 = css`
  background-color: var(--surface-1);
  color: var(--text-2);
`;

/**
 * A series of psuedo classes that can be unfolded into a css declaration to
 * apply more than a single style in one go
 */
export const theme_primatives = {
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
};
