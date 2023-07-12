local function ensureHtmlDeps()
  quarto.doc.add_html_dependency({
    name = 'shinycomponent',
    version = '0.1.0',
    scripts = {{path='assets/components.js'}},
    stylesheets = {'assets/open-props.min.css', 'assets/shiny-theme.css'}
  })
end


return {
  {
    -- This needs to be top level nested so we know it runs before the other
    -- filters and thus lets us know that we're in dashboard mode as set by the
    -- template
    Meta = function(meta)
      ensureHtmlDeps()
    end,

    Pandoc = function(doc)

      local blocks = pandoc.List()
      doc.blocks = pandoc.structure.make_sections(doc.blocks)


      quarto.utils.dump(doc.blocks)
      return doc
    end
  },
  {
    RawBlock= function(el)
      print("Raw block content", el.text)
      if el.format == "html" and el.text:match("<forge%-") then
        print("Found dark mode switch")
        quarto.doc.add_html_dependency({
          name = 'shinycomponent-forge',
          version = '0.1.0',
          scripts = {{path='assets/forge.js'}}
        })
      end
    end,
    Div=function(el)
      if el.classes:includes("sc-grid") then

        ensureHtmlDeps()

        -- Convert attributes into string with format: "key1=value1;key2=value2"
        local openTag = "<shiny-grid "
        for k, v in pairs(el.attributes) do
          openTag = openTag .. k .. "=" .. v .. " "
        end

        openTag = openTag .. ">"

        -- Make a shiny-grid opening tag with attributes
        local children = el.content
        children:insert(1, pandoc.RawBlock("html", openTag))
        children:insert(pandoc.RawBlock("html", "</shiny-grid>"))

        return el
      end

    end
  }
}


