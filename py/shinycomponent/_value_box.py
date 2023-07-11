from __future__ import annotations

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild

from ._htmldeps import page_dep


def value_box(*args: TagChild | TagAttrs, **kwargs: TagAttrValue) -> Tag:
    return Tag("value-box", page_dep(), *args, _add_ws=True, **kwargs)
