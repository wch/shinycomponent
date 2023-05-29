#' @export
static_data_grid <- function(data, ...) {
  tag(
    "shiny-data-grid-output",
    list(
      data_grid_dep(),
      tags$script(
        HTML(toJSON(to_data_grid_format(data, ...), auto_unbox = TRUE)),
        type="application/json",
        class="data"
      )
    )
  )
}


#' @export
output_data_grid <- function(id, ...) {
  tag("shiny-data-grid-output", list(id = id, data_grid_dep(), ...))
}


#' @importFrom shiny installExprFunction createRenderFunction
#' @importFrom jsonlite toJSON
#' @export
render_data_grid <- function(
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
  func <- installExprFunction(expr, "func", env, quoted, label = "render_data_grid")

  createRenderFunction(
    func,
    function(value, session, name, ...) {
      to_data_grid_format(
        value,
        width = width,
        height = height,
        row_selection = row_selection,
        column_selection = column_selection,
        cell_selection = cell_selection,
        range_selection = range_selection
      )
    },
    output_data_grid,
    output_args
  )
}


to_data_grid_format <- function(
  df,
  width = NULL,
  height = NULL,
  row_selection = FALSE,
  column_selection = FALSE,
  cell_selection = FALSE,
  range_selection = FALSE
) {
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
      row_selection = row_selection,
      column_selection = column_selection,
      cell_selection = cell_selection,
      range_selection = range_selection
    ),
    width = width,
    height = height
  )

  res
}


data_grid_dep <- function() {
  htmlDependency(
    name = "data-grid",
    version = as.character(packageVersion("shinycomponent")),
    src = system.file(package = "shinycomponent", "www", "datagrid"),
    script = list(src = "index.js", type = "module")
  )
}
