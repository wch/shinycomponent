import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import { Grid } from "../grid";
import { OutputPlot } from "../output_plot";
import { ShinyCard } from "../shiny-card";

Grid;
ShinyCard;
OutputPlot;

const meta: Meta = {
  component: "shiny-grid",
  tags: ["autodocs"],
  decorators: [
    (story) =>
      html`<div
        style="padding: var(--size-7);background-color: var(--surface-3);max-width:100%;height:500px; display: flex; flex-direction: column;"
      >
        ${story()}
      </div>`,
  ],
};
export default meta;

type Story = StoryObj;

export const a: Story = {
  render: () => html`
    <shiny-grid nCols="3">
      <shiny-card>
        <h2>Foo</h2>
        <output-plot> </output-plot>
      </shiny-card>

      <shiny-card>
        <h2>Bar</h2>
        <output-plot height="150"> </output-plot>
      </shiny-card>

      <shiny-card>
        <h2>Baz</h2>
        <output-plot height="225"> </output-plot>
      </shiny-card>
    </shiny-grid>
  `,
  parameters: {
    docs: {
      description: {
        component:
          "Default behavior where cards stretch to fill height of row.",
      },
    },
  },
};

export const b: Story = {
  render: () => html`
    <shiny-grid nRows="1" nCols="3">
      <shiny-card>
        <h2>Foo</h2>
        <output-plot> </output-plot>
      </shiny-card>

      <shiny-card height="content">
        <h2>Bar</h2>
        <output-plot height="150"> </output-plot>
      </shiny-card>

      <shiny-card height="350">
        <h2>Baz</h2>
        <output-plot height="225"> </output-plot>
      </shiny-card>
    </shiny-grid>
  `,
};
