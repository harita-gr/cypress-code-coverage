import React from "react";
import { Typography, Box } from "@mui/material";

const Balance = ({ transactions }) => {
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((sum, item) => sum + item, 0).toFixed(2);

  return (
    <Box>
      <Typography variant="h5">Balance: ${total}</Typography>
    </Box>
  );
};

export default Balance;
