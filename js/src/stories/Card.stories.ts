import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import { OutputPlot } from "../output_plot";
import { ShinyCard } from "../shiny-card";
import { Tab } from "../tabs/ScTab";

ShinyCard;
OutputPlot;
Tab;

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
    <h2>Fixed height plot</h2>
    <output-plot height="300"> </output-plot>
  </shiny-card>`,
};

export const c: Story = {
  render: () => html`<shiny-card nofill>
    <sc-header> I am a header </sc-header>
    <output-plot> </output-plot>
    <sc-footer> I am a footer </sc-footer>
  </shiny-card>`,
};

export const d: Story = {
  render: () => html`<shiny-card>
    <sc-header> I am a header </sc-header>
    <output-plot height="250"> </output-plot>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <output-plot height="350"> </output-plot>
    <sc-footer> I am a footer </sc-footer>
  </shiny-card>`,
};

export const tabbedContent: Story = {
  render: () => html`<shiny-card>
    <sc-header>I am a header </sc-header>
    <shiny-tab name="plot">
      <span>I am a plot</span>
      <output-plot> </output-plot>
    </shiny-tab>
    <shiny-tab name="prose">
      <span>I am some prose</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
    </shiny-tab>
    <sc-footer> I am a footer </sc-footer>
  </shiny-card> `,
};

export const verticalTabbedContent: Story = {
  render: () => html`
    <shiny-card tabsOnSide>
      <sc-header>I am a header </sc-header>

      <shiny-tab name="plot">
        <sc-header> Plot Tab #1</sc-header>
        <span>I am a plot</span>
        <output-plot height="250"> </output-plot>
        <sc-footer> plot footer </sc-footer>
      </shiny-tab>
      <shiny-tab name="prose">
        <sc-header> Prose Tab </sc-header>
        <span>I am some prose</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
        <sc-footer> prose footer </sc-footer>
      </shiny-tab>
      <!-- <sc-footer> I am a footer </sc-footer> -->
    </shiny-card>
  `,
};
