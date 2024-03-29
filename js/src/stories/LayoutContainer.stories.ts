import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import { LayoutContainer } from "../layout-container";
import { OutputPlot } from "../output_plot";
import { Tab } from "../tabs/ScTab";

LayoutContainer;
OutputPlot;
Tab;

const meta: Meta = {
  component: "sc-layout-container",
  decorators: [
    (story) =>
      html`<div
        style="padding: var(--size-7); outline:1px solid black; max-width:450px;height:550px;"
      >
        ${story()}
      </div>`,
  ],
};
export default meta;

type Story = StoryObj;

export const primary: Story = {
  render: () => html`<sc-layout-container>
    <h2>Foo</h2>
    <output-plot> </output-plot>
  </sc-layout-container>`,
};

export const b: Story = {
  render: () => html`<sc-layout-container>
    <sc-header> I am a header </sc-header>
    <output-plot> </output-plot>
  </sc-layout-container>`,
};

export const c: Story = {
  render: () => html`<sc-layout-container no-flex>
    <sc-header> Using no-flex=true </sc-header>
    <output-plot> </output-plot>
    <sc-footer> I am a footer </sc-footer>
  </sc-layout-container>`,
};

export const d: Story = {
  render: () => html`<sc-layout-container>
    <sc-header> I am a header </sc-header>
    <output-plot height="250"> </output-plot>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <output-plot height="350"> </output-plot>
    <sc-footer> I am a footer </sc-footer>
  </sc-layout-container>`,
};

export const withSidebar: Story = {
  render: () => html`<sc-layout-container>
    <sc-header> I am a header </sc-header>
    <output-plot> </output-plot>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <shiny-sidebar>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </shiny-sidebar>
    <sc-footer> I am a footer </sc-footer>
  </sc-layout-container>`,
};

export const tabbedContent: Story = {
  render: () => html`<sc-layout-container>
    <shiny-tab name="plot">
      <span>I am a plot</span>
      <output-plot> </output-plot>
    </shiny-tab>
    <shiny-tab name="prose">
      <span>I am some prose</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
    </shiny-tab>
    <sc-footer> I am a footer </sc-footer>
  </sc-layout-container> `,
};

export const verticalTabbedContent: Story = {
  render: () => html`
    <sc-layout-container sidebar-nav>
      <shiny-tab name="plot">
        <sc-header> Plot Tab #1</sc-header>
        <span>I am a plot</span>
        <output-plot height="250"> </output-plot>
      </shiny-tab>
      <shiny-tab name="prose">
        <sc-header> Prose Tab </sc-header>
        <span>I am some prose</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
      </shiny-tab>
      <sc-footer> I am a footer </sc-footer>
    </sc-layout-container>
  `,
};
