from __future__ import annotations

from pathlib import PurePath

from htmltools import HTMLDependency

from . import __version__

ex_www_path = PurePath(__file__).parent / "www"


def page_dep() -> list[HTMLDependency]:
    return [
        HTMLDependency(
            name="shinycomponent",
            version=__version__,
            source={
                "package": "shinycomponent",
                "subdir": str(ex_www_path),
            },
            stylesheet=[{"href": "components.css"}],
            script=[
                {"src": "components.js", "type": "module"},
            ],
        ),
        open_props_dep(),
    ]


def open_props_dep() -> HTMLDependency:
    return HTMLDependency(
        name="open-props",
        version=__version__,
        source={
            "package": "shinycomponent",
            "subdir": str(ex_www_path),
        },
        stylesheet={"href": "open-props.min.css"},
    )
