export function escapeSpaces(str: string): string {
  return str.replace(/_/g, "__").replace(/ /g, "_-");
}

export function unescapeSpaces(str: string): string {
  let unescaped = "";
  let state: "normal" | "escaping" = "normal";

  for (const char of str) {
    switch (state) {
      case "normal":
        if (char === "_") {
          state = "escaping";
        } else {
          unescaped += char;
        }
        break;
      case "escaping":
        if (char === "-") {
          unescaped += " ";
        } else if (char === "_") {
          unescaped += "_";
        } else {
          unescaped += "_" + char;
        }
        state = "normal";
        break;
    }
  }

  return unescaped;
}

/**
 * Returns true if the given object is a plain Object, like {a: 1, b: 2}.
 * Returns false for arrays, functions, and other non-plain-Objects, as well
 * as strings, numbers, null, undefined.
 *
 */
export function isPlainObject(x: object): boolean {
  return !!x && x.constructor === Object;
}
