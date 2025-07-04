import React from "react";
import { Typography, Box, List, Divider } from "@mui/material";
import Transaction from "./Transaction";

const Transactions = ({ transactions, deleteTransactions }) => {
  return (
    <Box>
      <Typography variant="h5">History</Typography>
      <Divider sx={{ width: "100%" }} />
      <List>
        {transactions?.map((transaction) => {
          return (
            <Transaction
              transaction={transaction}
              deleteTransactions={deleteTransactions}
              key={transaction.id}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default Transactions;
