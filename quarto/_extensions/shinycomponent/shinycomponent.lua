local function ensureHtmlDeps()
  quarto.doc.add_html_dependency({
    name = 'shinycomponent',
    version = '0.1.0',
    scripts = {'assets/components.js'},
    stylesheets = {'assets/open-props.min.css', 'assets/shiny-theme.css'}
  })
end

return {
  ['valuebox'] = function(args, kwargs, meta)
    ensureHtmlDeps()

    return pandoc.Plain({
      pandoc.RawInline("html","<value-box bg='purple'>"),
      pandoc.Span(kwargs.title, {slot = "title"}),
      pandoc.Span(kwargs.value, {slot = "value"}),
      pandoc.Span(kwargs.subvalue, {slot = "subvalue"}),
      pandoc.RawInline("html", "</value-box>")
    })
  end,

  ['valuebox2'] = function(args, kwargs, meta)
    ensureHtmlDeps()

    return pandoc.Plain({
      pandoc.RawInline("html","<value-box bg='green'>"),
      pandoc.Span(kwargs.title, {slot = "title"}),
      pandoc.Span(kwargs.value, {slot = "value"}),
      pandoc.Span(kwargs.subvalue, {slot = "subvalue"}),
      pandoc.RawInline("html", "</value-box>")
    })
  end
}
