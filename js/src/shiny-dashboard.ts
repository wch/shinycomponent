import { css } from "lit";
import { customElement } from "lit/decorators.js";
import { LayoutContainer } from "./layout-container";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "./shiny/make-input-binding";

/**
 * A dashboard that can have tabs and a sidebar. Supported children include
 * `<shiny-tab>` elements to add tabbed-navigation, and `<shiny-sidebar>`
 * elements to add a collapsible sidebar.
 *
 * @element shiny-dashboard
 *
 * @cssprop --dashboard-bg - The surface color of the dashboard.
 * @cssprop --dashboard-bg-image - The background image of the dashboard. Defaults to nothing
 * @cssprop --dashboard-padding - The padding of the dashboard.
 * @cssprop --dashboard-gap - The gap between elements in the dashboard.
 * @cssprop --dashboard-border - The border of the dashboard.
 * @cssprop --dashboard-shadow - The shadow of the dashboard.
 * @cssprop --dashboard-radius - The border radius of the dashboard.
 * @cssprop --dashboard-child-radius - The border radius of the dashboard's children. Defaults to nothing
 * @cssprop --dashboard-h - The height of the dashboard. Typically set by the `height` attribute instead of this variable.
 * @cssprop --dashboard-header-bg-color - The background color of the header. Defaults to `--surface-1`
 * @cssprop --dashboard-footer-bg-color - The background color of the footer. Defaults to `--surface-1`
 * @cssprop --dashboard-sidebar-bg-color - The background color of the sidebar. Defaults to `--surface-1`
 *
 */
@customElement("shiny-dashboard")
export class ShinyDashboard
  extends LayoutContainer
  implements CustomElementInputGetValue<string>
{
  static styles = [
    LayoutContainer.styles,
    css`
      :host {
        /* Map card-scoped variables to the underlying container variables */
        --_dashboard-bg: var(--dashboard-bg, var(--surface-3));
        --_dashboard-bg-image: var(--dashboard-bg-image, none);
        --_dashboard-padding: var(--dashboard-padding, var(--size-s));
        --_dashboard-gap: var(--dashboard-gap, var(--_dashboard-padding));
        --_dashboard-border: var(--dashboard-border, var(--border-standard));
        --_dashboard-shadow: var(--dashboard-shadow, var(--shadow-m));
        --_dashboard-radius: var(--dashboard-radius, 0);
        --_dashboard-child-radius: var(--dashboard-child-radius);
        --_dashboard-h: var(--dashboard-h, 100%);

        /* Color of header and footers */
        --_dashboard-header-bg-color: var(
          --dashboard-header-bg-color,
          var(--surface-1)
        );
        --_dashboard-footer-bg-color: var(
          --dashboard-footer-bg-color,
          var(--surface-1)
        );

        /* Color of the sidebar */
        --_dashboard-sidebar-bg-color: var(
          --dashboard-sidebar-bg-color,
          var(--surface-1)
        );

        /* Pass all the variables to the layout container */
        --_layout-container-bg: var(--_dashboard-bg);
        --_layout-container-padding: var(--_dashboard-padding);
        --_layout-container-gap: var(--_dashboard-gap);
        --_layout-container-border: var(--_dashboard-border);
        --_layout-container-shadow: var(--_dashboard-shadow);
        --_layout-container-radius: var(--_dashboard-radius);
        --_layout-container-child-radius: var(--_dashboard-child-radius);
        --_layout-container-h: var(--_dashboard-h);
        --_layout-container-bg-image: var(--_dashboard-bg-image);
      }

      .sidebar {
        background-color: var(--_dashboard-sidebar-bg-color);
      }

      .header {
        background-color: var(--_dashboard-header-bg-color);
      }

      .footer {
        background-color: var(--_dashboard-footer-bg-color);
      }
    `,
  ];
}
makeInputBinding("shiny-dashboard");

declare global {
  interface HTMLElementTagNameMap {
    "shiny-dashboard": ShinyDashboard;
  }
}
