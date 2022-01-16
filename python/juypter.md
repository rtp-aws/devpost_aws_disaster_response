# juypter notebook

assuming you have activated your virtual envivornment

# install

```
pip install notebook
```

# run 

```
juypter notebook
```

# shutdown 

Use the gui.  Select each opened notebook and file->save and checkpoint. Switch to running tab in main window..  Shutdown all the kernels if running. Finally click the quit.  The startup terminal should get prompt back.


# install basic libs

This is assuming you are not in the notebook.

```
pip install --upgrade mxnet gluoncv
# optional - for displaying the image in notebook
pip install ipyplot
```
# restart

see above

# execute cells

Use shift-enter

When you see a `*` it means the cell is running the command.

# markdown versus execution cells

Some cells are executable and some are for rendering markdown.  Use the cell menu
to change between types.  Use shift enter to execute a cell and get either result.


