library(shiny)
library(shinycomponent)
library(palmerpenguins)

numeric_cols <- names(penguins)[vapply(penguins, is.numeric, TRUE)]
species <- levels(penguins$species)

app_css <- '
:not(:defined) { visibility: hidden;}

body:has([choice="purple"]) {
   --accent-gradient: var(--gradient-2);
}

body:has([choice="green"]) {
  --accent-gradient: var(--gradient-4);
  --sidebar-bg-color: var(--stone-10);
  --sidebar-color: var(--stone-0);
}

body:has([choice="wild"]) {
  --accent-gradient: linear-gradient(
      37deg in oklab,
      oklch(55% .45 350) 0%, oklch(100% .4 95) 115% 115%
    );
    --sidebar-bg-color: oklch(55% .45 350);
    --sidebar-color: var(--stone-0);
}
'


ui <- page(
  tags$head(tags$style(app_css)),
  theme = bslib::bs_theme(bootswatch = "pulse"),
  tabset(
    id = "tabset1",
    tab(
      name = "Static",
      h2("No server needed!"),
      simple_number_input("num_in_static"),
      simple_number_output("num_in_static", watch="num_in_static")
    ),
    tab(
      name = "Plot",
      star_rating(id = "foo"),
      star_rating(id = "foo1"),
      verbatimTextOutput("txt"),
      shiny_collapsible(
        uiOutput("value_boxes"),
        dir = "to_top",
        label = "Fun Facts"
      ),
      plotOutput("scatter", fill = TRUE)
    ),
    tab(
      name = "Number Input",
      simple_number_input("num_in"),
      verbatimTextOutput("num_out")
    ),
    tab(
      name = "Color Picker",
      color_picker(id = "color"),
      div(
        style = "max-width: 400px; margin-top: 15px;",
        h4("Sliders"),
        mui_slider(
          id = "slider1",
          `default-value` = 11,
          min = 1,
          max = 20,
          `value-label-display` = "auto"
        ),
        mui_slider(
          id = "slider2",
          `default-value`= 5,
          min = 1,
          max = 20,
          `value-label-display` = "on",
          size = "small"
        ),
        mui_slider(
          id = "slider3",
          `default-value` = 11,
          min = 1,
          max = 21,
          step = 2,
          `value-label-display` = "auto",
          marks = TRUE
        ),
        mui_slider(
          id = "slider4",
          `default-value` = 20,
          min = 0,
          max = 100,
          step = NULL,
          `value-label-display` = "auto",
          marks = list(
            list(value = 0, label = "0°C"),
            list(value = 20, label = "20°C"),
            list(value = 37, label = "37°C"),
            list(value = 100, label = "100°C")
          )
        )
      ),
      verbatimTextOutput("current_color")
    ),
    tab(
      name = "Collapser",
      shiny_collapsible("To Top", dir = "to_top", label = "My Collapser"),
      shiny_collapsible("To Right", dir = "to_right"),
      shiny_collapsible("To Bottom", dir = "to_bottom"),
      shiny_collapsible("To Left", dir = "to_left")
    ),
    sidebar(
      verbatimTextOutput("current_tab"),
      selectInput(
        "xvar",
        "X variable",
        numeric_cols,
        selected = "Bill Length (mm)"
      ),
      selectInput(
        "yvar",
        "Y variable",
        numeric_cols,
        selected = "Bill Depth (mm)"
      ),
      checkboxGroupInput(
        "species", "Filter by species", species, selected = species
      ),
      hr(),
      checkboxInput("by_species", "Show species", value = TRUE),
      checkboxInput("show_margins", "Show marginal plots", value = TRUE)
    ),
    footer(
      span("Experimental Shiny"),
      theme_chooser()
    ),
    div("Puffins are cool", slot = "header"),
    `selected-tab-index` = 2
  )
)



server <- function(input, output) {
  output$current_tab <- renderText({
    paste0("Current tab: ", input$tabset1)
  })

  output$txt <- renderText({
    paste0(input$foo, ":", input$foo1)
  })

  output$num_out <- renderText({
    paste0(input$num_in)
  })

  output$current_color <- renderText({
    paste(
      input$color,
      input$slider1,
      input$slider2,
      input$slider3,
      input$slider4,
      sep = "\n"
    )
  })
}

shinyApp(ui, server)