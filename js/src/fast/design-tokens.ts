import {
  SwatchRGB,
  accentColor,
  neutralColor,
} from "@microsoft/fast-components";
import { DesignToken } from "@microsoft/fast-foundation";

// Set Primary/Neutral color with defaults
const rstudioBlue = SwatchRGB.from({ r: 68, g: 112, b: 153 });
accentColor.setValueFor(document.body, rstudioBlue);

// Set Primary/Neutral color with defaults
const rstudioGray = SwatchRGB.from({ r: 64, g: 64, b: 65 });
neutralColor.setValueFor(document.body, rstudioGray);

export const brandColor =
  DesignToken.create<string>("brand-color").withDefault("pink");

export const spacingNormal =
  DesignToken.create<string>("spacing-normal").withDefault("25px");

DesignToken.registerRoot(); // Default values are now emitted
