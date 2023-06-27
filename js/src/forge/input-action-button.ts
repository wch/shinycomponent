import SlButton from "@shoelace-style/shoelace/dist/components/button/button.js";
import { CSSResultGroup, css } from "lit";
import { property } from "lit/decorators.js";
import {
  ValueChangeEmitter,
  makeValueChangeEmitter,
} from "../make_value_change_emitter";
import {
  CustomElementInputGetValue,
  makeInputBinding,
} from "../shiny/make-input-binding";

export class ForgeInputActionButton
  extends SlButton
  implements CustomElementInputGetValue<number>
{
  static styles: CSSResultGroup = [
    SlButton.styles,
    css`
      .button--standard.button--default {
        background-color: var(--sl-color-neutral-50);
        color: var(--sl-color-neutral-900);
      }

      .button--standard.button--default:hover:not(.button--disabled) {
        background-color: var(--sl-color-neutral-0);
        color: var(--sl-color-neutral-900);
      }

      .button--standard.button--default:active:not(.button--disabled) {
        background-color: var(--sl-color-neutral-100);
      }
    `,
  ];

  @property({ type: Number }) nClicks: number = 0;

  onChangeCallback: (x: boolean) => void = (x: boolean) => {};
  onValueChange: ValueChangeEmitter = () => {};

  constructor() {
    super();
    this.addEventListener("click", (e) => {
      this.nClicks++;
      this.onChangeCallback(true);
    });
  }

  getValue(): number {
    return this.nClicks;
  }
}

customElements.define("forge-input-action-button", ForgeInputActionButton);

makeInputBinding("forge-input-action-button");

declare global {
  interface HTMLElementTagNameMap {
    "forge-input-action-button": ForgeInputActionButton;
  }
}
