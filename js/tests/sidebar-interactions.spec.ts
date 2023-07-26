import { expect, test } from "@playwright/test";
import { getStoryId, loadStory } from "./storybook-utils";

// These tests are all simple snapshots with no interaction. They are meant to
// be a quick way to catch regressions in the appearance of our components.

test(`Sidebar open and close`, async ({ page }) => {
  await loadStory(getStoryId("sidebar", "Plain Sidebar"), page);

  // Screenshot of open state
  const openState = await page.screenshot();

  // Close sidebar
  const closeSidebarButton = page.getByLabel("Close sidebar");
  await expect(closeSidebarButton).toBeVisible();
  await closeSidebarButton.click();

  // Make sure the close button is no longer visible
  await expect(closeSidebarButton).not.toBeVisible();

  // Screenshot of closed state
  const closedState = await page.screenshot();

  // Make sure the two screenshots are different
  expect(openState).not.toEqual(closedState);
});
