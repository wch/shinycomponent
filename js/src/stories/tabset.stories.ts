import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import { ForgeInputSelect } from "../forge/input-select";
import { Grid } from "../grid";
import { ShinyIcon } from "../icon";
import { OutputPlot } from "../output_plot";
import { PositLogo } from "../posit-logo";
import { ShinyCard } from "../shiny-card";
import { ShinyDashboard } from "../shiny-dashboard";
import { Section } from "../shiny-section";
import { Sidebar } from "../sidebar";
import { Tab } from "../tabs/ScTab";

OutputPlot;
Grid;
ShinyDashboard;
Sidebar;
ShinyCard;
ForgeInputSelect;
Section;
PositLogo;
ShinyIcon;
Tab;

const meta: Meta = {
  component: "shiny-dashboard",
  tags: ["pages"],
  decorators: [
    (story) =>
      html`<div style="width: 100%; height:95vh; outline: 1px solid black; ">
        ${story()}
      </div>`,
  ],
};

export default meta;

type Story = StoryObj;

const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
Nullam euismod, nisl eget aliquam ultricies, nunc sapien ultricies diam,
sed aliquam nunc massa nec sapien. Nulla facilisi. Nullam euismod, nisl
eget aliquam ultricies, nunc sapien ultricies diam, sed aliquam nunc massa
nec sapien. Nulla facilisi. Nullam euismod, nisl eget aliquam ultricies,
nunc sapien ultricies diam, sed aliquam nunc massa nec sapien.`;

const bodyContent = html`<div slot="before_navigation">Before the nav</div>
  <div slot="after_navigation">After the nav</div>
  <shiny-tab name="Plots" icon="ph:chart-line">
    <sc-header>Plots Tab </sc-header>
    <p>${loremIpsumText}</p>
  </shiny-tab>
  <shiny-tab name="A Table" icon="ph:table">
    <sc-header>Table Tab</sc-header>
    <p>${loremIpsumText}</p>
  </shiny-tab>
  <shiny-tab name="A lot of words">
    <tab-label> Custom <shiny-icon name="ph:scroll"></shiny-icon> </tab-label>
    <sc-header>Words Tab </sc-header>
    <p>
      This tab has a custom label provided by the <code>tab-label</code> tag.
    </p>
    <p>${loremIpsumText}</p>
  </shiny-tab>`;

export const verticalTabs: Story = {
  render: () =>
    html` <shiny-dashboard sidebar-nav> ${bodyContent} </shiny-dashboard> `,
};

export const horizontalTabs: Story = {
  render: () => html`
    <shiny-dashboard>
      ${bodyContent}
      <shiny-sidebar>
        <h3>Sidebar</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Nullam euismod, nisl eget aliquam ultricies, nunc sapien
        </p>
      </shiny-sidebar>
    </shiny-dashboard>
  `,
};

export const nestedTabs: Story = {
  render: () => html`
    <shiny-dashboard sidebar-nav>
      <shiny-tab name="Plots" icon="ph:chart-line">
        <shiny-card>
          <shiny-tab name="Line Plot" icon="ph:chart-line">
            <p>Line Plots are cool! Here's some content</p>
          </shiny-tab>
          <shiny-tab name="Bar Plot" icon="ph:bar-plot">
            <p>Bar Plots are cool! Here's some content</p>
          </shiny-tab>
        </shiny-card>
      </shiny-tab>
      <shiny-tab name="A Table" icon="ph:table">
        <shiny-card>
          <p>Tables are cool! Here's some content</p>
        </shiny-card>
      </shiny-tab>
    </shiny-dashboard>
  `,
};
