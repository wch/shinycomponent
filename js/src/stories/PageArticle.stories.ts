import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import { OutputPlot } from "../output_plot";
import { PageArticle } from "../page-article";

OutputPlot;
PageArticle;

const meta: Meta = {
  component: "page-article",
  tags: ["pages"],
};

export default meta;

type Story = StoryObj;

export const a: Story = {
  render: () => html`
    <page-article>
      <h1>My cool app</h1>
      <output-plot> </output-plot>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Nullam euismod, nisl eget aliquam ultricies, nunc sapien ultricies diam,
        sed aliquam nunc massa nec sapien. Nulla facilisi. Nullam euismod, nisl
        eget aliquam ultricies, nunc sapien ultricies diam, sed aliquam nunc
        massa nec sapien. Nulla facilisi. Nullam euismod, nisl eget aliquam
        ultricies, nunc sapien ultricies diam, sed aliquam nunc massa nec
        sapien.
      </p>
      <output-plot height="150"> </output-plot>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Nullam euismod, nisl eget aliquam ultricies, nunc sapien ultricies diam,
        sed aliquam nunc massa nec sapien. Nulla facilisi. Nullam euismod, nisl
        eget aliquam ultricies, nunc sapien ultricies diam, sed aliquam nunc
        massa nec sapien. Nulla facilisi. Nullam euismod, nisl eget aliquam
        ultricies, nunc sapien ultricies diam, sed aliquam nunc massa nec
        sapien.
      </p>
    </page-article>
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
