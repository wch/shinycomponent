local function ensureHtmlDeps()
  quarto.doc.add_html_dependency({
    name = 'shinycomponent',
    version = '0.1.0',
    scripts = {'assets/components.js'},
    stylesheets = {'assets/open-props.min.css', 'assets/shiny-theme.css'}
  })
end

return {
  ['shinycomponent'] = function(args, kwargs, meta)
    ensureHtmlDeps()

    return pandoc.Blocks({
      pandoc.RawBlock("html","<value-box bg='purple'>"),
      pandoc.Div(kwargs.title, {slot = "title"}),
      pandoc.Div(kwargs.value, {slot = "value"}),
      pandoc.Div(kwargs.subvalue,{slot = "subvalue"}),
      pandoc.RawBlock("html", "</value-box>")
    })

  end
}
