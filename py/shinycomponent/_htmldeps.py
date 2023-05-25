from __future__ import annotations

from pathlib import PurePath

from htmltools import HTMLDependency

from shiny import __version__ as shiny_package_version

ex_www_path = PurePath(__file__).parent / "www/out"


def page_dep() -> HTMLDependency:
    return HTMLDependency(
        name="lit-elements",
        version=shiny_package_version,
        source={
            "package": "shiny",
            "subdir": str(ex_www_path),
        },
        stylesheet={"href": "open-props.min.css"},
        script=[
            {"src": "components.js", "type": "module"},
        ],
    )
