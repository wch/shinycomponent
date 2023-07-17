-- All of our scripts that we include in this extension/package need the type of
-- module to load properly. This is to make that easier to declare
---@param pathToJs string
---@return pandoc.Meta
local makeModuleScript = function(pathToJs)
  return {
    path = pathToJs,
    attribs = { type = 'module' }
  }
end

return {
  makeModuleScript = makeModuleScript,

  -- Takes a pandoc element and replaces the outer tag with a custom element of
  -- the requested tag
  ---@param tag string
  ---@param el pandoc.Div
  ---@return pandoc.List|nil
  wrapInCustomElement = function(tag, el)
    local openTag = "<" .. tag .. " "
    for k, v in pairs(el.attributes) do
      openTag = openTag .. k .. "=" .. v .. " "
    end

    openTag = openTag .. ">"
    local closeTag = "</" .. tag .. ">"
    local children = el.content
    children:insert(1, pandoc.RawBlock("html", openTag))
    children:insert(pandoc.RawBlock("html", closeTag))
    return children
  end,

  -- Dependencies for the shinycomponent package and its various sub-packages
  mlHtmlDep = {
    name = 'shinycomponent-ml',
    version = '0.1.0',
    scripts = { makeModuleScript('assets/ml.js') }
  },
  forgeHtmlDep = {
    name = 'shinycomponent-forge',
    version = '0.1.0',
    scripts = { makeModuleScript('assets/forge.js') }
  },
  scHtmlDep = {
    name = 'shinycomponent',
    version = '0.1.0',
    scripts = { makeModuleScript('assets/components.js') },
    stylesheets = { 'assets/open-props.min.css', 'assets/shiny-theme.css' }
  }

}
