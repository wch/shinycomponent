#' @importFrom htmltools tag htmlDependency tagList
#' @export
example_number_input <- function(id, ...) {
  contents <- list(id = id, ...)
  tagList(
    component_dep(),
    tag("example-number-input", contents)
  )
}


component_dep <- function() {
  htmlDependency(
    name = "shiny_component",
    version = as.character(packageVersion("shinycomponent")),
    src = system.file(package = "shinycomponent", "www"),
    stylesheet = "open-props.min.css",
    script = list(src = "example-number-input.js", type = "module")
  )
}
