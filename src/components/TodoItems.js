import { Grid } from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";
import List from "@mui/material/List";

export default function TodoItems({ todos, deleteTodo }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <List component="nav" aria-label="mailbox folders">
          {todos.map((todo, i) => (
            <TodoItem todo={todo} deleteTodo={() => deleteTodo(i)} />
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
