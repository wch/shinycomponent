from __future__ import annotations

from typing import Optional

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild, tags

from ._htmldeps import page_dep


def dashboard(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    A dashboard layout that can take any combination of a sidebar (with `sidebar()`) and
    header or footer. If `tab()`s are included, they will be reflected in the header.

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

    return Tag("shiny-dashboard", page_dep(), *args, _add_ws=_add_ws, **kwargs)


def page_dashboard(
    *args: TagChild | TagAttrs,
    title: Optional[str] = None,
    lang: Optional[str] = None,
):
    """
    Generates an HTML page with a dashboard layout.

    Args:
        *args: Child tags or attributes to include in the body of the page.
        title (Optional[str]): The title of the page.
        lang (Optional[str]): The language of the page.

    Returns:
        The HTML page with a dashboard layout.
    """
    head = tags.title(title) if title else None
    return tags.html(
        tags.head(
            head,
            tags.style(
                """
                       html { height: 100%; }
                       body { height: 100%; min-height: 100%; }
                       """
            ),
        ),
        tags.body(dashboard(*args)),
        page_dep(),
        lang=lang,
    )
