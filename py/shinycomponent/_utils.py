from __future__ import annotations

import copy
import json

from htmltools import HTML, Tag, html_escape


def attr_to_escaped_json(x: object) -> str:
    res = json.dumps(x)
    res = html_escape(res, attr=True)
    return HTML(res)


def assign_to_slot(t: Tag, slot: str) -> Tag:
    """
    Adds a slot attribute to a given Tag object and returns a copy of the modified Tag
    object.

    Parameters
    ----------
    - `t` A Tag object to add a slot attribute to.
    - `slot` A string representing the name of the slot to add.

    Returns
    -------
    A copy of the modified Tag object with the added slot attribute.
    """
    copied_tag = copy.copy(t)

    copied_tag.attrs["slot"] = slot

    return copied_tag
