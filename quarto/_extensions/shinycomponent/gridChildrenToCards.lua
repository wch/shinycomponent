-- A lua filter used top walk the children of a grid item and turn top level
-- children into cards
return {
  Div = function(el)
    print("Child of grid")
    quarto.utils.dump(el)

    return el
  end
}
