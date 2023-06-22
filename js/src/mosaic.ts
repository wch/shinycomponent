import { LitElement, html } from "lit";

import { coordinator, wasmConnector } from "@uwdata/mosaic-core";
import * as vg from "@uwdata/vgplot";

function dirname(url: string): string {
  const lastSlashIndex = url.lastIndexOf("/");
  if (lastSlashIndex !== -1) {
    return url.substring(0, lastSlashIndex + 1);
  }
  return "";
}

export class MosaicOutput extends LitElement {
  render() {
    (async () => {
      const wasmdb = await wasmConnector();
      coordinator().logger(null);
      coordinator().databaseConnector(wasmdb);

      const specUrl = dirname(import.meta.url) + "flights-200k.json";
      const json = await fetch(specUrl);
      const spec = JSON.parse(await json.text());
      const x = await vg.parseSpec(spec, {
        baseURL: dirname(import.meta.url),
      });
      this.shadowRoot.querySelector("#foo")?.replaceChildren(x);
    })();

    return html`<div id="foo">Placeholder!</div>`;
  }
}

// Register both the custom element and the input bindings
customElements.define("mosaic-output", MosaicOutput);
