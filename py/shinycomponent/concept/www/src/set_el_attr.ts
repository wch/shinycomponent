/**
 * Creates an attribute of given type and value and adds it to the element
 * @param el Element to add the attribute to
 * @param type Type of the attribute (e.g. "slot")
 * @param value Value of the attribute (e.g. "footer")
 * @returns Returns element which has been modified in place
 */
export function set_el_attr(el: HTMLElement, type: string, value: string) {
  const attr = document.createAttribute(type);
  attr.value = value;
  el.attributes.setNamedItem(attr);
  return el;
}
