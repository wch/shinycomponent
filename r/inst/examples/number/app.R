library(shiny)
library(shinycomponent)

ui <- fluidPage(
  theme = bslib::bs_theme(),
  h5("Number Input"),
  example_number_input("x", value = 10, min = 5, max = 15),
  verbatimTextOutput("value")
)

server <- function(input, output) {
  output$value <- renderText({
    paste0("x: ", input$x)
  })
}

shinyApp(ui, server)
