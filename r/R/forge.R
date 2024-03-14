#' @importFrom htmltools tag htmlDependency tagList tags

#' @export
input_slider <- function(id, label = NULL, ...) {
  tagList(
    forge_dep(),
    tag("forge-input-slider", list(
      id = id,
      if (!is.null(label)) div(label, slot = "label"),
      ...
    ))
  )
}
