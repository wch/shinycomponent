from typing import Optional

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild

from ._htmldeps import page_dep

# Card Python Function


def card(
    *args: TagChild | TagAttrs,
    height: Optional[str] = None,
    no_fill: bool = False,
    center_content: bool = False,
    **kwargs: TagAttrValue
) -> Tag:
    """
    A card component with flexible content sizing and optional header and footer support.

    Parameters
    ----------
    *args
        Child elements to this tag. Special children include `shinycomponent.card_header()` and `shinycomponent.card_footer()` for adding a header and footer to card.
    height
        The height of the card. If a number is used, the height wil be set to that
        number in pixels. If "content" is used, then the card will take the minimum
        height needed to contain all the children (aka typical block-layout
        behavior). This value is typically left unset and the card is allowed to to
        sized by it's containing environment.
    no_fill
        Should the contents of the card take their natural size instead of filling remaining space in the card?
    center_content
        Whether the content of the card should be centered or not.
    **kwargs
        Attributes passed along to html element.


    Customizing Styles
    ------------------
    The following css-variables can be used to customize the style of the card header:
        - `--card-padding` - The padding of the card.
        - `--card-radius` - The border radius of the card.
        - `--child-radius` - The border radius of the card's children. Defaults to nothing
        - `--card-h` - The height of the card. Typically set by the `height` attribute instead of this variable.
        - `--spacing -` The spacing between elements in the card.
        - `--card-shadow` - The shadow of the card.
        - `--card-bg` - The surface color of the card.

    Returns
    -------
    Card element

    See Also
    --------
    ~shinycomponent.card_header
    ~shinycomponent.card_footer
    ~shinycomponent.grid_item
    ~htmltools.Tag
    """

    return Tag(
        "shiny-card",
        page_dep(),
        *args,
        height=height,
        noFill=no_fill,
        centerContent=center_content,
        _add_ws=True,
        **kwargs
    )


# Card Header Python Function
def card_header(*args: TagChild | TagAttrs, **kwargs: TagAttrValue) -> Tag:
    """
    A header for a card component. Sticks to top of cards defined with `shinycomponent.card()`.

    Parameters
    ----------
    *args
        Child elements to this tag.
    **kwargs
        Attributes passed along to html element.

    Returns
    -------
    Tag element

    See Also
    --------
    ~shinycomponent.card
    ~shinycomponent.card_footer
    ~htmltools.Tag
    """
    return Tag("shiny-card-header", page_dep(), *args, _add_ws=True, **kwargs)


# Card Footer Python Function
def card_footer(*args: TagChild | TagAttrs, **kwargs: TagAttrValue) -> Tag:
    """
    A footer for a card component. Sticks to bottom of cards defined with `shinycomponent.card()`.

    Parameters
    ----------
    *args
        Child elements to this tag.
    **kwargs
        Attributes passed along to html element.

    Returns
    -------
    Tag element

    See Also
    --------
    ~shinycomponent.card
    ~shinycomponent.card_header
    ~htmltools.Tag
    """
    return Tag("shiny-card-footer", page_dep(), *args, _add_ws=True, **kwargs)
