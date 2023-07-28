from typing import NewType, Optional

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild, tags

from ._htmldeps import page_dep
from ._layout_elements import FooterTag, HeaderTag, SidebarTag
from ._tabs import TabTag
from ._utils import assign_to_slot

CardTag = NewType("CardTag", Tag)


def card(
    *args: SidebarTag | HeaderTag | FooterTag | TabTag | TagChild | TagAttrs,
    height: Optional[str] = None,
    no_flex: bool = False,
    center_content: bool = False,
    selected_tab_index: int = 0,
    sidebar_nav: bool = False,
    before_navigation: Optional[str | Tag] = None,
    after_navigation: Optional[str | Tag] = None,
    **kwargs: TagAttrValue
) -> CardTag:
    """
    A card component with flexible content sizing and optional header and footer
    support.

    Parameters
    ----------
    `*args`
        Child elements to this tag. Special children include `shinycomponent.header()`
        and `shinycomponent.footer()` for adding a header and footer,
        `shinycomponent.sidebar()` for adding a sidebar, and `shinycomponent.tab()` for
        adding a tabs.
    `height`
        The height of the card. If a number is used, the height wil be set to that
        number in pixels. If "content" is used, then the card will take the minimum
        height needed to contain all the children (aka typical block-layout behavior).
        This value is typically left unset and the card is allowed to to sized by it's
        containing environment.
    `no_flex`
        Should the contents of the card take their natural size instead of flexing to
        fill remaining space in the card?
    `center_content`
        Whether the content of the card should be centered or not.
    `selected_tab_index`
        The index of the selected tab. Only used if the card has tabs.
    `sidebar_nav`
        Whether the card should have sidebar navigation. Only used if the card has tabs.
    `before_navigation`
        Content to be placed before (i.e. left in normal top-navigation mode and top if
        `sidebar_nav` is `True`) the navigation section of the card. This can be a
        string or a Tag. _Advanced:_ If you want to include content here without using
        the named argument you can place any tag in the body with the attribute of
        `slot="before_navigation"` and it will have the same result.
    `after_navigation`
        Content to be placed after (i.e. right in normal top-navigation mode and bottom
        if `sidebar_nav` is `True`) the navigation section of the card. This can be a
        string or a Tag. _Advanced:_ If you want to include content here without using
        the named argument you can place any tag in the body with the attribute of
        `slot="after_navigation"` and it will have the same result.
    `**kwargs`
        Attributes passed along to html element.


    Customizing Styles
    ------------------
    The following css-variables can be used to customize the style of the card header:
        - `--card-padding` - The padding of the card.
        - `--card-radius` - The border radius of the card.
        - `--child-radius` - The border radius of the card's children. Defaults to
          nothing
        - `--card-h` - The height of the card. Typically set by the `height` attribute
          instead of this variable.
        - `--spacing -` The spacing between elements in the card.
        - `--card-shadow` - The shadow of the card.
        - `--card-bg` - The surface color of the card.

    Returns
    -------
    Card element

    See Also
    --------
    ~shinycomponent.header ~shinycomponent.footer ~shinycomponent.grid_item
    ~htmltools.Tag
    """

    # Put before_navigation and after_navigation in the right place if they exist
    if isinstance(before_navigation, str):
        before_nav_slot = tags.div(before_navigation, slot="before_navigation")
        args = (before_nav_slot, *args)

    if isinstance(before_navigation, Tag):
        args = (assign_to_slot(before_navigation, "before_navigation"), *args)

    if isinstance(after_navigation, str):
        after_nav_slot = tags.div(after_navigation, slot="after_navigation")
        args = (*args, after_nav_slot)

    if isinstance(after_navigation, Tag):
        args = (*args, assign_to_slot(after_navigation, "after_navigation"))

    return CardTag(
        Tag(
            "shiny-card",
            page_dep(),
            *args,
            height=height,
            no_flex=no_flex,
            centerContent=center_content,
            selectedTabIndex=selected_tab_index,
            sidebar_nav=sidebar_nav,
            _add_ws=True,
            **kwargs
        )
    )
