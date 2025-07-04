/// <reference types="cypress" />

describe("Expense Tracker App", () => {
  beforeEach(() => {
    cy.visit("/");
  });


  it("updates balance, income, and expense correctly", () => {
    // Capture initial values
    let initialBalance = 0;
    let initialIncome = 0;
    let initialExpense = 0;

    cy.contains("Balance: $").invoke("text").then((txt) => {
      initialBalance = parseFloat(txt.replace(/[^\d.-]/g, ""));
    });

    cy.contains("Income").siblings("p").invoke("text").then((txt) => {
      initialIncome = parseFloat(txt.replace(/[^\d.-]/g, ""));
    });

    cy.get('[data-testid="expense-value"]').invoke("text").then((txt) => {
   　　initialExpense = parseFloat(txt.replace(/[^\d.-]/g, ""));
　　});

    cy.get('[data-testid="text-input"]').type("Bonus");
    cy.get('[data-testid="amount-input"]').type("500");
    cy.get('[data-testid="add-btn"]').click();

    cy.contains("Balance: $").invoke("text").then((txt) => {
      const updatedBalance = parseFloat(txt.replace(/[^\d.-]/g, ""));
      expect(updatedBalance).to.eq(initialBalance + 500);
    });

    cy.contains("Income").siblings("p").invoke("text").then((txt) => {
      const updatedIncome = parseFloat(txt.replace(/[^\d.-]/g, ""));
      expect(updatedIncome).to.eq(initialIncome + 500);
    });
  });
});
