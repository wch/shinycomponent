import { Page, expect } from "@playwright/test";

/**
 * Load a storybook story into the page in isolated iframe mode
 * @param id The story id
 * @param page playwright page object to load the story into
 */
export async function loadStory(id: string, page: Page) {
  const search = new URLSearchParams({ viewMode: "story", id });
  await page.goto(`http://localhost:6008/iframe.html?${search.toString()}`, {
    waitUntil: "networkidle",
  });
}

/**
 * Make a screenshot assertion of the storybook story
 * @param page playwright page object to load the story into
 * @param locator The locator to use to find the story container. Defaults to
 * "#storybook-root"
 */
export async function screenshotStory(
  page: Page,
  locator: string = "#storybook-root"
) {
  await expect(page.locator(locator)).toHaveScreenshot();
}

/**
 * Get the story id for a storybook story
 * @param root The root directory of the story. E.g. "card"
 * @param name The name of the story. E.g. "Basic"
 * @returns The story id
 * @example
 * getStoryId("card", "Basic") // => "stories-card--basic"
 * getStoryId("card", "Overflowing Content") // => "stories-card--overflowing-content"
 */
export function getStoryId(root: string, name: string): string {
  // Convert name to kebab-case
  const kebabName = name
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return `stories-${root}--${kebabName}`;
}
