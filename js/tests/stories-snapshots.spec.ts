import { test } from "@playwright/test";
import { getStoryId, loadStory, screenshotStory } from "./storybook-utils";

// These tests are all simple snapshots with no interaction. They are meant to
// be a quick way to catch regressions in the appearance of our components.

// ====================================================
// Cards
// ====================================================
for (const cardStory of [
  "Basic",
  "Fixed Height Plot",
  "No Fill",
  "Overflowing Content",
  "Horizontal Tabbed Content",
  "Vertical Tabbed Content",
]) {
  test(`Card: ${cardStory}`, async ({ page }) => {
    await loadStory(getStoryId("card", cardStory), page);
    await screenshotStory(page, "#card-container");
  });
}

// ====================================================
// Value Boxes
// ====================================================
for (const vboxStory of ["Primary", "Small", "Multi Sized"]) {
  test(`ValueBox: ${vboxStory}`, async ({ page }) => {
    await loadStory(getStoryId("valuebox", vboxStory), page);
    await screenshotStory(page);
  });
}

// ====================================================
// Tabsets/Dashboards
// ====================================================
for (const tabsetStory of ["Vertical Tabs", "Horizontal Tabs", "Nested Tabs"]) {
  test(`Tabset: ${tabsetStory}`, async ({ page }) => {
    await loadStory(getStoryId("tabset", tabsetStory), page);
    await screenshotStory(page);
  });
}

// ====================================================
// Sidebars
// ====================================================
for (const sidebarStory of [
  "Plain Sidebar",
  "Icon Sidebar",
  "Card With Sidebar",
]) {
  test(`Sidebar: ${sidebarStory}`, async ({ page }) => {
    await loadStory(getStoryId("sidebar", sidebarStory), page);
    await screenshotStory(page);
  });
}
