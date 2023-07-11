#' @export
output_data_frame <- function(id = NULL, ..., data = NULL) {
  data_tag <- NULL
  if (!is.null(data)) {
    data_tag <- tags$script(
      HTML(toJSON(to_data_frame_format(data, ...), auto_unbox = TRUE)),
      type="application/json",
      class="data"
    )
  }

  tag("shiny-data-frame", list(id = id, dataframe_dep(), data_tag, ...))
}


#' @importFrom shiny installExprFunction createRenderFunction
#' @importFrom jsonlite toJSON
#' @export
render_data_frame <- function(
    expr,
  width = NULL,
  height = NULL,
  row_selection = FALSE,
  column_selection = FALSE,
  cell_selection = FALSE,
  range_selection = FALSE,
  ...,
  env = parent.frame(),
  quoted = FALSE,
  output_args=list()
) {
  func <- installExprFunction(expr, "func", env, quoted, label = "render_data_frame")

  createRenderFunction(
    func,
    function(value, session, name, ...) {
      to_data_frame_format(
        value,
        width = width,
        height = height,
        row_selection = row_selection,
        column_selection = column_selection,
        cell_selection = cell_selection,
        range_selection = range_selection
      )
    },
    output_data_frame,
    output_args
  )
}


to_data_frame_format <- function(
    df,
  ...,
  width = NULL,
  height = "500px",
  style = c("grid", "table"),
  summary = TRUE,
  row_selection_mode = c("none", "single", "multiple")
) {
  row_selection_mode <- match.arg(row_selection_mode)
  style <- match.arg(style)
  nrows <- nrow(df)

  # Convert factor cols to strings. The data frame also becomes a list here.
  df <- lapply(df, function(col) {
    if (is.factor(col)) as.character(col)
    else col
  })

  res <- list(
    columns = names(df),
    index = seq_len(nrows),
    data = .mapply(list, unname(df), NULL),
    options = list(
      width = width,
      height = height,
      row_selection_mode = row_selection_mode,
      style = style
    )
  )

  res
}


dataframe_dep <- function() {
  htmlDependency(
    name = "data-frame",
    version = as.character(packageVersion("shinycomponent")),
    src = system.file(package = "shinycomponent", "www"),
    script = list(src = "dataframe.js", type = "module")
  )
}
