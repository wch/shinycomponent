from htmltools import Tag, TagAttrs, TagAttrValue, TagChild

from ._htmldeps import page_dep


def card(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-card> tag.

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

    return Tag("shiny-card", page_dep(), *args, _add_ws=_add_ws, **kwargs)


def card_header(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-card-header> tag.

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

    return Tag("shiny-card-header", page_dep(), *args, _add_ws=_add_ws, **kwargs)


def card_footer(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-card-footer> tag.

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

    return Tag("shiny-card-footer", page_dep(), *args, _add_ws=_add_ws, **kwargs)
