import { css } from "lit";
import { customElement } from "lit/decorators.js";
import { Container } from "./container";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "./shiny/make-input-binding";

/**
 * A dashboard that can have tabs and a sidebar.
 * Supported children include `<shiny-tab>` elements to add tabbed-navigation, and
   `<shiny-sidebar>` elements to add a collapsible sidebar.
  *
  * @element shiny-dashboard
*
*/
@customElement("shiny-dashboard")
export class ShinyDashboard
  extends Container
  implements CustomElementInputGetValue<string>
{
  static styles = [
    Container.styles,
    css`
      :host {
        /* Map card-scoped variables to the underlying container variables */
        --_container-bg: var(--dashboard-bg, var(--surface-1));
        --_container-padding: var(--dashboard-padding, var(--size-s));
        --_container-gap: var(--dashboard-gap, var(--_container-padding));
        --_container-border: var(--dashboard-border, var(--border-standard));
        --_container-shadow: var(--dashboard-shadow, var(--shadow-m));
        --_container-radius: var(--dashboard-radius, 0);
        --_container-child-radius: var(--dashboard-child-radius);
        --_container-h: var(--dashboard-h, 100%);

        /* Background image of dashboard. Can be used to set things like
        gradients. Defaults to nothing */
        --_dashboard-bg-image: var(--dashboard-bg-image, none);

        /* Color of background. */
        --_dashboard-bg-color: var(--dashboard-bg-color, var(--surface-3));

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

        background-image: var(--_dashboard-bg-image);
        background-color: var(--_dashboard-bg-color);
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
