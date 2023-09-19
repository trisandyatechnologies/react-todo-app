import React from "react";

import { AddTodo } from "./AddTodo";
import { Box } from "@mui/material";
import TodoItems from "./TodoItems";

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  handleAddTodo = (todoText) => {
    //alert(todoText);
    const newTodos = this.state.todos;
    newTodos.push(todoText);
    this.setState({ todos: newTodos });
  };

  deleteTodo = (todoIndex) => {
    //alert("Sure want to delete?");
    const updatedTodos = this.state.todos;
    updatedTodos.splice(todoIndex, 1);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <Box margin={8} marginLeft={32} marginRight={32}>
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <TodoItems todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </Box>
    );
  }
}
