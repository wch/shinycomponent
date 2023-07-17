local scUtils = require "scUtils"

-- In order to allow markdown in the arguments for shortcodes we need will need
-- to run it through the pandoc parser. This will eventually be in the quarto
-- package, but for now we can polyfill it here
---@param str string
---@return pandoc.List
local function markdownToInlines(str)
  if str then
    local doc = pandoc.read(str)
    return doc.blocks[1].content
  else
    return pandoc.List()
  end
end

-- We do lots of checking for empty strings, so this just makes it a bit easier
-- to read
---@param value string
---@return boolean
local function isNonEmptyString(value)
  if type(value) == "string" and value ~= "" then
    return true
  else
    return false
  end
end

-- Convenience function to create a span with contents processed as markdown and
--with a slot parameter provided. Used in custom elements where slots are used
--to place children in specific places
---@param contents string
---@param slot string
---@return pandoc.Span
local function slottedSpan(contents, slot)
  return pandoc.Span(markdownToInlines(contents), { slot = slot })
end

-- Attempt to detect if the user has passed in an icon id in for form required by iconify. This is a string of the form
-- <icon-pack>:<icon-name> where <icon-pack> is the name of the icon pack and <icon-name> is the name of the icon.
---@param str string
---@return boolean
local function matchesIconPattern(str)
  return isNonEmptyString(str) and string.match(str, "^%a+%-?%a*:%a+%-?%a*$") ~= nil
end

return {
  ['valuebox'] = function(args, kwargs, meta)
    quarto.doc.add_html_dependency(scUtils.scHtmlDep)

    local backgroundColor = type(kwargs.bg) == "string" and kwargs.bg or "brand"
    -- Check to see if the value of kwargs.icon is a string indicating an icon id. These are given in the pattern
    -- <icon-pack>:<icon-name> so we can just check with a simple string match.
    local iconIsId = matchesIconPattern(kwargs.icon)

    local openTag = "<value-box bg='" .. backgroundColor .. "'"
    if iconIsId then
      openTag = openTag .. " icon='" .. kwargs.icon .. "'"
    end
    openTag = openTag .. ">"


    local contents = { pandoc.RawInline("html", openTag) }

    if isNonEmptyString(kwargs.title) then
      table.insert(contents, slottedSpan(kwargs.title, "title"))
    end

    if isNonEmptyString(kwargs.value) then
      table.insert(contents, slottedSpan(kwargs.value, "value"))
    end

    if isNonEmptyString(kwargs.subvalue) then
      table.insert(contents, slottedSpan(kwargs.subvalue, "subvalue"))
    end

    -- If the iconIsId value is false then add the icon as a span with the slot attribute set to "icon". This will
    -- cause the icon to be rendered as a child of the value-box element.
    if not iconIsId and isNonEmptyString(kwargs.icon) then
      table.insert(contents, pandoc.Span(markdownToInlines(kwargs.icon), { slot = "icon" }))
    end

    table.insert(contents, pandoc.RawInline("html", "</value-box>"))

    return pandoc.Plain(contents)
  end
}
