from __future__ import annotations

from typing import Optional

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild, tags

from ._htmldeps import page_dep


def dashboard(
    *args: TagChild | TagAttrs,
    dynamic_height: bool = False,
    selected_tab_index: int = 0,
    sidebar_navigation: bool = False,
    **kwargs: TagAttrValue,
) -> Tag:
    """
    A dashboard layout that can take any combination of a sidebar (with `sidebar()`) and
    header or footer. If `tab()`s are included, they will be reflected in the header.

    Parameters
    ----------
    *args
        Child elements to this tag.
    dynamic_height
        Whether the dashboard should have dynamic height. If set to False (the default) then the dashboard will stretch to fit the vertical height of the browser window.
    selected_tab_index
        The index of the selected tab. Only used if the dashboard has tabs.
    sidebar_navigation
        Whether the dashboard should have sidebar navigation. Only used if the dashboard has tabs.
    **kwargs
        Additional named attributes to be added to the HTML element containing the dashboard.

    Returns
    -------
    Tag

    See Also
    --------
    ~shinycomponent.sidebar
    ~htmltools.Tag
    """

    return Tag(
        "shiny-dashboard",
        page_dep(),
        *args,
        _add_ws=False,
        dynamicHeight=dynamic_height,
        selectedTabIndex=selected_tab_index,
        sidebarNavigation=sidebar_navigation,
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
                sidebar_navigation=sidebar_navigation,
            )
        ),
        page_dep(),
        lang=lang,
    )


def tab(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-tab> tag.

    An experimental web-component for creating greeting cards.

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

    return Tag("shiny-tab", page_dep(), *args, _add_ws=_add_ws, **kwargs)


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
