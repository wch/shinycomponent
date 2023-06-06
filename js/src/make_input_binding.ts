import { Shiny } from "./OptionalShiny";

// TODO: Better names for these types
export interface CustomElementInputValue<T> extends HTMLElement {
  id: string;
  value: T;
  onChangeCallback: (x: boolean) => void;
}

export interface CustomElementInputGetValue<T> extends HTMLElement {
  id: string;
  getValue: () => T;
  onChangeCallback: (x: boolean) => void;
}

export type CustomElementInput<T> =
  | CustomElementInputValue<T>
  | CustomElementInputGetValue<T>;

/**
 * Given a tag name for a custom element that extends SimpleNumberInput, this will hook
 * up the proper input binding and register it with Shiny.
 * @param tagName Name of the tag that corresponds to the input binding
 * @returns Nothing
 */
export function make_input_binding<T>(
  tagName: string,
  { type = null }: { type?: string | null } = {}
) {
  if (!Shiny) {
    return;
  }

  class NewCustomBinding extends Shiny["InputBinding"] {
    constructor() {
      super();
    }

    find(scope: HTMLElement): JQuery<CustomElementInput<T>> {
      return $(scope).find(tagName) as JQuery<CustomElementInput<T>>;
    }

    getId(el: CustomElementInput<T>): string {
      return el.id;
    }

    getValue(el: CustomElementInputValue<T> | CustomElementInputGetValue<T>) {
      if ("getValue" in el) {
        return el.getValue();
      } else {
        return el.value;
      }
    }

    getType(el: CustomElementInput<T>): string | null {
      return type;
    }

    subscribe(el: CustomElementInput<T>, callback: (x: boolean) => void): void {
      el.onChangeCallback = callback;
    }

    unsubscribe(el: CustomElementInput<T>): void {
      el.onChangeCallback = (x: boolean) => {};
    }
  }

  Shiny.inputBindings.register(new NewCustomBinding(), `${tagName}-Binding`);
}
