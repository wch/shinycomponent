from __future__ import annotations

from pathlib import PurePath

from htmltools import HTMLDependency

from . import __version__

www_path = PurePath(__file__).parent / "www"


def page_dep() -> list[HTMLDependency]:
    return [
        *open_props_theme_dep(),
        HTMLDependency(
            name="shinycomponent",
            version=__version__,
            source={"package": "shinycomponent", "subdir": str(www_path)},
            script={"src": "components.js", "type": "module"},
        ),
    ]


def open_props_theme_dep() -> list[HTMLDependency]:
    return [
        open_props_dep(),
        HTMLDependency(
            name="open-props-theme",
            version=__version__,
            source={"package": "shinycomponent", "subdir": str(www_path)},
            stylesheet={"href": "shiny-theme.css"},
        ),
    ]


def open_props_dep() -> HTMLDependency:
    return HTMLDependency(
        name="open-props",
        version=__version__,
        source={"package": "shinycomponent", "subdir": str(www_path)},
        stylesheet={"href": "open-props.min.css"},
    )
