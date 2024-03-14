from __future__ import annotations

__all__ = (
    "output_classification_label",
    "render_classification_label",
)

import json
from pathlib import PurePath
from typing import Any, Awaitable, Callable, Optional

from htmltools import HTML, HTMLDependency, Tag, TagAttrValue, html_escape
from shiny.render.renderer import Jsonifiable, Renderer, ValueFn

from . import __version__

# from .._docstring import add_example
# from .._namespaces import resolve_id


def output_classification_label(
    id: str,
    *,
    value: Optional[dict[str, float]] = None,
    sort: Optional[bool] = None,
    _add_ws: bool = True,
    **kwargs: TagAttrValue,
) -> Tag:
    return Tag(
        "shiny-classification-label",
        ml_dep(),
        id=id,
        value=attr_to_escaped_json(value) if value is not None else None,
        sort=bool_to_num(sort),
        _add_ws=_add_ws,
        **kwargs,
    )


def attr_to_escaped_json(x: object) -> str:
    res = json.dumps(x)
    res = html_escape(res, attr=True)
    return HTML(res)


def bool_to_num(x: bool | None) -> int | None:
    if x is None:
        return None
    if x:
        return 1
    else:
        return 0


www_path = PurePath(__file__).parent / "www"


def ml_dep() -> HTMLDependency:
    return HTMLDependency(
        name="shiny-ml-components",
        version=__version__,
        source={
            "package": "shinycomponent",
            "subdir": str(www_path),
        },
        script={"src": "ml.js", "type": "module"},
    )


# ======================================================================================
# RenderClassificationLabel
# ======================================================================================

ClassificationData = dict[str, float]


RenderClassificationLabelFunc = Callable[[], "ClassificationData | None"]
RenderClassificationLabelFuncAsync = Callable[
    [], Awaitable["ClassificationData | None"]
]


class render_classification_label(Renderer[ClassificationData]):
    def auto_output_ui(self) -> Tag:
        kwargs: dict[str, Any] = {}
        # set_kwargs_value(kwargs, "inline", inline, self.inline)

        return output_classification_label(self.output_id, **kwargs)

    def __init__(
        self,
        _fn: Optional[ValueFn[ClassificationData]] = None,
        *,
        inline: bool = False,
    ) -> None:
        super().__init__(_fn)
        self.inline: bool = inline

    async def transform(self, value: ClassificationData) -> Jsonifiable:
        return str(value)
