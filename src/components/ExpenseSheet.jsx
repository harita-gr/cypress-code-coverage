import React from "react";
import { Card, CardContent, Typography, Box, styled } from "@mui/material";

const StyledCard = styled(Card)({
  display: "flex",
});

const StyledCardContent = styled(CardContent)({
  flex: 1,
  padding: 10,
});

const ExpenseSheet = ({ transactions }) => {
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((sum, item) => sum + item, 0)
    .toFixed(2);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((sum, item) => sum + item, 0)
    .toFixed(2);

  return (
    <Box>
      <StyledCard>
        <StyledCardContent>
          <Typography>Income</Typography>
          <Typography color="green">+{income}</Typography>
        </StyledCardContent>
      </StyledCard>
      <Card>
        <StyledCardContent>
          <Typography　data-testid="expense-value">Expense</Typography>
          <Typography color="red">{expense}</Typography>
        </StyledCardContent>
      </Card>
    </Box>
  );
};

export default ExpenseSheet;
