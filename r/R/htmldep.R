component_dep <- function() {
  htmlDependency(
    name = "shinycomponent",
    version = as.character(packageVersion("shinycomponent")),
    src = system.file(package = "shinycomponent", "www"),
    stylesheet = c("open-props.min.css", "components.css"),
    script = list(src = "components.js", type = "module")
  )
}
