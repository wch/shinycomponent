from __future__ import annotations

from typing import NewType, Optional

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild

from ._htmldeps import page_dep
from ._layout_elements import FooterTag, HeaderTag, SidebarTag
from ._utils import add_navigation_slots

TabTag = NewType("TabTag", Tag)


def tab(
    *args: SidebarTag | HeaderTag | FooterTag | TabTag | TagChild | TagAttrs,
    name: str,
    icon: Optional[str] = None,
    selected_tab_index: int = 0,
    sidebar_nav: bool = False,
    no_flex: bool = False,
    before_navigation: Optional[str | Tag] = None,
    after_navigation: Optional[str | Tag] = None,
    **kwargs: TagAttrValue,
) -> TabTag:
    """
    Wrap content in a tab. When this element is used within the main content area of
    `shinycomponent.dashboard()` or `shinycomponent.page_dashboard()`, it will be
    rendered as a tab. The tab will be added to the navigation pane of the dashboard. If
    the tab is selected, the content will be displayed. Otherwise, the content will be
    hidden.

    The default title of the tab is just the string provided by the `name` argument. You
    can also add an icon with the `icon` argument. Alternatively you can use the
    complementary `shinycomponent.tab_label` element to provide a more complex label.
    Note that the id of the tab will still be the `name` value, regardless of what your
    label says.

    Parameters
    ----------
    `*args`
        Child elements, aka the content of the tab. Special children include
        `shinycomponent.header()` and `shinycomponent.footer()` for adding a header and
        footer, `shinycomponent.sidebar()` for adding a sidebar, and
        `shinycomponent.tab()` for adding a tabs to the card.
    `name`
        The name of the tab. This is also used as the id returned when treating the
        tabset as an input.
    `icon`
        Optional icon of the tab. If this is provided the icon will be prefixed to the
        tab label before the name. This will be ignored if a label element is provided
        using `shinycomponent.tab_label`.
    `selected_tab_index`
        The index of the selected tab. Only used if the tab has nested tabs.
    `sidebar_nav`
        Whether the tab should have sidebar navigation. Only used if the tab
        has tabs.
    `no_flex`
        Should the contents of the tab take their natural size instead of flexing to
        fill remaining space in the tab?
    `before_navigation`
        Content to be placed before (i.e. left in normal top-navigation mode and top if
        `sidebar_nav` is `True`) the navigation section of the tab. This
        can be a string or a Tag. _Advanced:_ If you want to include content here
        without using the named argument you can place any tag in the body with the
        attribute of `slot="before_navigation"` and it will have the same result.
    `after_navigation`
        Content to be placed after (i.e. right in normal top-navigation mode and bottom
        if `sidebar_nav` is `True`) the navigation section of the tab. This
        can be a string or a Tag. _Advanced:_ If you want to include content here
        without using the named argument you can place any tag in the body with the
        attribute of `slot="after_navigation"` and it will have the same result.
    `**kwargs`
        Attributes to this tag.

    Returns
    -------
    Tag element that will be selectable in navigation section of enclosing dashboard.

    Example
    -------
    >>> app_ui = sc.page_dashboard(
    >>>     sc.tab(
    >>>         sc.card("Info about elephants"),
    >>>         name="elephant",
    >>>     ),
    >>>     sc.tab(
    >>>         sc.card("Info about giraffes"),
    >>>         name="giraffe",
    >>>     )
    >>> )

    See Also
    --------
    ~shinycomponent.dashboard ~shinycomponent.tab_label ~htmltools.Tag
    """

    return TabTag(
        Tag(
            "shiny-tab",
            page_dep(),
            *add_navigation_slots(args, before_navigation, after_navigation),
            name=name,
            icon=icon,
            no_flex=no_flex,
            sidebar_nav=sidebar_nav,
            selected_tab_index=selected_tab_index,
            _add_ws=True,
            **kwargs,
        )
    )


TabLabelTag = NewType("TabLabelTag", Tag)


def tab_label(
    *args: TagChild | TagAttrs,
    **kwargs: TagAttrValue,
) -> TabLabelTag:
    """
    A custom element representing a label for a tab. Any content put in here will be
    placed next to eachother.

    Parameters
    ----------
    *args : Union[TagChild, TagAttrs]
        Child elements to this tag.
    **kwargs : Dict[str, TagAttrValue]
        Attributes passed along to html element.

    Returns
    -------
    Label that will be used for the tab in the navigation section of the enclosing
    dashboard.

    Example
    -------
    >>> app_ui = sc.page_dashboard(
    >>>     sc.tab(
    >>>         sc.tab_label("🐘"),
    >>>         sc.card("Info about elephants"),
    >>>         name="elephant",
    >>>     ),
    >>>     sc.tab(
    >>>         sc.tab_label("🦒"),
    >>>         sc.card("Info about giraffes"),
    >>>         name="giraffe",
    >>>     )
    >>> )

    See Also
    --------
    ~shinycomponent.tab ~shinycomponent.dashboard
    """
    return TabLabelTag(Tag("tab-label", page_dep(), *args, _add_ws=True, **kwargs))
