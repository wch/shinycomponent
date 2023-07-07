from __future__ import annotations

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild

from ._htmldeps import page_dep


def avatar(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-avatar> tag.

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag("shiny-avatar", page_dep(), *args, _add_ws=_add_ws, **kwargs)


def simple_number_input(
    id: str, *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <simple-number-input> tag.

    A WebComponent for creating number inputs.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    :
        Tag

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag(
        "simple-number-input", page_dep(), id=id, *args, _add_ws=_add_ws, **kwargs
    )
