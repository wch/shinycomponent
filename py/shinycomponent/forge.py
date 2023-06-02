from __future__ import annotations

__all__ = ("split_panel",)

from pathlib import PurePath

from htmltools import HTMLDependency, Tag, TagAttrs, TagAttrValue, TagChild, tags

from . import __version__


def split_panel(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    return Tag("forge-split-panel", forge_dep(), *args, _add_ws=_add_ws, **kwargs)


def input_text(
    id: str,
    label: TagChild,
    *args: TagChild | TagAttrs,
    _add_ws: bool = True,
    **kwargs: TagAttrValue,
) -> Tag:
    return Tag(
        "forge-text-input",
        forge_dep(),
        tags.div(label, slot="label") if (label is not None) else None,
        *args,
        id=id,
        _add_ws=_add_ws,
        **kwargs,
    )


def input_number(
    id: str,
    label: TagChild,
    *args: TagChild | TagAttrs,
    _add_ws: bool = True,
    **kwargs: TagAttrValue,
) -> Tag:
    return Tag(
        "forge-number-input",
        forge_dep(),
        tags.div(label, slot="label") if (label is not None) else None,
        *args,
        id=id,
        _add_ws=_add_ws,
        **kwargs,
    )


ex_www_path = PurePath(__file__).parent / "www" / "forge"


def forge_dep() -> HTMLDependency:
    return HTMLDependency(
        name="forge",
        version=__version__,
        source={
            "package": "shinycomponent",
            "subdir": str(ex_www_path),
        },
        stylesheet={"href": "index.css"},
        script={"src": "index.js", "type": "module"},
    )
