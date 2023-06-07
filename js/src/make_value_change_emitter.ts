export function makeInputEventId(tagName: string, id: string) {
  return `${tagName}-${id}`;
}

const DATA_PASSING_EVENT_ID = "shiny-data-passing-event";

type DataPassingEventPayload =
  | {
      type: "string";
      value: string;
    }
  | {
      type: "number";
      value: number;
    }
  | {
      type: "boolean";
      value: boolean;
    }
  | {
      type: "string[]";
      value: string[];
    }
  | {
      type: "other";
      value: unknown;
    };

export type ValueChangeEmitter = (payload: DataPassingEventPayload) => void;

function isDataPassingPayload(x: unknown): x is DataPassingEventPayload {
  if (typeof x !== "object") {
    return false;
  }

  if (x === null) {
    return false;
  }

  const hasTypeField = "type" in x && typeof x.type === "string";
  const hasValueField = "value" in x;

  if (!hasTypeField || !hasValueField) return false;

  switch (x.type) {
    case "string":
      return typeof x.value === "string";
    case "number":
      return typeof x.value === "number";
    case "boolean":
      return typeof x.value === "boolean";
    case "string[]":
      return (
        Array.isArray(x.value) && x.value.every((x) => typeof x === "string")
      );
    default:
      return true;
  }
}

function makeDataPassingPayload(
  id: string,
  msg: DataPassingEventPayload
): DataPassingEventPayload & { id: string } {
  return { ...msg, id };
}

export function getDataPassingEventValue(
  evt: Event,
  id: string
): DataPassingEventPayload | null {
  if (!(evt instanceof CustomEvent)) {
    return null;
  }

  if (evt.type !== DATA_PASSING_EVENT_ID) {
    return null;
  }

  const payload = evt.detail;
  if (typeof payload !== "object") {
    return null;
  }

  // Make sure that we have an id and it matches what we want
  if (typeof payload.id !== "string" || payload.id !== id) {
    return null;
  }

  if (!isDataPassingPayload(payload)) {
    return null;
  }

  return payload;
}

export function makeValueChangeEmitter(
  el: HTMLElement,
  id: string
): ValueChangeEmitter {
  return (payload: DataPassingEventPayload) => {
    const event = new CustomEvent(DATA_PASSING_EVENT_ID, {
      detail: makeDataPassingPayload(id, payload),
      bubbles: true,
    });
    el.dispatchEvent(event);
  };
}

export type DataPassingEventWatcher = {
  unsubscribe: () => void;
};

export const dummyDataPassingWatcher = {
  unsubscribe: () => {},
};

export function makeDataPassingWatcher(
  watchId: string,
  callback: (payload: DataPassingEventPayload) => void
): DataPassingEventWatcher {
  const onEvent = (e: Event) => {
    const payload = getDataPassingEventValue(e, watchId);

    if (payload === null) {
      return;
    }

    const value = payload.value;

    if (value === null || value === undefined) {
      return;
    }

    callback(payload);
  };
  window.addEventListener(DATA_PASSING_EVENT_ID, onEvent);

  return {
    unsubscribe: () => {
      window.removeEventListener(DATA_PASSING_EVENT_ID, onEvent);
    },
  };
}
