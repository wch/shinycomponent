from __future__ import annotations

import copy
import json
from typing import Optional, Tuple

from htmltools import HTML, Tag, TagAttrs, TagChild, html_escape, tags


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


def add_navigation_slots(
    args: Tuple[TagChild | TagAttrs],
    before_navigation: Optional[str | Tag] = None,
    after_navigation: Optional[str | Tag] = None,
):
    """
    Add `before_navigation` and `after_navigation` slots to the args list for
    layout-container descendent element (if they exist.)

    Parameters
    ----------
    - `args` : tuple
        Child elements to this tag. Special children include `shinycomponent.header()`
        and `shinycomponent.footer()` for adding a header and footer,
        `shinycomponent.sidebar()` for adding a sidebar, and `shinycomponent.tab()` for
        adding a tabs.
    - `before_navigation` : str or Tag, optional
        Content to be placed before (i.e. left in normal top-navigation mode and top if
        `sidebar_nav` is `True`) the navigation section of the dashboard. This can be a
        string or a Tag. _Advanced:_ If you want to include content here without using
        the named argument you can place any tag in the body with the attribute of
        `slot="before_navigation"` and it will have the same result.
    - `after_navigation` : str or Tag, optional
        Content to be placed after (i.e. right in normal top-navigation mode and bottom
        if `sidebar_nav` is `True`) the navigation section of the dashboard. This can be
        a string or a Tag. _Advanced:_ If you want to include content here without using
        the named argument you can place any tag in the body with the attribute of
        `slot="after_navigation"` and it will have the same result.

    Returns
    -------
    tuple
        Modified args list with the before_navigation and after_navigation tags in the
        correct place.
    """

    print("[add_navigation_slots]")
    print("~~ Before navigation: ", before_navigation)
    print("~~ After navigation: ", after_navigation)
    if isinstance(before_navigation, str):
        before_nav_slot = tags.div(before_navigation, slot="before_navigation")
        args = (before_nav_slot, *args)  # type: ignore

    if isinstance(before_navigation, Tag):
        args = (assign_to_slot(before_navigation, "before_navigation"), *args)  # type: ignore

    if isinstance(after_navigation, str):
        after_nav_slot = tags.div(after_navigation, slot="after_navigation")
        args = (*args, after_nav_slot)  # type: ignore

    if isinstance(after_navigation, Tag):
        args = (*args, assign_to_slot(after_navigation, "after_navigation"))  # type: ignore

    return args
