
return {
  Div=function(el)
    if el.classes:includes("grid") then
      return pandoc.Div(
        pandoc.Blocks({
          pandoc.Div("I am a grid"),
          pandoc.Div(el.content),
        }),
        pandoc.Attr(el.identifier, el.classes)
      )
    end
  end
}


