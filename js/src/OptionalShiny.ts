/**
 * A safe Shiny object that reflects we may be in an environment without Shiny
 * e.g. a static quarto document.
 *
 */
export const Shiny: typeof window.Shiny | undefined = window.Shiny;
