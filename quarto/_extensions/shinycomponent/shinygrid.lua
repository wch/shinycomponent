local scUtils = require "scUtils"


--- @param node pandoc.Node
--- @return pandoc.Image | nil
local extractPlotNode = function(node)
  local isPara = node.tag == "Para"

  if not isPara then
    return nil
  end

  local firstChild = node.content[1]

  if firstChild.tag == nil or firstChild.tag ~= "Image" then
    return nil
  end

  return firstChild
end

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

      -- When we detect a plot node, remove the height and width and tag with
      -- custom attribute so we can make it dynamically resize with css
      if el.classes:includes("cell-output-display") then
        local plotNode = extractPlotNode(el.content[1])

        if (not plotNode) then
          return nil
        end

        -- Mark as a plot node so we can target with css
        el.attributes["data-sc-plot"] = "true"

        -- Remove the width and height attributes so that the plot will be
        plotNode.attributes["width"] = nil
        plotNode.attributes["height"] = nil

        return el
      end
    end,

  }
}