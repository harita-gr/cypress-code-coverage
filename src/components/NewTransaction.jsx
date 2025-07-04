import { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";

const NewTransaction = ({ addTransactions }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const newTransactions = (e) => {
    const transaction = {
      id: Math.floor(Math.random() * 1000000000),
      text: text,
      amount: +amount,
    };
    addTransactions(transaction);
    setText("");
    setAmount("");
  };

  return (
    <>
      <Typography>New Transactions</Typography>
      <Box>
        <TextField
          value={text}
          label="Enter Text"
          inputProps={{ 'aria-label': 'Enter Text', 'data-testid': 'text-input' }}
          onChange={(e) => setText(e.target.value)}
        />
      </Box>
      <Box>
        <TextField
          value={amount}
          label="Enter Amount"
          inputProps={{ 'aria-label': 'Enter Amount', 'data-testid': 'amount-input' }}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Box>
      <Button data-testid="add-btn" onClick={newTransactions}>Add Transaction</Button>
    </>
  );
};

export default NewTransaction;
