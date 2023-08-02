import type { Meta, StoryObj } from "@storybook/web-components";

import {
  fastAccordion,
  fastAccordionItem,
  fastButton,
  provideFASTDesignSystem,
} from "@microsoft/fast-components";
import { html } from "lit";
import { counter } from "../fast/counter";

provideFASTDesignSystem().register(
  fastButton(),
  counter({ defaultButtonContent: "Please count." }),
  fastAccordion(),
  fastAccordionItem()
);

const meta: Meta = {
  component: "counter",
  decorators: [
    (story) =>
      html`<div
        id="card-container"
        style="padding: var(--size-7);max-width:450px;height:550px; display: flex; flex-direction: column;"
      >
        ${story()}
      </div>`,
  ],
};
export default meta;

type Story = StoryObj;

export const basic: Story = {
  render: () => html`<fast-counter> </fast-counter>

    <fast-accordion>
      <fast-accordion-item expanded>
        <span slot="heading">Panel one</span>
        Panel one content
      </fast-accordion-item>
      <fast-accordion-item>
        <span slot="heading">Panel two</span>
        Panel two content
      </fast-accordion-item>
      <fast-accordion-item expanded>
        <span slot="heading">Panel three</span>
        Panel three content
      </fast-accordion-item>
    </fast-accordion> `,
};
