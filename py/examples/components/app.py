# A big demo app of (most of) the input components in the shinycomponent library.
from shiny import App, Inputs, Outputs, Session, reactive, render, ui

import shinycomponent as sc

# Real world tabs example app
app_ui = sc.page(
    sc.dashboard(
        sc.tab(
            # Make a grid with 2 columns
            sc.grid(
                sc.grid_item(
                    sc.forge.input_text(
                        id="text1",
                        label="Basic",
                    ),
                    sc.forge.input_text(
                        id="text2",
                        label=ui.TagList(
                            "Help text, placeholder, ", ui.tags.b("bold label")
                        ),
                        help_text="This is some help text",
                        placeholder="Placeholder text",
                    ),
                    sc.forge.input_text(
                        id="text3",
                        label="Starting value, clearable, debounce=0",
                        value="This is a starting value",
                        clearable=True,
                        debounce=0,
                    ),
                    sc.forge.input_text(
                        id="text4",
                        label="Password=True, pill",
                        password=True,
                        pill=True,
                    ),
                    sc.forge.input_text(
                        id="text5",
                        label="Update on Enter or lost focus",
                        wait_for_enter=True,
                    ),
                ),
                sc.grid_item(
                    sc.forge.output_text_verbatim("out_text1"),
                    sc.forge.output_text_verbatim("out_text2"),
                    sc.forge.output_text_verbatim("out_text3"),
                    sc.forge.output_text_verbatim("out_text4"),
                    sc.forge.output_text_verbatim("out_text5"),
                ),
                n_cols=2,
                n_rows=1,
            ),
            name="Text",
        ),
        sc.tab(
            sc.grid(
                sc.grid_item(
                    sc.forge.input_text_area(
                        id="textarea1",
                        label="Basic",
                    ),
                    sc.forge.input_text_area(
                        id="textarea2",
                        label=ui.TagList(
                            "Help text, placeholder, ", ui.tags.b("bold label")
                        ),
                        help_text="This is some help text",
                        placeholder="Placeholder text",
                    ),
                    sc.forge.input_text_area(
                        id="textarea3",
                        label="Starting value, no resize, debounce=0",
                        value="This is a starting value",
                        resize="none",
                        debounce=0,
                    ),
                    sc.forge.input_text_area(
                        id="textarea4",
                        label="1 row, auto resize, update on Enter or lost focus",
                        rows=1,
                        resize="auto",
                        wait_for_enter=True,
                    ),
                ),
                sc.grid_item(
                    sc.forge.output_text_verbatim("out_textarea1"),
                    sc.forge.output_text_verbatim("out_textarea2"),
                    sc.forge.output_text_verbatim("out_textarea3"),
                    sc.forge.output_text_verbatim("out_textarea4"),
                ),
                n_cols=2,
                n_rows=1,
            ),
            name="Text area",
        ),
        sc.tab(
            # Make a grid with 2 columns
            sc.grid(
                sc.grid_item(
                    sc.forge.input_number(
                        id="number1",
                        label="Basic",
                    ),
                    sc.forge.input_number(
                        id="number2",
                        label=ui.TagList(
                            "Min=0, max=1000, value=99, help text, ",
                            ui.tags.b("bold label"),
                        ),
                        value=99,
                        min=0,
                        max=1000,
                        help_text="This is some help text",
                    ),
                    sc.forge.input_number(
                        id="number3",
                        label="Placeholder, clearable, debounce=0",
                        placeholder="Placeholder text",
                        clearable=True,
                        debounce=0,
                    ),
                    sc.forge.input_number(
                        id="number4",
                        label="Pill, update on Enter or lost focus",
                        pill=True,
                        wait_for_enter=True,
                    ),
                ),
                sc.grid_item(
                    sc.forge.output_text_verbatim("out_number1"),
                    sc.forge.output_text_verbatim("out_number2"),
                    sc.forge.output_text_verbatim("out_number3"),
                    sc.forge.output_text_verbatim("out_number4"),
                ),
                n_cols=2,
                n_rows=1,
            ),
            name="Number",
        ),
        sc.tab(
            # Make a grid with 2 columns
            sc.grid(
                sc.grid_item(
                    sc.forge.input_select(
                        id="select1",
                        label="Basic",
                        choices=["First choice", "Second choice", "Third choice"],
                    ),
                    sc.forge.input_select(
                        id="select2",
                        label="Starting value, clearable, help text",
                        choices={
                            "first": "First choice",
                            "second": "Second choice",
                            "third": "Third choice",
                        },
                        selected="second",
                        help_text="This is some help text",
                        clearable=True,
                    ),
                    sc.forge.input_select(
                        id="select3",
                        label=ui.TagList(
                            "Multiple, clearable, ", ui.tags.b("bold label")
                        ),
                        choices={
                            "first": "First choice",
                            "second": "Second choice",
                            "third": "Third choice",
                        },
                        selected=["second", "first"],
                        multiple=True,
                    ),
                    sc.forge.input_select(
                        id="select4",
                        label="Option groups, placeholder, pill",
                        choices={
                            "Group A": {"a1": "Choice A1", "a2": "Choice A2"},
                            "Group B": ["Choice B"],
                            "Group C": ["c1", "c2"],
                        },
                        selected=["second", "first"],
                        placeholder="Select something",
                        pill=True,
                    ),
                ),
                sc.grid_item(
                    sc.forge.output_text_verbatim("out_select1"),
                    sc.forge.output_text_verbatim("out_select2"),
                    sc.forge.output_text_verbatim("out_select3"),
                    sc.forge.output_text_verbatim("out_select4"),
                ),
                n_cols=2,
                n_rows=1,
            ),
            name="Select",
        ),
        sc.tab(
            # Make a grid with 2 columns
            sc.grid(
                sc.grid_item(
                    sc.forge.input_slider(
                        id="slider1",
                        label="Basic",
                        min=0,
                        max=5,
                        value=2,
                    ),
                    sc.forge.input_slider(
                        id="slider2",
                        label=ui.TagList(
                            "Range, debounce=0, ", ui.tags.b("bold label")
                        ),
                        min=0,
                        max=100,
                        value=(20, 40),
                        debounce=0,
                    ),
                    sc.forge.input_slider(
                        id="slider3",
                        label="Min=3, step=5, marks=True",
                        min=3,
                        max=103,
                        value=23,
                        step=5,
                        marks=True,
                    ),
                    sc.forge.input_slider(
                        id="slider4",
                        label="step=1, marks=[0, 10, 20, ...]",
                        min=0,
                        max=80,
                        value=20,
                        step=1,
                        marks=[0, 10, 20, 40, 80],
                    ),
                    sc.forge.input_slider(
                        id="slider5",
                        label='step=True, marks={"Zero":0, "Ten":10, ...}',
                        min=0,
                        max=80,
                        value=20,
                        step=True,
                        marks={
                            "Zero": 0,
                            "Ten": 10,
                            "Twenty": 20,
                            "Forty": 40,
                            "Eighty": 80,
                        },
                    ),
                    sc.forge.input_slider(
                        id="slider6",
                        label='step=True, marks={"Giraffe": 1, ...}',
                        min=1,
                        max=3,
                        value=1,
                        step=True,
                        marks={
                            "Giraffe": 1,
                            "Hippo": 2,
                            "Lion": 3,
                        },
                    ),
                ),
                sc.grid_item(
                    sc.forge.output_text_verbatim("out_slider1"),
                    sc.forge.output_text_verbatim("out_slider2"),
                    sc.forge.output_text_verbatim("out_slider3"),
                    sc.forge.output_text_verbatim("out_slider4"),
                    sc.forge.output_text_verbatim("out_slider5"),
                    sc.forge.output_text_verbatim("out_slider6"),
                ),
                n_cols=2,
                n_rows=1,
            ),
            name="Slider",
        ),
        sc.tab(
            sc.grid(
                sc.grid_item(
                    sc.forge.input_checkbox(
                        id="checkbox1",
                        label="Basic",
                    ),
                    sc.forge.input_checkbox(
                        id="checkbox2", label="Checked", value=True
                    ),
                ),
                sc.grid_item(
                    sc.forge.output_text_verbatim("out_checkbox1"),
                    sc.forge.output_text_verbatim("out_checkbox2"),
                ),
                n_cols=2,
                n_rows=1,
            ),
            name="Checkbox",
        ),
        sc.tab(
            sc.grid(
                sc.grid_item(
                    sc.forge.input_switch(
                        id="switch1",
                        label="Basic",
                    ),
                    sc.forge.input_switch(id="switch2", label="Checked", value=True),
                    sc.forge.input_switch(
                        id="switch3",
                        label="Huge, via CSS vars",
                        style="""--width: calc(var(--height) * 1.75);
                                --height: 44px;
                                --thumb-size: 40px;
                                """,
                    ),
                ),
                sc.grid_item(
                    sc.forge.output_text_verbatim("out_switch1"),
                    sc.forge.output_text_verbatim("out_switch2"),
                    sc.forge.output_text_verbatim("out_switch3"),
                ),
                n_cols=2,
                n_rows=1,
            ),
            name="Switch",
        ),
        sc.tab(
            sc.grid(
                sc.grid_item(
                    sc.forge.input_checkbox_group(
                        id="checkboxgroup1",
                        label="Basic",
                        choices=["First choice", "Second choice", "Third choice"],
                    ),
                    sc.forge.input_checkbox_group(
                        id="checkboxgroup2",
                        label=ui.TagList(
                            "Some checked, dictionary choices, ",
                            ui.tags.b("bold label"),
                        ),
                        choices={
                            "choice1": "First choice",
                            "choice2": "Second choice",
                            "choice3": "Third choice",
                        },
                        selected=["choice1", "choice3"],
                    ),
                    sc.forge.input_checkbox_group(
                        id="checkboxgroup3",
                        label="Dictionary choices, inline",
                        choices={
                            "choice1": "First choice",
                            "choice2": "Second choice",
                            "choice3": "Third choice",
                        },
                        inline=True,
                    ),
                ),
                sc.grid_item(
                    sc.forge.output_text_verbatim("out_checkboxgroup1"),
                    sc.forge.output_text_verbatim("out_checkboxgroup2"),
                    sc.forge.output_text_verbatim("out_checkboxgroup3"),
                ),
                n_cols=2,
                n_rows=1,
            ),
            name="Checkbox group",
        ),
        sc.tab(
            sc.grid(
                sc.grid_item(
                    sc.forge.input_radio_buttons(
                        id="radio1",
                        label="Basic",
                        choices=["First choice", "Second choice", "Third choice"],
                    ),
                    sc.forge.input_radio_buttons(
                        id="radio2",
                        label=ui.TagList(
                            'Selected="", dictionary choices, ',
                            ui.tags.b("bold label"),
                        ),
                        choices={
                            "choice1": "First choice",
                            "choice2": "Second choice",
                            "choice3": "Third choice",
                        },
                        selected="",
                    ),
                    sc.forge.input_radio_buttons(
                        id="radio3",
                        label="Dictionary choices, inline",
                        choices={
                            "choice1": "First choice",
                            "choice2": "Second choice",
                            "choice3": "Third choice",
                        },
                        inline=True,
                    ),
                    sc.forge.input_radio_buttons(
                        id="radio4",
                        label="Button, pill",
                        choices={
                            "choice1": "First choice",
                            "choice2": "Second choice",
                            "choice3": "Third choice",
                        },
                        button=True,
                        pill=True,
                    ),
                ),
                sc.grid_item(
                    sc.forge.output_text_verbatim("out_radio1"),
                    sc.forge.output_text_verbatim("out_radio2"),
                    sc.forge.output_text_verbatim("out_radio3"),
                    sc.forge.output_text_verbatim("out_radio4"),
                ),
                n_cols=2,
                n_rows=1,
            ),
            name="Radio",
        ),
        sc.tab(
            sc.grid(
                sc.grid_item(
                    sc.forge.input_action_button(
                        id="action1",
                        label="Basic",
                    ),
                    sc.forge.input_action_button(
                        id="action2",
                        label=ui.TagList("Label with ", ui.tags.i("italic"), " text"),
                    ),
                ),
                sc.grid_item(
                    sc.forge.output_text_verbatim("out_action1"),
                    sc.forge.output_text_verbatim("out_action2"),
                ),
                n_cols=2,
                n_rows=1,
            ),
            name="Action button",
        ),
        sc.tab(
            sc.grid(
                sc.grid_item(
                    sc.forge.input_date(
                        id="date1",
                        label="Basic",
                    ),
                    sc.forge.input_date(
                        id="date2",
                        label=ui.TagList(
                            "Help text, starting value, ", ui.tags.b("bold label")
                        ),
                        help_text="This is some help text",
                        value="2023-01-01",
                    ),
                    sc.forge.input_date(
                        id="date3",
                        label="min, max, starting value",
                        value="2023-01-15",
                        min="2023-01-10",
                        max="2023-01-20",
                    ),
                    sc.forge.input_date(
                        id="date4",
                        label="Pill",
                        pill=True,
                    ),
                ),
                sc.grid_item(
                    sc.forge.output_text_verbatim("out_date1"),
                    sc.forge.output_text_verbatim("out_date2"),
                    sc.forge.output_text_verbatim("out_date3"),
                    sc.forge.output_text_verbatim("out_date4"),
                ),
                n_cols=2,
                n_rows=1,
            ),
            name="Date",
        ),
        sc.tab(
            sc.grid(
                sc.grid_item(
                    sc.forge.input_time(
                        id="time1",
                        label="Basic",
                    ),
                    sc.forge.input_time(
                        id="time2",
                        label=ui.TagList(
                            "Help text, starting value, ", ui.tags.b("bold label")
                        ),
                        help_text="This is some help text",
                        value="09:00",
                    ),
                    sc.forge.input_time(
                        id="time3",
                        label="min, max, starting value",
                        value="09:00",
                        min="14:30",
                        max="08:30",
                    ),
                    sc.forge.input_time(
                        id="time4",
                        label="Pill",
                        pill=True,
                    ),
                ),
                sc.grid_item(
                    sc.forge.output_text_verbatim("out_time1"),
                    sc.forge.output_text_verbatim("out_time2"),
                    sc.forge.output_text_verbatim("out_time3"),
                    sc.forge.output_text_verbatim("out_time4"),
                ),
                n_cols=2,
                n_rows=1,
            ),
            name="Time",
        ),
        tabs_on_side=True,
        before_navigation=ui.div(ui.h3("Experimental Shiny")),
        after_navigation=ui.div(
            sc.forge.dark_mode_switch(id="dark_mode"),
            sc.forge.output_text_verbatim("out_dark_mode"),
        ),
    ),
)


