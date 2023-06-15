import type { Preview } from "@storybook/web-components";

import "open-props/open-props.min.css";
import "../src/styles/shiny-theme.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
