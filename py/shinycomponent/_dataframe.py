from __future__ import annotations

import json
from pathlib import PurePath
from typing import TYPE_CHECKING, Optional

import shiny.experimental as x
from htmltools import HTMLDependency, Tag, tags
from shiny._namespaces import resolve_id

from . import __version__
from ._render_dataframe import data_frame

if TYPE_CHECKING:
    import pandas as pd


def output_data_frame(
    id: Optional[str] = None,
    *,
    data: Optional[pd.DataFrame] = None,
) -> Tag:
    """
    Create a output container for a data frame.

    Parameters
    ----------
    id
        An input id.

    data
        An optional Pandas data frame.

    Returns
    -------
    :
        A UI element.
    """

    res = x.ui.as_fillable_container(
        x.ui.as_fill_item(
            Tag(
                "shiny-data-frame",
                dataframe_dep(),
                id=resolve_id(id) if id is not None else None,
            ),
        )
    )

    if data is not None:

        @data_frame
        def data_fn() -> pd.DataFrame:
            return data

        res.children.append(
            tags.script(json.dumps(data_fn()), type="application/json", class_="data"),
        )

    return res


www_path = PurePath(__file__).parent / "www"


def dataframe_dep() -> HTMLDependency:
    return HTMLDependency(
        name="data-frame",
        version=__version__,
        source={
            "package": "shinycomponent",
            "subdir": str(www_path),
        },
        script=[
            {"src": "dataframe.js", "type": "module"},
        ],
    )
