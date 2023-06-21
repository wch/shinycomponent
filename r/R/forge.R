#' @importFrom htmltools tag htmlDependency tagList tags

#' @export
input_slider <- function(id, ...) {
  tagList(
    forge_dep(),
    tag("forge-input-slider", list(id = id, ...))
  )
}
