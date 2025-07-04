import React from "react";
import { ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

const Transaction = ({ transaction, deleteTransactions }) => {
  const sign = transaction.amount > 0 ? "+$" : "-$";
  const amount = sign + Math.abs(transaction.amount);
  const color = transaction.amount > 0 ? "green " : "red";

  const handleDelete = () => {
    // Use setTimeout to defer the update
    setTimeout(() => deleteTransactions(transaction.id), 0);
  };

  return (
    <ListItem
      sx={{
        border: "1px solid #F6F6F6",
        borderRight: `5px solid ${color}`,
        display: "flex",
        mt: "10px",
      }}
    >
      <ListItemIcon>
        <DeleteIcon onClick={handleDelete} />
      </ListItemIcon>
      <ListItemText primary={transaction.text} />
      <ListItemText primary={amount} />
    </ListItem>
  );
};

export default Transaction;
