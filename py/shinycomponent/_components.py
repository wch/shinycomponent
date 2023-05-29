from __future__ import annotations

import json
from typing import TYPE_CHECKING

from htmltools import HTML, Tag, TagAttrs, TagAttrValue, TagChild, html_escape, tags

from ._htmldeps import page_dep

if TYPE_CHECKING:
    import pandas as pd


def greeting_card(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <greeting-card> tag.

    An experimental web-component for creating greeting cards.

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
    Tag

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag("greeting-card", *args, _add_ws=_add_ws, **kwargs)


def tabset(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-tabset> tag.

    An experimental web-component for creating greeting cards.

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
    Tag

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag("shiny-tabset", *args, _add_ws=_add_ws, **kwargs)


def tab(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-tab> tag.

    An experimental web-component for creating greeting cards.

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
    Tag

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag("shiny-tab", *args, _add_ws=_add_ws, **kwargs)


def sidebar(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-sidebar> tag.

    An experimental web-component for creating greeting cards.

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
    Tag

    See Also
    --------
    ~htmltools.Tag
    """
    return Tag("shiny-sidebar", *args, _add_ws=_add_ws, **kwargs)


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

    return Tag("simple-number-input", id=id, *args, _add_ws=_add_ws, **kwargs)


def material_slider(
    id: str, *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    return Tag("material-slider", id=id, *args, _add_ws=_add_ws, **kwargs)


def tanstack_table(
    data: pd.DataFrame,
    *args: TagChild | TagAttrs,
    _add_ws: bool = True,
    **kwargs: TagAttrValue,
) -> Tag:
    return Tag(
        "tanstack-table",
        tags.script(
            data.to_json(orient="records"), type="application/json", class_="data"
        ),
        *args,
        _add_ws=_add_ws,
        **kwargs,
    )


def output_data_grid(id: str) -> Tag:
    # TODO: add resolve_id
    return Tag(
        "shiny-data-grid-output",
        page_dep(),
        id=id,
    )


def attr_to_escaped_json(x: object) -> str:
    res = json.dumps(x)
    res = html_escape(res, attr=True)
    return HTML(res)
