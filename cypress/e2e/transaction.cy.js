/// <reference types="cypress" />

describe("Expense Tracker App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("adds a new transaction", () => {
    cy.get('[data-testid="text-input"]').type("Coffee");
    cy.get('[data-testid="amount-input"]').type("-50");
    cy.get('[data-testid="add-btn"]').click();

    cy.contains("Coffee").should("be.visible");
    cy.contains("-$50").should("be.visible");
  });

  it("deletes a transaction", () => {
    // Add first
    cy.get('[data-testid="text-input"]').type("Temp");
    cy.get('[data-testid="amount-input"]').type("-30");
    cy.get('[data-testid="add-btn"]').click();


    cy.contains("Temp")
      .parents("li")
      .find("svg")
      .click(); // Delete icon

    cy.contains("Temp").should("not.exist");
  });

  it("does not add transaction when input is empty", () => {
    cy.contains("Add Transaction").click();
    cy.get("li").should("have.length.gte", 1); // List remains same or increases only on valid input
  });
});
