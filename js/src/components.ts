import {
  fastButton,
  provideFASTDesignSystem,
} from "@microsoft/fast-components";
import { Collapsible } from "./collapsible";
import { ColorPicker } from "./color-picker";
import { DesignPreview } from "./design-preview";
import { counter } from "./fast/counter";
import { DashboardFooter } from "./footer";
import { GeneralOutput } from "./general-output";
import { Grid } from "./grid";
import { GridItem } from "./grid-item";
import { ShinyIcon } from "./icon";
import { ObservablePlot } from "./observable_plot";
import { OutputPlot } from "./output_plot";
import { PositLogo } from "./posit-logo";
import { ShinyAvatar } from "./shiny-avatar";
import { ShinyCard } from "./shiny-card";
import { ShinyDashboard } from "./shiny-dashboard";
import { Section } from "./shiny-section";
import { Sidebar } from "./sidebar";
import { SimpleNumberInput } from "./simple-number-input";
import { SimpleNumberOutput } from "./simple-number-output";
import { Tab } from "./tabs/ScTab";
import { ThemeChooser } from "./theme-chooser";
import { ValueBox } from "./value_box";

// Prevent esbuild from tree-shaking these components away.
Collapsible;
ColorPicker;
DesignPreview;
DashboardFooter;
GeneralOutput;
Sidebar;
SimpleNumberInput;
SimpleNumberOutput;
Tab;
ShinyDashboard;
ThemeChooser;
Grid;
GridItem;
PositLogo;
ShinyCard;
Section;
ShinyIcon;
ShinyAvatar;
OutputPlot;
ValueBox;
ObservablePlot;

provideFASTDesignSystem().register(
  fastButton(),
  counter({ defaultButtonContent: "Please count." })
);
