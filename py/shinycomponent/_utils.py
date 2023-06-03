from __future__ import annotations

import json

from htmltools import HTML, html_escape


def attr_to_escaped_json(x: object) -> str:
    res = json.dumps(x)
    res = html_escape(res, attr=True)
    return HTML(res)
