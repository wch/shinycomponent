local function ensureHtmlDeps()
  quarto.doc.add_html_dependency({
    name = 'shinycomponent',
    version = '0.1.0',
    stylesheets = {'assets/components.js', 'assets/open-props.min.css', 'assets/shiny-theme.css'}
  })
end

return {
  ['shinycomponent'] = function(args, kwargs, meta)
    ensureHtmlDeps()
    return pandoc.RawBlock(
      "html",
      "<value-box bg='purple' title='quarto value box' value='42'> </value-box>"
  )
  end
}
