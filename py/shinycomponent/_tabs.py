from __future__ import annotations

from typing import NewType, Optional

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild

from ._htmldeps import page_dep

TabTag = NewType("TabTag", Tag)


def tab(
    *args: TagChild | TagAttrs,
    name: str,
    icon: Optional[str] = None,
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
    *args : Union[TagChild, TagAttrs]
        Child elements, aka the content of the tab.
    name: str
        The name of the tab. This is also used as the id returned when treating the
        tabset as an input.
    icon: Optional[str]
        Optional icon of the tab. If this is provided the icon will be prefixed to
        the tab label before the name. This will be ignored if a label element is
        provided using `shinycomponent.tab_label`.
    **kwargs : Dict[str, TagAttrValue]
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
    ~shinycomponent.dashboard
    ~shinycomponent.tab_label
    ~htmltools.Tag
    """

    return TabTag(
        Tag(
            "shiny-tab", page_dep(), *args, name=name, icon=icon, _add_ws=True, **kwargs
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
