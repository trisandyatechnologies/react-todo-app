import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

export default function TodoItem({ todo, deleteTodo }) {
  return (
    <ListItem divider>
      <ListItemText primary={todo} />
      <IconButton aria-label="delete" onClick={deleteTodo}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
