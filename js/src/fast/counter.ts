import {
  Button,
  density,
  typeRampPlus6FontSize,
  typeRampPlus6LineHeight,
} from "@microsoft/fast-components";
import { attr, css, html } from "@microsoft/fast-element";
import { FoundationElement } from "@microsoft/fast-foundation";

import type {
  ElementDefinitionContext,
  FoundationElementDefinition,
} from "@microsoft/fast-foundation";
import { brandColor } from "./design-tokens";

export class Counter extends FoundationElement {
  @attr count = 0;

  increment() {
    this.count++;
  }

  connectedCallback() {
    super.connectedCallback();

    // Make things more dense than normal. Because we're setting this in
    // javascript, it's not reactive etc..
    density.setValueFor(this, 2);
  }
}

// Define the html template here.
const counterTemplate = (context: ElementDefinitionContext) => {
  // We can get the name of the tag that Button takes from the context. This
  // ensures we don't get into awkward conflict situations with naming etc..
  const buttonTag = context.tagFor(Button);

  // By providing the main element class to the html function, we get type
  // awareness in the callback functions
  return html<Counter>`
        <div class="label">The count is ${(x) => x.count}.</div>
        <${buttonTag} @click=${(x) => x.increment()}>Count!</${buttonTag}>
    `;
};

const counterStyles = (context: ElementDefinitionContext) => {
  const buttonTag = context.tagFor(Button);

  return css`
    ${buttonTag} {
      background-color: ${brandColor};
    }

    .label {
      font-size: ${typeRampPlus6FontSize};
      line-height: ${typeRampPlus6LineHeight};
    }
  `;
};

// Extend the configuration with custom properties
interface CounterDefinition extends FoundationElementDefinition {
  defaultButtonContent?: string;
}

export const counter = Counter.compose<CounterDefinition>({
  baseName: "counter",
  template: counterTemplate,
  styles: counterStyles,
  defaultButtonContent: "Count!",
});
