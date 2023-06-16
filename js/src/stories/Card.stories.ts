import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import { OutputPlot } from "../output_plot";
import { ShinyCard } from "../shiny-card";

ShinyCard;
OutputPlot;

const meta: Meta = {
  component: "shiny-card",
  decorators: [
    (story) =>
      html`<div
        style="padding: var(--size-7);background-color: var(--surface-3);max-width:450px;height:550px; display: flex; flex-direction: column;"
      >
        ${story()}
      </div>`,
  ],
};
export default meta;

type Story = StoryObj;

export const primary: Story = {
  render: () => html`<shiny-card>
    <h2>Foo</h2>
    <output-plot> </output-plot>
  </shiny-card>`,
};

export const b: Story = {
  render: () => html`<shiny-card>
    <h2>Bar</h2>
    <output-plot height="300"> </output-plot>
  </shiny-card>`,
};

export const c: Story = {
  render: () => html`<shiny-card nofill>
    <shiny-card-header> I am a header </shiny-card-header>
    <output-plot> </output-plot>
    <shiny-card-footer> I am a footer </shiny-card-footer>
  </shiny-card>`,
};

export const d: Story = {
  render: () => html`<shiny-card>
    <shiny-card-header> I am a header </shiny-card-header>
    <output-plot height="250"> </output-plot>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <output-plot height="350"> </output-plot>
    <shiny-card-footer> I am a footer </shiny-card-footer>
  </shiny-card>`,
};
