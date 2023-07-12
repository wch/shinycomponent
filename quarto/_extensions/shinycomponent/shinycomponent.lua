local function ensureHtmlDeps()
  quarto.doc.add_html_dependency({
    name = 'shinycomponent',
    version = '0.1.0',
    scripts = {'assets/components.js'},
    stylesheets = {'assets/open-props.min.css', 'assets/shiny-theme.css'}
  })
end

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
    ensureHtmlDeps()

    return pandoc.Plain({
      pandoc.RawInline("html","<value-box bg='purple'>"),
      pandoc.Span(markdownToInlines(kwargs.title), {slot = "title"}),
      pandoc.Span(markdownToInlines(kwargs.value), {slot = "value"}),
      pandoc.Span(markdownToInlines(kwargs.subvalue), {slot = "subvalue"}),
      pandoc.RawInline("html", "</value-box>")
    })
  end
}
