from __future__ import annotations

from typing import NewType, Optional

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild, tags

from ._htmldeps import page_dep
from ._layout_elements import FooterTag, HeaderTag, SidebarTag
from ._tabs import TabTag
from ._utils import add_navigation_slots

DashboardTag = NewType("DashboardTag", Tag)


def dashboard(
    *args: SidebarTag | HeaderTag | FooterTag | TabTag | TagChild | TagAttrs,
    dynamic_height: bool = False,
    selected_tab_index: int = 0,
    sidebar_nav: bool = False,
    no_flex: bool = False,
    before_navigation: Optional[str | Tag] = None,
    after_navigation: Optional[str | Tag] = None,
    **kwargs: TagAttrValue,
) -> DashboardTag:
    """
    A dashboard layout that can take any combination of a sidebar (with `sidebar()`) and
    header or footer. If `tab()`s are included, they will be reflected in the header.

    Parameters
    ----------
    `*args`
        Child elements to this tag. Special children include `shinycomponent.header()`
        and `shinycomponent.footer()` for adding a header and footer,
        `shinycomponent.sidebar()` for adding a sidebar, and `shinycomponent.tab()` for
        adding a tabs.
    `dynamic_height`
        Whether the dashboard should have dynamic height. If set to False (the default)
        then the dashboard will stretch to fit the vertical height of the browser
        window.
    `selected_tab_index`
        The index of the selected tab. Only used if the dashboard has tabs.
    `sidebar_nav`
        Whether the dashboard should have sidebar navigation. Only used if the dashboard
        has tabs.
    `no_flex`
        Should the contents of the dashboard take their natural size instead of flexing to
        fill remaining space in the dashboard?
    `before_navigation`
        Content to be placed before (i.e. left in normal top-navigation mode and top if
        `sidebar_nav` is `True`) the navigation section of the dashboard. This
        can be a string or a Tag. _Advanced:_ If you want to include content here
        without using the named argument you can place any tag in the body with the
        attribute of `slot="before_navigation"` and it will have the same result.
    `after_navigation`
        Content to be placed after (i.e. right in normal top-navigation mode and bottom
        if `sidebar_nav` is `True`) the navigation section of the dashboard. This
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
    ~shinycomponent.header
    ~shinycomponent.footer
    ~shinycomponent.sidebar
    ~shinycomponent.tab
    """

    return DashboardTag(
        Tag(
            "shiny-dashboard",
            page_dep(),
            *add_navigation_slots(args, before_navigation, after_navigation),
            _add_ws=False,
            dynamic_height=dynamic_height,
            no_flex=no_flex,
            selected_tab_index=selected_tab_index,
            sidebar_nav=sidebar_nav,
            **kwargs,
        )
    )


