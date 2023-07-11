library(shiny)
library(shinycomponent)


ui <- fluidPage(
  sidebarLayout(
    sidebarPanel(
      sliderInput("lion", "Lion value:", min = 0, max = 100, value = 50)
    ),
    mainPanel(
      h3("Dynamic output"),
      output_classification_label("label1"),
      h3("Static output", style = "margin-top: 3rem;"),
      output_classification_label(
        "label2",
        value = list(Tigers = 32, Lions = 60, Bears = 15)
      ),
      h3("Static output, sort=FALSE", style = "margin-top: 3rem;"),
      output_classification_label(
        "label3",
        value = list(Tigers = 32, Lions = 60, Bears = 15),
        sort=FALSE
      ),
    )

  )
)



server <- function(input, output, session) {
  output$label1 <- render_classification_label({
    list(Tigers = 32, Lions = input$lion, Bears = 15)
  })
}

shinyApp(ui, server)
