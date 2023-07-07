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
    *args: TagChild | TagAttrs,
    name: str,
    icon: Optional[str] = None,
    **kwargs: TagAttrValue,
) -> Tag:
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

    return Tag(
        "shiny-tab", page_dep(), *args, name=name, icon=icon, _add_ws=True, **kwargs
    )


def tab_label(
    *args: TagChild | TagAttrs,
    **kwargs: TagAttrValue,
) -> Tag:
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
    return Tag("tab-label", page_dep(), *args, _add_ws=True, **kwargs)


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
