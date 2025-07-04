import { useState } from "react";
import Balance from "./components/Balance";
import Transactions from "./components/Transactions";
import NewTransaction from "./components/NewTransaction";
import ExpenseSheet from "./components/ExpenseSheet";
import { Typography, Box, styled } from "@mui/material";

const StyledBox = styled(Box)({
  background: "#fff",
  padding: 10,
  borderRadius: 20,
  width: 500,
  "& > *": {
    padding: 10,
  },
});

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Books", amount: -20 },
    { id: 2, text: "Flowers", amount: -10 },
    { id: 3, text: "Salary", amount: 2000 },
    { id: 4, text: "Groceries", amount: -40 },
  ]);

  const addTransactions = (transaction) => {
    setTransactions((transactions) => [transaction, ...transactions]);
  };

  const deleteTransactions = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <div className="App">
      <Typography variant="h4" mb="20px">
        Expense Tracker
      </Typography>
      <StyledBox>
        <Balance transactions={transactions} />
        <ExpenseSheet transactions={transactions} />
        <Transactions
          transactions={transactions}
          deleteTransactions={deleteTransactions}
        />
        <NewTransaction addTransactions={addTransactions} />
      </StyledBox>
    </div>
  );
}

export default App;
