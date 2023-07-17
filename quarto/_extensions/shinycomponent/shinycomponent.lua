local scUtils = require "scUtils"

local function markdownToInlines(str)
  if str then
    local doc = pandoc.read(str)
    return doc.blocks[1].content
  else
    return pandoc.List()
  end
end

return {
  ['valuebox'] = function(args, kwargs, meta)
    quarto.doc.add_html_dependency(scUtils.scHtmlDep)

    return pandoc.Plain({
      pandoc.RawInline("html", "<value-box bg='purple'>"),
      pandoc.Span(markdownToInlines(kwargs.title), { slot = "title" }),
      pandoc.Span(markdownToInlines(kwargs.value), { slot = "value" }),
      pandoc.Span(markdownToInlines(kwargs.subvalue), { slot = "subvalue" }),
      pandoc.RawInline("html", "</value-box>")
    })
  end
}
