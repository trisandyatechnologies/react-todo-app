import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export function AddTodo({ handleAddTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleAdd = () => {
    handleAddTodo(todoText);
    setTodoText("");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <TextField
          id="outlined-basic"
          fullWidth
          variant="outlined"
          size="medium"
          placeholder="Complete Todo App in React."
          onChange={(event) => setTodoText(event.target.value)}
          value={todoText}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          style={{ minHeight: 56 }}
          onClick={handleAdd}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
}
