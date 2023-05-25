import { LitElement, css, html } from "lit";

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
      display: block;
      position: relative;
      display: flex;
      align-items: center;
      padding: var(--size-2);
      gap: var(--size-2);
      font-size: var(--font-size-6);
    }

    button {
      font-size: var(--font-size-6);
      border: none;
    }

    button.disabled {
      background-color: var(--gray-3);
      opacity: 0.5;
      cursor: not-allowed;
    }

    .thumb_down {
      background-color: var(--red-3);
      border-radius: var(--radius-blob-1);
    }
    .thumb_up {
      background-color: var(--blue-3);
      border-radius: var(--radius-blob-2);
    }
  `;

  constructor() {
    super();
    this.rating = (this.low + this.high) / 2;
    this.onChangeCallback = (x: boolean) => {};
  }

  update_rating(delta: number) {
    this.rating = Math.max(Math.min(this.rating + delta, this.high), this.low);
    // Tell the output binding we've changed
    this.onChangeCallback(true);
  }

  render() {
    return html`
      <button
        class="thumb_down ${this.rating === this.low ? "disabled" : ""}"
        @click=${() => this.update_rating(-1)}
      >
        ➖
      </button>
      <emoji-reaction rating=${this.rating} low=${this.low} high=${this.high}>
      </emoji-reaction>
      <button
        class="thumb_up ${this.rating === this.high ? "disabled" : ""}"
        @click=${() => this.update_rating(1)}
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
    const at_max = this.rating === this.high;
    const at_min = this.rating === this.low;
    const rotation =
      at_max || at_min ? 0 : (this.rating / (this.high - this.low)) * 180;
    const emoji = at_max ? "🤩" : at_min ? "😫" : "👎";

    return html`
      <div style="rotate:${rotation}deg" title="Rating of ${this.rating}">
        ${emoji}
      </div>
    `;
  }
}

customElements.define("emoji-reaction", EmojiReaction);
customElements.define("star-rating", StarRating);

const Shiny = window.Shiny as Shiny;

export class StarRatingInputBinding extends Shiny.InputBinding {
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
