//Cypress - SPEC File. Any test case in Javascript
/// <reference types="Cypress" />

describe('My First Test', () => {
    
    it('My First Case', () => {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/"); 
    cy.get('.search-keyword').type('ca');  
    cy.wait(2000);
    cy.get('.product:visible').should('have.length',4)
    })
  })