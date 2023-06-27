import { CSSResultGroup, LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "../make-input-binding";
import { makeValueChangeEmitter } from "../make_value_change_emitter";

// Adapted from:
// https://web.dev/building-a-theme-switch-component/
// https://web.dev/patterns/theming/theme-switch/
// https://github.com/argyleink/gui-challenges/tree/main/theme-switch

export class ForgeDarkModeSwitch
  extends LitElement
  implements CustomElementInputGetValue<string>
{
  @property({ type: String }) themeValue: "light" | "dark" = "light";

  static styles: CSSResultGroup = [
    css`
      .sun-and-moon > :is(.moon, .sun, .sun-beams) {
        transform-origin: center center;
      }

      .sun-and-moon > :is(.moon, .sun) {
        fill: var(--text-1);
      }

      .theme-toggle:is(:hover, :focus-visible)
        > :is(.sun-and-moon > :is(.moon, .sun)) {
        fill: var(--text-2);
      }

      .sun-and-moon > .sun-beams {
        stroke: var(--text-1);
        stroke-width: 2px;
      }

      .theme-toggle:is(:hover, :focus-visible) :is(.sun-and-moon > .sun-beams) {
        stroke: var(--text-2);
      }

      [data-theme="dark"] .sun-and-moon > .sun {
        transform: scale(1.75);
      }

      [data-theme="dark"] .sun-and-moon > .sun-beams {
        opacity: 0;
      }

      [data-theme="dark"] .sun-and-moon > .moon > circle {
        transform: translateX(-9px);
      }

      @supports (cx: 1) {
        [data-theme="dark"] .sun-and-moon > .moon > circle {
          transform: translateX(0);
          cx: 15;
        }
      }
    `,
    // Transitions
    css`
      .sun-and-moon > .sun {
        transition: transform var(--speed-normal) var(--ease-out-3);
      }

      .sun-and-moon > .sun-beams {
        transition: transform var(--speed-normal) var(--ease-out-4),
          opacity var(--speed-normal) var(--ease-3);
      }

      .sun-and-moon .moon > circle {
        transition: transform var(--speed-fast) var(--ease-out-5);
      }

      @supports (cx: 1) {
        .sun-and-moon .moon > circle {
          transition: cx var(--speed-fast) var(--ease-out-5);
        }
      }

      [data-theme="dark"] .sun-and-moon > .sun {
        transform: scale(1.75);
        transition-timing-function: var(--ease-3);
        transition-duration: var(--speed-fast);
      }

      [data-theme="dark"] .sun-and-moon > .sun-beams {
        transform: rotateZ(-25deg);
        transition-duration: var(--speed-fast);
      }

      [data-theme="dark"] .sun-and-moon > .moon > circle {
        transition-delay: 0s;
        transition-duration: var(--speed-normal);
      }
    `,
    css`
      .theme-toggle {
        --size: var(--size-l);
        --icon-fill: hsl(210deg 10% 30%);
        --icon-fill-hover: hsl(210deg 10% 15%);

        background: none;
        border: none;
        padding: 0;
        inline-size: var(--size);
        block-size: var(--size);
        aspect-ratio: 1;
        border-radius: 50%;
        cursor: pointer;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
        outline-offset: 5px;
      }

      .theme-toggle > svg {
        inline-size: 100%;
        block-size: 100%;
        stroke-linecap: round;
      }

      [data-theme="dark"] .theme-toggle {
        --icon-fill: hsl(210deg 10% 70%);
        --icon-fill-hover: hsl(210deg 15% 90%);
      }
    `,
  ];

  onChangeCallback: (x: boolean) => void = (x: boolean) => {};

  onValueChange = makeValueChangeEmitter(this, this.id);

  connectedCallback() {
    super.connectedCallback();

    this.setPreference();
    // set early so no page flashes / CSS is made aware
    this.reflectPreference();

    // sync with system changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches: isDark }) => {
        this.themeValue = isDark ? "dark" : "light";
        this.setPreference();
      });
  }

  getValue(): string {
    return this.themeValue;
  }

  render() {
    return html`
      <button
        class="theme-toggle"
        id="theme-toggle"
        title="Toggles light & dark"
        aria-label="auto"
        aria-live="polite"
        @click="${this.onClick}"
      >
        <svg
          class="sun-and-moon"
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <mask class="moon" id="moon-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <circle cx="24" cy="10" r="6" fill="black" />
          </mask>
          <circle
            class="sun"
            cx="12"
            cy="12"
            r="6"
            mask="url(#moon-mask)"
            fill="currentColor"
          />
          <g class="sun-beams" stroke="currentColor">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      </button>
    `;
  }

  onClick(): void {
    this.themeValue = this.themeValue === "light" ? "dark" : "light";
    this.setPreference();
    this.onChangeCallback(true);
  }

  setPreference() {
    document.documentElement.dataset["shinytheme"] = this.themeValue;
    this.reflectPreference();
  }

  reflectPreference() {
    this.shadowRoot
      ?.querySelector("#theme-toggle")
      ?.setAttribute("data-theme", this.themeValue);

    this.shadowRoot
      ?.querySelector("#theme-toggle")
      ?.setAttribute("aria-label", this.themeValue);
  }
}

customElements.define("forge-dark-mode-switch", ForgeDarkModeSwitch);

makeInputBinding("forge-dark-mode-switch");

declare global {
  interface HTMLElementTagNameMap {
    "forge-dark-mode-switch": ForgeDarkModeSwitch;
  }
}
