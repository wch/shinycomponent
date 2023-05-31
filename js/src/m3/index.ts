import { MdIcon } from "@material/web/icon/icon";
import { MdFilledIconButton } from "@material/web/iconbutton/filled-icon-button";
import { MdFilledTonalIconButton } from "@material/web/iconbutton/filled-tonal-icon-button";
import { MdOutlinedIconButton } from "@material/web/iconbutton/outlined-icon-button";
import { MdNavigationDrawer } from "@material/web/navigationdrawer/navigation-drawer";
import { MdNavigationDrawerModal } from "@material/web/navigationdrawer/navigation-drawer-modal";

import { M3StandardIconButton } from "./m3-iconbutton";
import { M3Slider } from "./m3-slider";

// Prevent esbuild from tree-shaking these components away.
MdIcon;
MdFilledIconButton;
MdFilledTonalIconButton;
MdOutlinedIconButton;
MdNavigationDrawer;
MdNavigationDrawerModal;

M3Slider;
M3StandardIconButton;
