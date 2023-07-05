from __future__ import annotations

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild

from ._htmldeps import page_dep


def grid(
    *args: TagChild | TagAttrs,
    n_rows: int = 1,
    n_cols: int = 2,
    align_items: str = "stretch",
    **kwargs: TagAttrValue,
) -> Tag:
    """
    Layout elements in a grid with a specified number of rows or columns.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    n_rows
        Number of rows in the grid.
    n_cols
        Number of columns in the grid.
    align_items
        How to align items in the grid. Defaults to "stretch", which will make sure the items fill the full height of any row they reside in. For more options see [css-grid's align-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
    **kwargs
        Attributes to this tag.

    Returns
    -------
    HTML element with a grid-layout.

    See Also
    --------
    ~shinycomponent.grid_item
    ~htmltools.Tag
    """

    return Tag(
        "shiny-grid",
        page_dep(),
        *args,
        _add_ws=True,
        nRows=n_rows,
        nCols=n_cols,
        alignItems=align_items,
        **kwargs,
    )


def grid_item(
    *args: TagChild | TagAttrs, width: int = 1, height: int = 1, **kwargs: TagAttrValue
) -> Tag:
    """
    A element to be placed on a grid defined by shinycomponent.grid.

    Parameters
    ----------
    *args
        Child elements to this tag.
    width
        The width of the grid item in columns of the enclosing grid. Defaults to 1.
    height
        The height of the grid item in rows of the enclosing grid. Defaults to 1.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    An element of the requested size in the next available section of the grid where it
    will fit.

    See Also
    --------
    ~shinycomponent.grid ~htmltools.Tag
    """

    return Tag(
        "shiny-grid-item",
        page_dep(),
        *args,
        width=width,
        height=height,
        _add_ws=True,
        **kwargs,
    )