def page_dashboard(
    *args: SidebarTag | HeaderTag | FooterTag | TabTag | TagChild | TagAttrs,
    title: Optional[str] = None,
    lang: Optional[str] = None,
    dynamic_height: bool = False,
    selected_tab_index: int = 0,
    sidebar_nav: bool = False,
    no_flex: bool = False,
    before_navigation: Optional[str | Tag] = None,
    after_navigation: Optional[str | Tag] = None,
) -> Tag:
    """
    Dashboard layout for a Shiny app.

    Parameters
    ----------
    `*args:`
        Child tags or attributes to include in the body of the page. If `sc.tab` elements are included,
        tab-based navigation will be enabled. If no `sc.tab` elements are included, then no tabs will be displayed.
    `title` (Optional[str]):
        The title of the page.
    `lang` (Optional[str]):
        The language of the page.
    `dynamic_height`
        Whether the dashboard should have dynamic height. If set to False (the default)
        then the dashboard will stretch to fit the vertical height of the browser
        window.
    `selected_tab_index`
        The index of the selected tab. Only used if the dashboard has tabs.
    `sidebar_nav`
        Whether the dashboard should have sidebar navigation. Only used if the dashboard
        has tabs.
    `no_flex`
        Should the contents of the dashboard take their natural size instead of flexing to
        fill remaining space in the dashboard?
    `before_navigation`
        Content to be placed before (i.e. left in normal top-navigation mode and top if
        `sidebar_nav` is `True`) the navigation section of the dashboard. This
        can be a string or a Tag. _Advanced:_ If you want to include content here
        without using the named argument you can place any tag in the body with the
        attribute of `slot="before_navigation"` and it will have the same result.
    `after_navigation`
        Content to be placed after (i.e. right in normal top-navigation mode and bottom
        if `sidebar_nav` is `True`) the navigation section of the dashboard. This
        can be a string or a Tag. _Advanced:_ If you want to include content here
        without using the named argument you can place any tag in the body with the
        attribute of `slot="after_navigation"` and it will have the same result.

    Returns
    -------
    The HTML page with a dashboard layout.

    See Also
    --------
    ~shinycomponent.header
    ~shinycomponent.footer
    ~shinycomponent.sidebar
    ~shinycomponent.tab
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
                sidebar_nav=sidebar_nav,
                no_flex=no_flex,
                before_navigation=before_navigation,
                after_navigation=after_navigation,
            )
        ),
        page_dep(),
        lang=lang,
    )


def page_sidebar_nav(
    *args: SidebarTag | HeaderTag | FooterTag | TabTag | TagChild | TagAttrs,
    title: Optional[str] = None,
    lang: Optional[str] = None,
    dynamic_height: bool = False,
    selected_tab_index: int = 0,
    no_flex: bool = False,
    before_navigation: Optional[str | Tag] = None,
    after_navigation: Optional[str | Tag] = None,
) -> Tag:
    """
    Dashboard layout with sidebar navigation. This is the same as `page_dashboard`
    with `sidebar_nav` set to `True`.

    Parameters
    ----------
    `*args:`
        Child tags or attributes to include in the body of the page. If `sc.tab`
        elements are included, tab-based navigation will be enabled. If no `sc.tab`
        elements are included, then no tabs will be displayed.
    `title` (Optional[str]):
        The title of the page.
    `lang` (Optional[str]):
        The language of the page.
    `dynamic_height`
        Whether the dashboard should have dynamic height. If set to False (the default)
        then the dashboard will stretch to fit the vertical height of the browser
        window.
    `selected_tab_index`
        The index of the selected tab. Only used if the dashboard has tabs.
    `no_flex`
        Should the contents of the dashboard take their natural size instead of flexing
        to fill remaining space in the dashboard?
    `before_navigation`
        Content to be placed before (i.e. left in normal top-navigation mode and top if
        `sidebar_nav` is `True`) the navigation section of the dashboard. This can be a
        string or a Tag. _Advanced:_ If you want to include content here without using
        the named argument you can place any tag in the body with the attribute of
        `slot="before_navigation"` and it will have the same result.
    `after_navigation`
        Content to be placed after (i.e. right in normal top-navigation mode and bottom
        if `sidebar_nav` is `True`) the navigation section of the dashboard. This can be
        a string or a Tag. _Advanced:_ If you want to include content here without using
        the named argument you can place any tag in the body with the attribute of
        `slot="after_navigation"` and it will have the same result.

    Returns
    -------
    The HTML page with a dashboard layout and support for tabs on the left side

    See Also
    --------
    ~shinycomponent.page_dashboard
    ~shinycomponent.header
    ~shinycomponent.footer
    ~shinycomponent.tab
    ~shinycomponent.sidebar
    ~htmltools.Tag

    """
    return page_dashboard(
        *args,
        title=title,
        lang=lang,
        dynamic_height=dynamic_height,
        no_flex=no_flex,
        selected_tab_index=selected_tab_index,
        sidebar_nav=True,
        before_navigation=before_navigation,
        after_navigation=after_navigation,
    )
