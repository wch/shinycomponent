import { SimpleNumberInput } from "./simple-number-input";

/**
 * Given a tag name for a custom element that extends SimpleNumberInput, this will hook
 * up the proper input binding and register it with Shiny.
 * @param tag_name Name of the tag that corresponds to the input binding
 * @returns Nothing
 */
export function make_input_binding(tag_name: string) {
  class NewNumberBinding extends Shiny.InputBinding {
    constructor() {
      super();
    }

    find(scope: HTMLElement): JQuery<HTMLElement> {
      return $(scope).find(tag_name);
    }

    getId(el: SimpleNumberInput): string {
      return el.id;
    }

    getValue(el: SimpleNumberInput) {
      return el.value;
    }

    subscribe(el: SimpleNumberInput, callback: (x: boolean) => void): void {
      el.onChangeCallback = callback;
    }

    unsubscribe(el: SimpleNumberInput): void {
      el.onChangeCallback = (x: boolean) => {};
    }
  }

  Shiny.inputBindings.register(new NewNumberBinding(), `${tag_name}-Binding`);
}
