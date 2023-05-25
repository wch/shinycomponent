Shiny component example
=======================

This repository contains a simple example of a Shiny component for both R and Python.

The folders are organized as follows:

- `r`: R package
- `python`: Python package
- `js`: TypeScript code for the component


## R

Install the R package:

```R
remotes::install_github("wch/shiny_component/r")
```

After installing, you can run the demo app. Either copy and paste the [example app](r/inst/examples/number/app.R) into your R console, or run:

```R
shiny::runApp(system.file("examples/number", package = "shinycomponent"))
```


## Python

To install the Python package:

```bash
pip uninstall -y shiny_component
pip install "shiny_component@git+https://github.com/wch/shiny_component.git#subdirectory=py"
```

After installing, you can run the demo app. Save the [example app](py/examples/number/app.py) to a file named app.py, and run it:

```bash
shiny run app.py --port 8000 --launch-browser
```

If you have cloned the repository, you run the example app (without needing to create a new copy of the file):

```bash
shiny run py/examples/number/app.py --port 8000 --launch-browser
```

