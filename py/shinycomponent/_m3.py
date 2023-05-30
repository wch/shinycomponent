from __future__ import annotations

from pathlib import PurePath

from htmltools import HTMLDependency, Tag, TagAttrs, TagAttrValue, TagChild

from . import __version__


def m3_slider(
    id: str, *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    return Tag("m3-slider", m3_dep(), id=id, *args, _add_ws=_add_ws, **kwargs)


ex_www_path = PurePath(__file__).parent / "www" / "m3"


def m3_dep() -> HTMLDependency:
    return HTMLDependency(
        name="material3",
        version=__version__,
        source={
            "package": "shinycomponent",
            "subdir": str(ex_www_path),
        },
        script=[
            {"src": "index.js", "type": "module"},
        ],
    )
