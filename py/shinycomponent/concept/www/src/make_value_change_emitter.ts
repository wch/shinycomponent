export function make_input_event_id(tag_name: string, id: string) {
  return `${tag_name}-${id}`;
}

const Data_Passing_Event_ID = "shiny-data-passing-event";

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
      type: "other";
      value: unknown;
    };

function is_data_passing_payload(x: unknown): x is DataPassingEventPayload {
  if (typeof x !== "object") {
    return false;
  }

  if (x === null) {
    return false;
  }

  const has_type_field = "type" in x && typeof x.type === "string";
  const has_value_field = "value" in x;

  if (!has_type_field || !has_value_field) return false;

  switch (x.type) {
    case "string":
      return typeof x.value === "string";
    case "number":
      return typeof x.value === "number";
    default:
      return true;
  }
}

function make_data_passing_payload(
  id: string,
  msg: DataPassingEventPayload
): DataPassingEventPayload & { id: string } {
  return { ...msg, id };
}

export function get_data_passing_event_value(
  evt: Event,
  id: string
): DataPassingEventPayload | null {
  if (!(evt instanceof CustomEvent)) {
    return null;
  }

  if (evt.type !== Data_Passing_Event_ID) {
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

  if (!is_data_passing_payload(payload)) {
    return null;
  }

  return payload;
}

export function make_value_change_emitter<T>(el: HTMLElement, id: string) {
  return (payload: DataPassingEventPayload) => {
    const event = new CustomEvent(Data_Passing_Event_ID, {
      detail: make_data_passing_payload(id, payload),
      bubbles: true,
    });
    el.dispatchEvent(event);
  };
}

export type DataPassingEventWatcher = {
  unsubscribe: () => void;
};

export const dummy_data_passing_watcher = {
  unsubscribe: () => {},
};

export function make_data_passing_watcher(
  watch_id: string,
  callback: (payload: DataPassingEventPayload) => void
): DataPassingEventWatcher {
  const on_event = (e: Event) => {
    const payload = get_data_passing_event_value(e, watch_id);

    if (payload === null) {
      return;
    }

    const value = payload.value;

    if (value === null || value === undefined) {
      return;
    }

    callback(payload);
  };
  window.addEventListener(Data_Passing_Event_ID, on_event);

  return {
    unsubscribe: () => {
      window.removeEventListener(Data_Passing_Event_ID, on_event);
    },
  };
}
