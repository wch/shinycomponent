from __future__ import annotations

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild

from ._htmldeps import page_dep

# Sidebar Python Function


def sidebar(
    *args: TagChild | TagAttrs, open_width_px: int = 320, **kwargs: TagAttrValue
) -> Tag:
    """
    Collapsible sidebar for use in dashboards and cards.

    Parameters
    ----------
    *args : Union[TagChild, TagAttrs]
        Child elements to this tag.
    open_width_px : int, optional
        The width of the sidebar when it is open, in pixels, by default 320.
    **kwargs : Dict[str, TagAttrValue]
        Attributes to this tag.

    Returns
    -------
    Tag representing a collapsible sidebar.

    See Also
    --------
    ~shinycomponent.dashboard
    ~shinycomponent.card
    ~htmltools.Tag
    """
    return Tag(
        "shiny-sidebar",
        page_dep(),
        *args,
        _add_ws=False,
        openWidthPx=open_width_px,
        **kwargs,
    )


def icon_section(
    *args: TagChild | TagAttrs,
    icon: str | Tag,
    **kwargs: TagAttrValue,
) -> Tag:
    """
    A section with a left-side icon. Can be paired with sidebar to create a sidebar that
    will collapse to icons


    Parameters
    ----------
    *args
        The contents of the section. E.g. inputs and text.
    icon
        The icon to display on the left side of the section. Can be a representing an
        icon available from the [iconify icons list](https://icon-sets.iconify.design/)
        or an abritrary tag. (Try and make sure the tag is simple and narrow or else
        overflow will happen)
    **kwargs
        Additional attributes passed to the element

    Returns
    -------
    Section with left-side icon

    See Also
    --------
    ~shinycomponent.sidebar
    ~shinycomponent.icon
    ~shinycomponent.dashboard
    ~htmltools.Tag
    """

    # If icon is a string, we just pass it as the property icon and let the component do
    # the work. If it's a tag, we need to place it as a child with the slot attribute of
    # "icon"
    if isinstance(icon, str):
        kwargs["icon"] = icon
    else:
        icon.attrs["slot"] = "icon"
        args = (icon, *args)

    return Tag("shiny-section", page_dep(), *args, _add_ws=True, **kwargs)
