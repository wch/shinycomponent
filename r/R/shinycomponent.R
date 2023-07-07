#' @importFrom htmltools tag htmlDependency tagList tags

#' @export
color_picker <- function(id, ...) {
  tagList(
    component_dep(),
    tag("color-picker", list(id = id, ...))
  )
}


#' @export
tabset <- function(...) {
  tagList(
    component_dep(),
    tag("shiny-dashboard", list(...))
  )
}

#' @export
tab <- function(...) {
  tagList(
    component_dep(),
    tag("shiny-tab", list(...))
  )
}

#' @export
sidebar <- function(...) {
  tagList(
    component_dep(),
    tag("shiny-sidebar", list(...))
  )
}

#' @export
footer <- function(...) {
  tagList(
    component_dep(),
    tag("shiny-dashboard-footer", list(...))
  )
}

#' @export
shiny_collapsible <- function(...) {
  tagList(
    component_dep(),
    tag("shiny-collapsible", list(...))
  )
}


#' @export
simple_number_input <- function(id, ...) {
  tagList(
    component_dep(),
    tag("simple-number-input", list(id = id, ...))
  )
}

#' @export
simple_number_output <- function(id, ...) {
  tagList(
    component_dep(),
    tag("simple-number-output", list(id = id, ...))
  )
}

#' @export
general_output <- function(id, ...) {
  tagList(
    component_dep(),
    tag("general-output", list(id = id, ...))
  )
}


#' @export
theme_chooser <- function(...) {
  tagList(
    component_dep(),
    tag("theme-chooser", list(...))
  )
}



convert_to_escaped_json <- function(x) {
  res <- toJSON(x, null = "null", auto_unbox = TRUE)
  # res <- htmltools::htmlEscape(res, attribute = TRUE)
  res
}
