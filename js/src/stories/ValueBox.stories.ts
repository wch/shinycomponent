import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import { ValueBox } from "../value_box";

ValueBox;

const meta: Meta = {
  component: "shiny-card",
  decorators: [
    (story) =>
      html`<div
        style="padding: var(--size-7); background-color: var(--surface-3);"
      >
        ${story()}
      </div>`,
  ],
};
export default meta;

type Story = StoryObj;

const sampleBoxes = html`<value-box
    title="Product Sales"
    subtitle="In units"
    value="1,250"
    subvalue="This month"
    bg="blue"
    icon="fa:money"
  ></value-box>

  <value-box
    title="Employee Performance"
    subtitle="Average Rating"
    value="4.2"
    subvalue="Last review cycle"
    bg="purple"
    icon="fa6-solid:user-check"
  ></value-box>

  <value-box
    title="Server Uptime"
    subtitle="In percentage"
    value="99.98"
    subvalue="This Year"
    bg="green"
    icon="fa:server"
  ></value-box>

  <value-box
    title="Instagram Followers"
    subtitle="Account name: myBrand"
    value="10,000"
    subvalue="As of today"
    bg="#f84b84"
    icon="fa:instagram"
  ></value-box>

  <value-box
    title="Carbon Footprint"
    subtitle="In tons of CO2 equivalent"
    value="120"
    subvalue="Last Year"
    bg="var(--red-10)"
    icon="fa:leaf"
  ></value-box> `;

export const primary: Story = {
  render: () => html` <div
    style="max-width:450px; display: flex; flex-direction: column; gap: var(--size-s);"
  >
    <h2>Standard Sizes</h2>
    ${sampleBoxes}
  </div>`,
};

export const small: Story = {
  render: () => html` <div
    style=" display: grid; grid-template-columns: repeat(2, 170px); gap: var(--size-s);"
  >
    <h2>Small Sizes</h2>
    ${sampleBoxes}
  </div>`,
};

export const multiSized: Story = {
  render: () => html` <div
    style="display: flex; flex-direction: column; gap: var(--size-s);"
  >
    <h2>Varying Sizes</h2>
    ${[500, 400, 300, 200, 100].map(
      (size) => html`
        <value-box
          style="max-width: ${size}px;"
          title="Product Sales"
          subtitle="In units"
          value="1,250"
          subvalue="This month"
          bg="blue"
          icon="fa:money"
        ></value-box>
      `
    )}
  </div>`,
};
