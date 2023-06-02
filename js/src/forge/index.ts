import "@shoelace-style/shoelace/dist/themes/light.css";
import { ForgeInputCheckbox } from "./input-checkbox";
import { ForgeInputNumber } from "./input-number";
import { ForgeInputText } from "./input-text";
import { ForgeSplitPanel } from "./split-panel";

// Prevent esbuild from tree-shaking these components away.
ForgeInputCheckbox;
ForgeInputNumber;
ForgeInputText;
ForgeSplitPanel;
