local scUtils = require "scUtils"

return {
  {
    -- This needs to be top level nested so we know it runs before the other
    -- filters and thus lets us know that we're in dashboard mode as set by the
    -- template
    Meta = function(meta)
      -- ensureHtmlDeps()
    end,

    -- Pandoc = function(doc)
    --   local blocks = pandoc.List()
    --   doc.blocks = pandoc.structure.make_sections(doc.blocks)
    --   return doc
    -- end
  },
  {
    -- These rawblock filters are used to catch hand-written html to make sure
    -- we load the right dependencies
    RawBlock = function(el)
      if el.format == "html" and el.text:match("<forge%-") then
        quarto.doc.add_html_dependency(scUtils.forgeHtmlDep)
      end

      if el.format == "html" and el.text:match("<ml%-") then
        quarto.doc.add_html_dependency(scUtils.mlHtmlDep)
      end
    end,
    Div = function(el)
      if el.classes:includes("sc-grid") then
        quarto.doc.add_html_dependency(scUtils.scHtmlDep)
        return scUtils.wrapInCustomElement("shiny-grid", el)
      end
      if el.classes:includes("sc-sidebar") then
        quarto.doc.add_html_dependency(scUtils.scHtmlDep)
        return scUtils.wrapInCustomElement("shiny-sidebar", el)
      end
    end
  }
}
