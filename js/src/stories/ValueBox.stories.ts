import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import { OutputPlot } from "../output_plot";
import { ShinyCard } from "../shiny-card";
import { ValueBox } from "../value_box";

ValueBox;

const meta: Meta = {
  component: "shiny-card",
  decorators: [
    (story) =>
      html`<div
        style="padding: var(--size-7); background-color: var(--surface-3);max-width:450px; display: flex; flex-direction: column; gap: var(--size-s);"
      >
        ${story()}
      </div>`,
  ],
};
export default meta;

type Story = StoryObj;

export const primary: Story = {
  render: () => html`<value-box value="Foo" bg="yellow"> </value-box>
    <value-box value="120" bg="pink" icon="fe:line-chart"> </value-box>
    <value-box value="120" bg="var(--cyan-2)" icon="solar:chart-linear">
    </value-box>
    <value-box value="120" bg="--purple-1" icon="la:chart-line"> </value-box>
    <value-box value="120" bg="var(--indigo-12)" icon="nimbus:money">
    </value-box>`,
};
