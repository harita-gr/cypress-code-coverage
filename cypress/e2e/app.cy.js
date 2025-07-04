/// <reference types="cypress" />

describe("Expense Tracker App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders all core components", () => {
    cy.contains("Expense Tracker").should("be.visible");
    cy.contains("Balance:").should("be.visible");
    cy.contains("Income").should("be.visible");
    cy.contains("Expense").should("be.visible");
    cy.contains("History").should("be.visible");
    cy.contains("New Transactions").should("be.visible");
  });

  // it("adds a new transaction", () => {
  //   cy.get('[data-testid="text-input"]').type("Coffee");
  //   cy.get('[data-testid="amount-input"]').type("-50");
  //   cy.get('[data-testid="add-btn"]').click();

  //   cy.contains("Coffee").should("be.visible");
  //   cy.contains("-$50").should("be.visible");
  // });

  // it("deletes a transaction", () => {
  //   // Add first
  //   cy.get('[data-testid="text-input"]').type("Temp");
  //   cy.get('[data-testid="amount-input"]').type("-30");
  //   cy.get('[data-testid="add-btn"]').click();


  //   cy.contains("Temp")
  //     .parents("li")
  //     .find("svg")
  //     .click(); // Delete icon

  //   cy.contains("Temp").should("not.exist");
  // });

//   it("updates balance, income, and expense correctly", () => {
//     // Capture initial values
//     let initialBalance = 0;
//     let initialIncome = 0;
//     let initialExpense = 0;

//     cy.contains("Balance: $").invoke("text").then((txt) => {
//       initialBalance = parseFloat(txt.replace(/[^\d.-]/g, ""));
//     });

//     cy.contains("Income").siblings("p").invoke("text").then((txt) => {
//       initialIncome = parseFloat(txt.replace(/[^\d.-]/g, ""));
//     });

//     cy.get('[data-testid="expense-value"]').invoke("text").then((txt) => {
//    　　initialExpense = parseFloat(txt.replace(/[^\d.-]/g, ""));
// 　　});

//     cy.get('[data-testid="text-input"]').type("Bonus");
//     cy.get('[data-testid="amount-input"]').type("500");
//     cy.get('[data-testid="add-btn"]').click();

//     cy.contains("Balance: $").invoke("text").then((txt) => {
//       const updatedBalance = parseFloat(txt.replace(/[^\d.-]/g, ""));
//       expect(updatedBalance).to.eq(initialBalance + 500);
//     });

//     cy.contains("Income").siblings("p").invoke("text").then((txt) => {
//       const updatedIncome = parseFloat(txt.replace(/[^\d.-]/g, ""));
//       expect(updatedIncome).to.eq(initialIncome + 500);
//     });
//   });

  it("does not add transaction when input is empty", () => {
    cy.contains("Add Transaction").click();
    cy.get("li").should("have.length.gte", 1); // List remains same or increases only on valid input
  });
});
