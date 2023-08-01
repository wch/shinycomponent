import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TabElements, TabInfo } from "../layout-container";

/**
 * A custom element representing a label for a tab. This is effectively a div
 * that can have anything put in it which it will layout using a flexbox layout with
 * `align-items: center` and `gap: var(--size-xxs)`.
 */
@customElement("tab-label")
export class TabLabel extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        align-items: center;
        gap: var(--size-xxs);
      }
    `,
  ];

  render() {
    return html`<slot></slot>`;
  }
}

@customElement("tab-bar")
export class TabBar extends LitElement {
  @property() tabs: TabElements = [];
  @property({ type: Number }) selectedTabIndex: number = 0;
  @property({ type: String, reflect: true }) orientation:
    | "vertical"
    | "horizontal" = "horizontal";

  static styles = [
    css`
      :host {
        /* Some variables that control the little bars that demarkate tabs and
        also show what is selected */
        --tab-border-color: var(--text-2);

        grid-area: nav;
        display: flex;
        flex-flow: row nowrap;
        align-items: baseline;
        justify-content: space-between;
        border-block-end: 1px solid var(--border-color);
        gap: var(--_layout-container-gap);
        background-color: var(--surface-1);
      }

      :host([orientation="vertical"]) {
        overflow: auto;
        flex-flow: column nowrap;
        justify-content: flex-start;
        border-inline-end: 1px solid var(--border-color);
        border-block-end: unset;
        gap: 0;
      }

      :host([orientation="vertical"]) > .after_navigation {
        margin-block-start: auto;
      }

      :host([orientation="vertical"]) > .title ::slotted(*) {
        padding-block-end: var(--_layout-container-gap);
      }

      :host([orientation="vertical"]) > .after_navigation ::slotted(*) {
        padding-block-start: var(--_layout-container-gap);
      }

      .tab {
        cursor: pointer;
        position: relative;
        padding-inline: var(--size-m);

        /* Use the container padding for the top of the tab */
        padding-block: var(--size-xs);
        color: var(--text-1);

        /* Add elipses to prevent overflow for tab names that are too long */
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        transition: background-color var(--transition-fast);
        border-radius: var(--radius-s);
      }

      .selected-tab {
        background-color: var(--surface-3);
      }

      .mobile-tabs {
        display: none;
      }

      .tabs {
        flex-shrink: 1;
        display: flex;
        align-items: end;
        row-gap: var(--size-xs);
        position: relative;
        width: auto;
        border-radius: var(--radius-s);
        background-color: var(--surface-1);
        overflow: hidden;
        gap: var(--size-xs);
      }

      :host([orientation="vertical"]) .tabs {
        border-width: 1;
        min-width: unset;
        flex-flow: column nowrap;
        align-items: stretch;
        overflow: auto;
        max-width: var(--size-content-1);
      }

      .tab:last-child {
        border-inline-end: unset;
      }

      .tab:hover:not(.selected-tab) {
        background-color: var(--surface-4);
      }

      /* Mobile styles */

      .mobile-tabs select {
        background-color: inherit;
        accent-color: pink;
      }

      @container (width < 250px) {
        /* Hide the tabs and show the select */
        :host([orientation="horizontal"]) .mobile-tabs {
          display: unset;
        }

        :host([orientation="horizontal"]) .tabs {
          display: none;
        }
      }
    `,
  ];

  selectTab(tabIndex: number = this.selectedTabIndex) {
    this.selectedTabIndex = tabIndex;
    const options = {
      detail: { index: tabIndex, name: this.tabs[tabIndex].name },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent("selection", options));
  }

  // Callback used in the select input for mobile mode tab selection
  handleTabSelect(event: Event) {
    const selectedTabName = (
      event.target as HTMLSelectElement
    ).value.replaceAll("_", " ");
    const selectedTabIndex = this.tabs.findIndex(
      (tab) => tab.name === selectedTabName
    );
    this.selectTab(selectedTabIndex);
  }

  render() {
    if (this.tabs.length === 0) {
      this.style.display = "none";
      return html``;
    }

    this.style.display = "flex";

    const tabs = this.tabs.map((tab, i) => {
      const isSelected = i === this.selectedTabIndex;
      return html`<div
        class="tab ${isSelected ? "selected-tab" : ""}"
        @click=${() => this.selectTab(i)}
        title=${isSelected ? `Current: ${tab.name}` : `Switch to: ${tab.name}`}
      >
        ${tab.label}
      </div>`;
    });

    return html`
      <div class="title">
        <slot name="title">
          <div class="title_fallback">fallback</div>
        </slot>
      </div>

      <div class="tabs">${tabs}</div>
      <div class="mobile-tabs">
        <sl-select
          @sl-change=${this.handleTabSelect}
          value=${this.tabs[this.selectedTabIndex]?.value ?? ""}
        >
          ${this.tabs.map(
            (tab) =>
              html`<sl-option value="${tab.value}">${tab.name}</sl-option>`
          )}
        </sl-select>
      </div>

      <div class="after_navigation">
        <slot name="after_navigation"></slot>
      </div>
    `;
  }
}

export function extractTabsFromElements(container: HTMLElement) {
  let unnamedTabCounter = 0;
  // We directly traverse the immediate children here instead of using a
  // querySelector so we avoid accidentally finding tabs of children
  const tabElements: TabElements = Array.from(container.children)
    .filter(({ tagName }) => tagName === "SHINY-TAB")
    .map((child) => {
      // We checked this in the filter above, so force the type
      const tabName =
        child.attributes.getNamedItem("name")?.value ??
        `Tab ${unnamedTabCounter++}`;
      const tabIcon = child.attributes.getNamedItem("icon")?.value;

      // Check for a custom label.
      const tabLabel = Array.from(child.children).find(
        (el) => el.tagName === "TAB-LABEL"
      ) as HTMLElement | undefined;

      return {
        name: tabName,
        value: tabName.replaceAll(" ", "_"),
        el: child as HTMLElement,
        label:
          tabLabel ??
          html`
            <tab-label>
              ${tabIcon ? html`<shiny-icon name=${tabIcon}></shiny-icon>` : ""}
              ${tabName}
            </tab-label>
          `,
      } satisfies TabInfo;
    });

  return tabElements;
}

export function selectTabByIndex(tabs: TabElements, index: number) {
  tabs.forEach((tab, i) => {
    const isSelected = i === index;
    const currentlyHidden = tab.el.hasAttribute("aria-hidden");

    // Is this tab the one being shifted away from?
    const hidingTab = !currentlyHidden && !isSelected;
    if (hidingTab) {
      if (typeof $ !== "undefined") {
        $(tab.el).trigger("hidden");
      }
      // Make sure that screen readers know to not include the hidden tabs
      tab.el.inert = true;
      tab.el.setAttribute("aria-hidden", "");
    }

    // Is this tab the one being shifted to?
    const showingTab = currentlyHidden && isSelected;
    if (showingTab) {
      if (typeof $ !== "undefined") {
        $(tab.el).trigger("shown");
      }
      tab.el.inert = false;
      tab.el.removeAttribute("aria-hidden");
    }
  });
}
