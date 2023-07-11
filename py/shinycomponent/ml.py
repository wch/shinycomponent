from __future__ import annotations

__all__ = (
    "output_classification_label",
    "render_classification_label",
)

import json
import typing
from typing import Awaitable, Callable, Optional, overload

from htmltools import HTML, HTMLDependency, Tag, TagAttrValue, html_escape
from shiny import _utils
from shiny.render._render import RenderFunction, RenderFunctionAsync

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


def ml_dep() -> HTMLDependency:
    return HTMLDependency(
        name="shiny-ml-components",
        version=__version__,
        source={
            "package": "shiny",
            "subdir": "www/shared/ml",
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


class RenderClassificationLabel(
    RenderFunction["ClassificationData | None", "ClassificationData | None"]
):
    def __init__(self, fn: RenderClassificationLabelFunc) -> None:
        super().__init__(fn)
        # The Render*Async subclass will pass in an async function, but it tells the
        # static type checker that it's synchronous. wrap_async() is smart -- if is
        # passed an async function, it will not change it.
        self._fn: RenderClassificationLabelFuncAsync = _utils.wrap_async(fn)

    def __call__(self) -> ClassificationData | None:
        return _utils.run_coro_sync(self._run())

    async def _run(self) -> ClassificationData | None:
        res = await self._fn()
        if res is None:
            return None
        return res


class RenderClassificationLabelAsync(
    RenderClassificationLabel, RenderFunctionAsync["str | None", "str | None"]
):
    def __init__(self, fn: RenderClassificationLabelFuncAsync) -> None:
        if not _utils.is_async_callable(fn):
            raise TypeError(self.__class__.__name__ + " requires an async function")
        super().__init__(typing.cast(RenderClassificationLabelFunc, fn))

    async def __call__(  # pyright: ignore[reportIncompatibleMethodOverride]
        self,
    ) -> ClassificationData | None:
        return await self._run()


@overload
def render_classification_label(
    fn: RenderClassificationLabelFunc | RenderClassificationLabelFuncAsync,
) -> RenderClassificationLabel:
    ...


@overload
def render_classification_label() -> (
    Callable[
        [RenderClassificationLabelFunc | RenderClassificationLabelFuncAsync],
        RenderClassificationLabel,
    ]
):
    ...


def render_classification_label(
    fn: Optional[
        RenderClassificationLabelFunc | RenderClassificationLabelFuncAsync
    ] = None,
) -> (
    RenderClassificationLabel
    | Callable[
        [RenderClassificationLabelFunc | RenderClassificationLabelFuncAsync],
        RenderClassificationLabel,
    ]
):
    """
    Reactively render text.

    Returns
    -------
    :
        A decorator for a function that returns a string.

    Tip
    ----
    This decorator should be applied **before** the ``@output`` decorator. Also, the
    name of the decorated function (or ``@output(id=...)``) should match the ``id`` of
    a :func:`~shiny.ui.output_text` container (see :func:`~shiny.ui.output_text` for
    example usage).

    See Also
    --------
    ~shiny.ui.output_text
    """

    def wrapper(
        fn: RenderClassificationLabelFunc | RenderClassificationLabelFuncAsync,
    ) -> RenderClassificationLabel:
        if _utils.is_async_callable(fn):
            return RenderClassificationLabelAsync(fn)
        else:
            fn = typing.cast(RenderClassificationLabelFunc, fn)
            return RenderClassificationLabel(fn)

    if fn is None:
        return wrapper
    else:
        return wrapper(fn)
