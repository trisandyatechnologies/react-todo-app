import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodoText: "",
      todos: [],
      indexInEdit: -1,
    };
  }

  handleChange = (event) => {
    this.setState({ newTodoText: event.target.value });
  };

  handleAdd = () => {
    const newTodos = this.state.todos;
    newTodos.push(this.state.newTodoText);
    this.setState({ todos: newTodos, newTodoText: "" });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  handleDelete = (todoIndex) => {
    const updatedTodos = this.state.todos;
    updatedTodos.splice(todoIndex, 1);
    this.setState({ todos: updatedTodos });
  };

  handleEdit = (todoIndex, updatedTodoText) => {
    const updatedTodos = this.state.todos;
    updatedTodos[todoIndex] = updatedTodoText;
    this.setState({ todos: updatedTodos, indexInEdit: -1 });
  };

  handleEditClick = (todoIndex) => {
    this.setState({ indexInEdit: todoIndex });
  };

  componentDidMount() {
    this.setState({ todos: JSON.parse(localStorage.getItem("todos") || "[]") });
  }

  componentWillUnmount() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <Box m={16} ml={32} mr={32}>
        <Typography
          variant="h2"
          style={{ textAlign: "center", marginBottom: 16 }}
        >
          My Todos
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              fullWidth
              placeholder="ADD YOUR TODO"
              value={this.state.newTodoText}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              variant="contained"
              style={{ height: 56 }}
              onClick={this.handleAdd}
            >
              Add
            </Button>
          </Grid>
        </Grid>
        <List>
          {this.state.todos.map((todo, i) => (
            <ListItem divider key={todo + i}>
              {this.state.indexInEdit === i ? (
                <TextField
                  defaultValue={todo}
                  fullWidth
                  onBlur={(event) => {
                    this.handleEdit(i, event.target.value);
                  }}
                />
              ) : (
                <ListItemText primary={todo} />
              )}

              <IconButton
                aria-label="delete"
                onClick={() => this.handleEditClick(i)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => this.handleDelete(i)}
              >
                <DeleteIcon color="error" />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }
}
