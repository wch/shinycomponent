import { MdIcon } from "@material/web/icon/icon";
import { MdFilledIconButton } from "@material/web/iconbutton/filled-icon-button";
import { MdFilledTonalIconButton } from "@material/web/iconbutton/filled-tonal-icon-button";
import { MdOutlinedIconButton } from "@material/web/iconbutton/outlined-icon-button";

import { M3StandardIconButton } from "./m3-iconbutton";
import { M3Slider } from "./m3-slider";

// Prevent esbuild from tree-shaking these components away.
MdIcon;
MdFilledIconButton;
MdFilledTonalIconButton;
MdOutlinedIconButton;

M3Slider;
M3StandardIconButton;
