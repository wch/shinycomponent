import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import { ShinyCard } from "../shiny-card";

ShinyCard;

type CardProps = {
  title: string;
  shadowed: boolean;
  centercontent: boolean;
};
/**
 * Primary UI component for user interaction
 */
function card({ title, shadowed = true, centercontent = false }: CardProps) {
  return html`
    <div style="padding: var(--size-5);background-color: var(--surface-3);">
      <shiny-card
        ?shadowed=${shadowed}
        ?centercontent=${centercontent}
        style="max-width:400px;"
      >
        <h2>${title}</h2>
        <p>Card Body</p>
      </shiny-card>
    </div>
  `;
}

const meta = {
  title: "Example/Card",
  tags: ["autodocs"],
  render: (x) => card(x),
  argTypes: {},
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<CardProps>;

export const primary: Story = {
  args: {
    title: "Basic Card",
  },
};

export const noFill: Story = {
  args: {
    title: "Fillable Card",
  },
};
