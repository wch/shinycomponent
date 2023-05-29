from __future__ import annotations

import json
from pathlib import PurePath
from typing import TYPE_CHECKING

from htmltools import HTMLDependency, Tag, TagAttrs, TagAttrValue, TagChild, tags

from . import __version__
from ._render_datagrid import data_grid

if TYPE_CHECKING:
    import pandas as pd


def static_data_grid(
    data: pd.DataFrame,
    *args: TagChild | TagAttrs,
    _add_ws: bool = True,
    **kwargs: TagAttrValue,
) -> Tag:
    @data_grid
    def data_fn() -> pd.DataFrame:
        return data

    return Tag(
        "shiny-data-grid-output",
        tags.script(json.dumps(data_fn()), type="application/json", class_="data"),
        datagrid_dep(),
    )


def output_data_grid(id: str) -> Tag:
    # TODO: add resolve_id
    return Tag(
        "shiny-data-grid-output",
        datagrid_dep(),
        id=id,
    )


ex_www_path = PurePath(__file__).parent / "www" / "datagrid"


def datagrid_dep() -> HTMLDependency:
    return HTMLDependency(
        name="data-grid",
        version=__version__,
        source={
            "package": "shinycomponent",
            "subdir": str(ex_www_path),
        },
        script=[
            {"src": "index.js", "type": "module"},
        ],
    )
