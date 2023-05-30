
#' @export
m3_slider <- function(id, ...) {
  tag("m3-slider", list(id = id, m3_dep(), ...))
}


m3_dep <- function() {
  htmlDependency(
    name = "material3",
    version = as.character(packageVersion("shinycomponent")),
    src = system.file(package = "shinycomponent", "www", "m3"),
    script = list(src = "index.js", type = "module")
  )
}
