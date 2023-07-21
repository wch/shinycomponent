from __future__ import annotations

from typing import Optional

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild, tags

from ._htmldeps import page_dep
from ._utils import assign_to_slot


def dashboard(
    *args: TagChild | TagAttrs,
    dynamic_height: bool = False,
    selected_tab_index: int = 0,
    tabs_on_side: bool = False,
    before_navigation: Optional[str | Tag] = None,
    after_navigation: Optional[str | Tag] = None,
    **kwargs: TagAttrValue,
) -> Tag:
    """
    A dashboard layout that can take any combination of a sidebar (with `sidebar()`) and
    header or footer. If `tab()`s are included, they will be reflected in the header.

    Parameters
    ----------
    `*args`
        Child elements to this tag.
    `dynamic_height`
        Whether the dashboard should have dynamic height. If set to False (the default)
        then the dashboard will stretch to fit the vertical height of the browser
        window.
    `selected_tab_index`
        The index of the selected tab. Only used if the dashboard has tabs.
    `sidebar_navigation`
        Whether the dashboard should have sidebar navigation. Only used if the dashboard
        has tabs.
    `before_navigation`
        Content to be placed before (i.e. left in normal top-navigation mode and top if
        `sidebar_navigation` is `True`) the navigation section of the dashboard. This
        can be a string or a Tag. _Advanced:_ If you want to include content here
        without using the named argument you can place any tag in the body with the
        attribute of `slot="before_navigation"` and it will have the same result.
    `after_navigation`
        Content to be placed after (i.e. right in normal top-navigation mode and bottom
        if `sidebar_navigation` is `True`) the navigation section of the dashboard. This
        can be a string or a Tag. _Advanced:_ If you want to include content here
        without using the named argument you can place any tag in the body with the
        attribute of `slot="after_navigation"` and it will have the same result.
    `**kwargs`
        Additional named attributes to be added to the HTML element containing the
        dashboard.

    Returns
    -------
    Dashboard layout

    See Also
    --------
    ~shinycomponent.sidebar ~htmltools.Tag
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

    return Tag(
        "shiny-dashboard",
        page_dep(),
        *args,
        _add_ws=False,
        dynamicHeight=dynamic_height,
        selectedTabIndex=selected_tab_index,
        tabsOnSide=tabs_on_side,
        **kwargs,
    )


def page_dashboard(
    *args: TagChild | TagAttrs,
    title: Optional[str] = None,
    lang: Optional[str] = None,
    dynamic_height: bool = False,
    selected_tab_index: int = 0,
    sidebar_navigation: bool = False,
) -> Tag:
    """
    Dashboard layout for a Shiny app.

    Parameters
    ----------
    *args:
        Child tags or attributes to include in the body of the page. If `sc.tab` elements are included,
        tab-based navigation will be enabled. If no `sc.tab` elements are included, then no tabs will be displayed.
    title (Optional[str]):
        The title of the page.
    lang (Optional[str]):
        The language of the page.
    dynamic_height (bool):
        Whether the dashboard should have dynamic height. If set to False (the default) then the dashboard
        will stretch to fit the vertical height of the browser window.
    selected_tab_index (int):
        The index of the selected tab. Only used if the dashboard has tabs.
    sidebar_navigation (bool):
        Whether the dashboard should have sidebar navigation. Only used if the dashboard has tabs.

    Returns
    -------
    The HTML page with a dashboard layout.

    See Also
    --------
    ~shinycomponent.sidebar
    ~htmltools.Tag
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
        tags.body(
            dashboard(
                *args,
                dynamic_height=dynamic_height,
                selected_tab_index=selected_tab_index,
                tabs_on_side=sidebar_navigation,
            )
        ),
        page_dep(),
        lang=lang,
    )


def dashboard_footer(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    A footer for a dashboard. Sticks to bottom of dashboard layouts defined with
    `shinycomponent.page_dashboard()` or `shinycomponent.dashboard()`.

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
    ~shinycomponent.dashboard
    ~shinycomponent.page_dashboard
    ~htmltools.Tag
    """
    return Tag("shiny-dashboard-footer", page_dep(), *args, _add_ws=_add_ws, **kwargs)


def dashboard_header(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    A header for a dashboard. Sticks to top of dashboard layouts defined with
    `shinycomponent.page_dashboard()` or `shinycomponent.dashboard()`.

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
    ~shinycomponent.dashboard
    ~shinycomponent.page_dashboard
    ~htmltools.Tag
    """
    return Tag("div", page_dep(), *args, slot="header", _add_ws=_add_ws, **kwargs)
