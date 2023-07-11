#' @export
output_classification_label <- function(id, ..., value = NULL, sort = NULL) {
    tag(
      "shiny-classification-label",
      list(
        ml_dep(),
        id = id,
        value = if (!is.null(value)) convert_to_escaped_json(value),
        sort = sort,
        ...
      )
    )
}




#' @importFrom shiny installExprFunction createRenderFunction
#' @export
render_classification_label <- function(
    expr,
  ...,
  env = parent.frame(),
  quoted = FALSE,
  output_args=list()
) {
  func <- installExprFunction(expr, "func", env, quoted, label = "render_classification_label")

  createRenderFunction(
    func,
    function(value, session, name, ...) {
      value
    },
    output_data_frame,
    output_args
  )
}



ml_dep <- function() {
  tagList(
    open_props_theme_dep(),
    htmlDependency(
      name = "shiny-ml-components",
      version = as.character(packageVersion("shinycomponent")),
      src = system.file(package = "shinycomponent", "www"),
      script = list(src = "ml.js", type = "module")
    )
  )
}
