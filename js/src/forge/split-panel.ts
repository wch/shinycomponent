import { SlSplitPanel } from "@shoelace-style/shoelace";

export class ForgeSplitPanel extends SlSplitPanel {
  constructor() {
    super();

    this.addEventListener("sl-reposition", (event) => {
      window.dispatchEvent(new Event("resize"));
    });
  }
}

customElements.define("forge-split-panel", ForgeSplitPanel);

declare global {
  interface HTMLElementTagNameMap {
    "forge-split-panel": ForgeSplitPanel;
  }
}
