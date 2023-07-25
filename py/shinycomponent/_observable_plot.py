from __future__ import annotations

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    import pandas as pd

from htmltools import Tag, TagAttrValue, tags

from ._htmldeps import page_dep


def observable_plot(data: pd.DataFrame, **kwargs: TagAttrValue) -> Tag:
    # Serialize data to a obs-data tag and pass as child
    serialized_data = data.to_json(orient="records")

    # serialize spec to a obs-spec tag and pass as child
    return Tag(
        "observable-plot",
        page_dep(),
        tags.script(serialized_data, slot="data", type="application/json"),
        _add_ws=True,
        **kwargs,
    )
