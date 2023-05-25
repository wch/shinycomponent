component_dep <- function() {
  htmlDependency(
    name = "shinycomponent",
    version = as.character(packageVersion("shinycomponent")),
    src = system.file(package = "shinycomponent", "www"),
    stylesheet = "open-props.min.css",
    script = list(src = "components.js", type = "module")
  )
}
