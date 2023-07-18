import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import { ForgeDarkModeSwitch } from "../forge/dark-mode-switch";

ForgeDarkModeSwitch;
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
  render: () => html`
    <div style="font-size: var(--font-size-s);">
      <forge-dark-mode-switch></forge-dark-mode-switch>
    </div>
    <div style="font-size: var(--font-size-m);">
      <forge-dark-mode-switch></forge-dark-mode-switch>
    </div>

    <div style="font-size: var(--font-size-l);">
      <forge-dark-mode-switch></forge-dark-mode-switch>
    </div>
  `,
};