def server(input: Inputs, output: Outputs, session: Session):
    @output()
    @render.text()
    def out_dark_mode():
        return str(input.dark_mode())

    for i in range(2):
        make_output(input[f"action{i+1}"], f"out_action{i+1}", output)

    for i in range(5):
        make_output(input[f"text{i+1}"], f"out_text{i+1}", output)

    for i in range(4):
        make_output(input[f"textarea{i+1}"], f"out_textarea{i+1}", output)

    for i in range(4):
        make_output(input[f"number{i+1}"], f"out_number{i+1}", output)

    for i in range(4):
        make_output(input[f"select{i+1}"], f"out_select{i+1}", output)

    for i in range(6):
        make_output(input[f"slider{i+1}"], f"out_slider{i+1}", output)

    for i in range(2):
        make_output(input[f"checkbox{i+1}"], f"out_checkbox{i+1}", output)

    for i in range(3):
        make_output(input[f"switch{i+1}"], f"out_switch{i+1}", output)

    for i in range(3):
        make_output(input[f"checkboxgroup{i+1}"], f"out_checkboxgroup{i+1}", output)

    for i in range(4):
        make_output(input[f"radio{i+1}"], f"out_radio{i+1}", output)

    for i in range(4):
        make_output(input[f"date{i+1}"], f"out_date{i+1}", output)

    for i in range(4):
        make_output(input[f"time{i+1}"], f"out_time{i+1}", output)


def make_output(input_val: reactive.Value[object], out_label: str, output: Outputs):
    @output(id=out_label)
    @render.text()
    def _():
        return str(input_val())


app = App(
    app_ui,
    server,
)
