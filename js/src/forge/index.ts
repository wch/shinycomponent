import "@shoelace-style/shoelace/dist/themes/light.css";
import { ForgeNumberInput } from "./number-input";
import { ForgeSplitPanel } from "./split-panel";
import { ForgeTextInput } from "./text-input";

// Prevent esbuild from tree-shaking these components away.
ForgeNumberInput;
ForgeSplitPanel;
ForgeTextInput;
