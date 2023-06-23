component_dep <- function() {
  tagList(
    open_props_theme_dep(),
    htmlDependency(
      name = "shinycomponent",
      version = as.character(packageVersion("shinycomponent")),
      src = system.file(package = "shinycomponent", "www"),
      script = list(src = "components.js", type = "module")
    )
  )
}

open_props_theme_dep <- function() {
  tagList(
    open_props_dep(),
    htmlDependency(
      name = "open-props-theme",
      version = as.character(packageVersion("shinycomponent")),
      src = system.file(package = "shinycomponent", "www"),
      stylesheet = "shiny-theme.css"
    )
  )
}

open_props_dep <- function() {
  htmlDependency(
    name = "open-props",
    version = as.character(packageVersion("shinycomponent")),
    src = system.file(package = "shinycomponent", "www"),
    stylesheet = "open-props.min.css"
  )
}

forge_dep <- function() {
  tagList(
    open_props_theme_dep(),
    htmlDependency(
      name = "forge",
      version = as.character(packageVersion("shinycomponent")),
      src = system.file(package = "shinycomponent", "www"),
      script = list(src = "forge.js", type = "module")
    )
  )
}
