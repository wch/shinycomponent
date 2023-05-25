page <- function(..., title = NULL, lang = "en") {
  css <- "
    html { height: 100%; }
    body { height: 100%; min-height: 100%; }
  "

  shiny::bootstrapPage(
    component_dep(),
    tags$head(tags$style(css)),
    ...,
    title = title,
    lang = lang
  )
}
