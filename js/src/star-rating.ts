import { LitElement, css, html } from "lit";
import { Shiny } from "./OptionalShiny";

export class StarRating extends LitElement {
  low: number = 0;
  high: number = 10;
  static properties = {
    rating: { type: Number },
  };

  rating: number;
  onChangeCallback: (x: boolean) => void;

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      position: relative;
      display: flex;
      align-items: center;
      padding: var(--size-xs);
      gap: var(--size-xs;
      font-size: var(--font-size-h4);
    }

    button {
      font-size: var(--font-size-h5);
      border: none;
    }

    button.disabled {
      background-color: var(--surface-4);
      opacity: 0.5;
      cursor: not-allowed;
    }

    .thumb-down {
      background-color: var(--error);
      border-radius: var(--radius-blob-1);
    }

    .thumb-up {
      background-color: var(--success);
      border-radius: var(--radius-blob-2);
    }
  `;

  constructor() {
    super();
    this.rating = (this.low + this.high) / 2;
    this.onChangeCallback = (x: boolean) => {};
  }

  updateRating(delta: number) {
    this.rating = Math.max(Math.min(this.rating + delta, this.high), this.low);
    // Tell the output binding we've changed
    this.onChangeCallback(true);
  }

  render() {
    return html`
      <button
        class="thumb-down ${this.rating === this.low ? "disabled" : ""}"
        @click=${() => this.updateRating(-1)}
      >
        ➖
      </button>
      <emoji-reaction rating=${this.rating} low=${this.low} high=${this.high}>
      </emoji-reaction>
      <button
        class="thumb-up ${this.rating === this.high ? "disabled" : ""}"
        @click=${() => this.updateRating(1)}
      >
        ➕
      </button>
    `;
  }
}

class EmojiReaction extends LitElement {
  low: number = 0;
  high: number = 10;
  static properties = {
    rating: { type: Number },
  };

  rating: number;

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      font-size: var(--font-size-6);
      text-align: center;
      user-select: none;
    }
  `;

  constructor() {
    super();
    this.rating = (this.low + this.high) / 2;
  }

  render() {
    const atMax = this.rating === this.high;
    const atMin = this.rating === this.low;
    const rotation =
      atMax || atMin ? 0 : (this.rating / (this.high - this.low)) * 180;
    const emoji = atMax ? "🤩" : atMin ? "😫" : "👎";

    return html`
      <div style="rotate:${rotation}deg" title="Rating of ${this.rating}">
        ${emoji}
      </div>
    `;
  }
}

customElements.define("emoji-reaction", EmojiReaction);
customElements.define("star-rating", StarRating);

(() => {
  if (!Shiny) {
    return;
  }
  class StarRatingInputBinding extends Shiny.InputBinding {
    constructor() {
      super();
    }

    find(scope: HTMLElement): JQuery<HTMLElement> {
      return $(scope).find("star-rating");
    }

    getId(el: StarRating): string {
      return el.id;
    }

    getValue(el: StarRating) {
      return el.rating;
    }

    subscribe(el: StarRating, callback: (x: boolean) => void): void {
      el.onChangeCallback = callback;
    }

    unsubscribe(el: StarRating): void {
      el.onChangeCallback = (x: boolean) => {};
    }
  }

  Shiny.inputBindings.register(
    new StarRatingInputBinding(),
    "StarRatingInputBinding"
  );
})();
