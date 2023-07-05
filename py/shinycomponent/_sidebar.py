from __future__ import annotations

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild

from ._htmldeps import page_dep


def sidebar(
    *args: TagChild | TagAttrs, open_width_px: int = 320, **kwargs: TagAttrValue
) -> Tag:
    """
    Collapsible sidebar for use in dashboards and cards.

    Parameters
    ----------
    *args : Union[TagChild, TagAttrs]
        Child elements to this tag.
    open_width_px : int, optional
        The width of the sidebar when it is open, in pixels, by default 320.
    **kwargs : Dict[str, TagAttrValue]
        Attributes to this tag.

    Returns
    -------
    Tag representing a collapsible sidebar.

    See Also
    --------
    ~shinycomponent.dashboard
    ~shinycomponent.card
    ~htmltools.Tag
    """
    return Tag(
        "shiny-sidebar",
        page_dep(),
        *args,
        _add_ws=False,
        openWidthPx=open_width_px,
        **kwargs,
    )
