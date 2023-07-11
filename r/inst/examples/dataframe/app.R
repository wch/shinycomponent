library(shiny)
library(shinycomponent)

library(palmerpenguins)
library(ggplot2)

ui <- fluidPage(
  h4("Dynamic data"),
  selectInput("dataset", "Dataset", list("mtcars", "penguins", "diamonds")),
  output_data_frame("grid"),
  absolutePanel(
    verbatimTextOutput("detail"),
    right = "10px",
    bottom = "10px",
  ),
  hr(),
  h4("Static data"),
  output_data_frame(data = penguins)
)



server <- function(input, output, session) {
  df <- reactiveVal()

  observe({
    df(get(input$dataset, envir = globalenv()))
  })

  output$grid <- render_data_frame(
    {
      df()
    },
    height="400px",
    row_selection=TRUE
  )
}

shinyApp(ui, server)
