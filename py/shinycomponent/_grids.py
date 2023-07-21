from __future__ import annotations

from typing import NewType

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild

from ._cards import CardTag
from ._htmldeps import page_dep

GridTag = NewType("GridTag", Tag)
GridItemTag = NewType("GridItemTag", Tag)


def grid(
    *args: GridItemTag | CardTag | TagChild | TagAttrs,
    n_rows: int = 1,
    n_cols: int = 2,
    align_items: str = "stretch",
    **kwargs: TagAttrValue,
) -> GridTag:
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

    return GridTag(
        Tag(
            "shiny-grid",
            page_dep(),
            *args,
            _add_ws=True,
            nRows=n_rows,
            nCols=n_cols,
            alignItems=align_items,
            **kwargs,
        )
    )


def grid_item(
    *args: TagChild | TagAttrs,
    col_width: int = 1,
    row_height: int = 1,
    card_styled: bool = True,
    **kwargs: TagAttrValue,
) -> GridItemTag:
    """
    A element to be placed on a grid defined by shinycomponent.grid.

    Parameters
    ----------
    *args
        Child elements to this tag.
    col_width
        The width of the grid item in columns of the enclosing grid. Defaults to 1.
    row_height
        The height of the grid item in rows of the enclosing grid. Defaults to 1.
    card_styled
        Whether to wrap children in a card (i.e. `shinycomponent.card()`). Defaults to
        True. Currently cant be disabled.
    **kwargs
        Attributes passed onto the element tag.

    Returns
    -------
    An element of the requested size in the next available section of the grid where it
    will fit.

    See Also
    --------
    ~shinycomponent.card ~shinycomponent.grid ~htmltools.Tag
    """

    return GridItemTag(
        Tag(
            "shiny-grid-item",
            page_dep(),
            *args,
            colWidth=col_width,
            rowHeight=row_height,
            cardStyled=card_styled,
            _add_ws=True,
            **kwargs,
        )
    )
