import "@shoelace-style/shoelace/dist/themes/light.css";
import { ForgeInputCheckbox } from "./input-checkbox";
import { ForgeInputCheckboxGroup } from "./input-checkbox-group";
import { ForgeInputNumber } from "./input-number";
import { ForgeInputSwitch } from "./input-switch";
import { ForgeInputText } from "./input-text";
import { ForgeSplitPanel } from "./split-panel";

// Prevent esbuild from tree-shaking these components away.
ForgeInputCheckbox;
ForgeInputCheckboxGroup;
ForgeInputNumber;
ForgeInputSwitch;
ForgeInputText;
ForgeSplitPanel;