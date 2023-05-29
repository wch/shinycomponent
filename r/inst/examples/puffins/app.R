library(shiny)
library(shinycomponent)
library(palmerpenguins)

numeric_cols <- names(penguins)[vapply(penguins, is.numeric, TRUE)]
species <- levels(penguins$species)

app_css <- '
:not(:defined) { visibility: hidden;}

body:has([choice="purple"]) {
   --color-bg: var(--purple-1);
   --color-bg-1: var(--purple-2);
   --color-bg-2: var(--purple-3);
   --color-primary: var(--purple-10);
   --color-border: var(--gray-10);
}

body:has([choice="green"]) {
  --color-bg: var(--green-1);
   --color-bg-1: var(--green-2);
   --color-bg-2: var(--green-3);
   --color-primary: var(--green-10);
}

body:has([choice="wild"]) {
   --color-bg: var(--pink-2);
   --color-bg-1: var(--jungle-7);
   --color-bg-2: var(--yellow-6);
   --color-primary: var(--red-5);
--radius-small: var(--radius-3);
  --radius-medium: var(--radius-4);
  --radius-large: var(--radius-5);

}

body:has([choice="dark"]) {

   --color-bg: var(--sand-12);
   --color-bg-1: var(--sand-11);
   --color-bg-2: var(--sand-10);

--color-text: var(--stone-0);
  --color-text-1: var(--stone-1);
  --color-text-2: var(--stone-2);
   --color-primary: var(--red-11);
}
'


ui <- page(
  tags$head(tags$style(app_css)),
  theme = bslib::bs_theme(bootswatch = "pulse"),
  tabset(
    id = "tabset1",
    tab(
      name="Design",
      tag("design-preview", list())
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
        material_slider(id="slider1", value=11, min=1, max=20, withLabel=""),
        material_slider(
          id="slider2",
          value=5,
          min=1,
          max=21,
          step=2,
          withTickMarks="",
          withLabel=""
        ),
        material_slider(
          id="slider3",
          valueStart=8,
          valueEnd=12,
          range="",
          min=1,
          max=20,
          step=2,
          withLabel=""
        )
      ),
      verbatimTextOutput("current_color")
    ),
    tab(
      name = "Static",
      h2("Client-side (non-Shiny) interaction"),
      simple_number_input("num_in_static"),
      simple_number_output("num_in_static", watch="num_in_static")
    ),
    tab(
      name = "Table",
      tanstack_table(penguins)
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
      sep = "\n"
    )
  })
}

shinyApp(ui, server)
