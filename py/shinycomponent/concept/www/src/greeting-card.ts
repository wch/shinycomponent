import { LitElement, html, css } from "lit";

// Write hello world to the console in large green letters
export class GreetingCard extends LitElement {
  greeting: string;
  planet: string;

  static properties = {
    greeting: {},
    planet: {},
  };

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: inline-block;
      padding: var(--size-md, 12px);
      font-family: var(--font-family, sans-serif);
    }

    .planet {
      background: var(--primary-color, steelblue);
      color: white;
      padding: var(--size-sm, 4px);
    }

    .card-body {
      background: var(--bg-color, lightgrey);
    }
  `;

  constructor() {
    super();
    // Define reactive properties--updating a reactive property causes
    // the component to update.
    this.greeting = "Hello";
    this.planet = "World";
  }

  // The render() method is called any time reactive properties change.
  // Return HTML in a string template literal tagged with the `html`
  // tag function to describe the component's internal DOM.
  // Expressions can set attribute values, property values, event handlers,
  // and child nodes/text.
  render() {
    return html`
      <span @click=${this.togglePlanet}
        >${this.greeting}
        <span class="planet">${this.planet}</span>
        <div class="card-body">
          <slot></slot>
        </div>
      </span>
    `;
  }

  // Event handlers can update the state of @properties on the element
  // instance, causing it to re-render
  togglePlanet() {
    this.planet = this.planet === "World" ? "Mars" : "World";
  }
}

customElements.define("greeting-card", GreetingCard);
