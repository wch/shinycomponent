from __future__ import annotations

__all__ = (
    "input_checkbox",
    "input_number",
    "input_text",
    "split_panel",
)

from pathlib import PurePath
from typing import Optional

from htmltools import HTMLDependency, Tag, TagAttrs, TagAttrValue, TagChild, tags

from . import __version__
from ._htmldeps import open_props_dep
from ._utils import attr_to_escaped_json


def split_panel(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    return Tag("forge-split-panel", forge_dep(), *args, _add_ws=_add_ws, **kwargs)


def input_checkbox(
    id: str,
    label: TagChild,
    *args: TagChild | TagAttrs,
    _add_ws: bool = True,
    **kwargs: TagAttrValue,
) -> Tag:
    return Tag(
        "forge-input-checkbox",
        forge_dep(),
        label if (label is not None) else None,
        *args,
        id=id,
        _add_ws=_add_ws,
        **kwargs,
    )


def input_checkbox_group(
    id: str,
    label: TagChild,
    choices: list[str],
    *args: TagChild | TagAttrs,
    selected: Optional[str | list[str]] = None,
    _add_ws: bool = True,
    **kwargs: TagAttrValue,
) -> Tag:
    return Tag(
        "forge-input-checkbox-group",
        forge_dep(),
        label if (label is not None) else None,
        *args,
        id=id,
        choices=attr_to_escaped_json(choices),
        selected=attr_to_escaped_json(selected) if (selected is not None) else None,
        _add_ws=_add_ws,
        **kwargs,
    )


def input_switch(
    id: str,
    label: TagChild,
    *args: TagChild | TagAttrs,
    _add_ws: bool = True,
    **kwargs: TagAttrValue,
) -> Tag:
    return Tag(
        "forge-input-switch",
        forge_dep(),
        label if (label is not None) else None,
        *args,
        id=id,
        _add_ws=_add_ws,
        **kwargs,
    )


def input_text(
    id: str,
    label: TagChild,
    *args: TagChild | TagAttrs,
    _add_ws: bool = True,
    **kwargs: TagAttrValue,
) -> Tag:
    return Tag(
        "forge-input-text",
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
        "forge-input-number",
        forge_dep(),
        tags.div(label, slot="label") if (label is not None) else None,
        *args,
        id=id,
        _add_ws=_add_ws,
        **kwargs,
    )


def input_select(
    id: str,
    label: str | None,
    choices: list[str],
    *args: TagChild | TagAttrs,
    selected: Optional[str | list[str]] = None,
    _add_ws: bool = True,
    **kwargs: TagAttrValue,
) -> Tag:
    return Tag(
        "forge-input-select",
        forge_dep(),
        label=label,
        *args,
        id=id,
        choices=attr_to_escaped_json(choices),
        selected=selected,
        _add_ws=_add_ws,
        **kwargs,
    )


ex_www_path = PurePath(__file__).parent / "www"


def forge_dep() -> list[HTMLDependency]:
    return [
        HTMLDependency(
            name="forge",
            version=__version__,
            source={
                "package": "shinycomponent",
                "subdir": str(ex_www_path),
            },
            stylesheet=[
                {"href": "forge/index.css"},
                # TODO: Fix props so that this won't duplicate the CSS from page_deps().
                {"href": "components.css"},
            ],
            script={"src": "forge/index.js", "type": "module"},
        ),
        open_props_dep(),
    ]
