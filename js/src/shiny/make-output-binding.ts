import { Shiny } from "./OptionalShiny";

export interface CustomElementOutput<T> extends HTMLElement {
  value: T;
}

/**
 * Given a tag name for a custom element that extends CustomElementOutput<T>,
 * this will hook up the proper output binding and register it with Shiny.
 * @param tagName Name of the tag that corresponds to the output binding
 * @returns Nothing
 */
export function makeOutputBinding<T>(tagName: string) {
  if (!Shiny) {
    return;
  }

  class NewCustomBinding extends Shiny["OutputBinding"] {
    constructor() {
      super();
    }

    find(scope: HTMLElement): JQuery<CustomElementOutput<T>> {
      return $(scope).find(tagName) as JQuery<CustomElementOutput<T>>;
    }

    renderValue(el: CustomElementOutput<T>, data: T): void {
      el.value = data;
    }
  }

  Shiny.outputBindings.register(new NewCustomBinding(), `${tagName}-Binding`);
}
