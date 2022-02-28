/// <reference types = "cypress"/>
/// <reference types="cypress-xpath" />
//require('cypress-xpath')


/***This test cases tests the login for an invalid and valid uid/pwd combination.***/

function userID_Alpha_Numeric() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
//Login after receiving Sleep Score and Continue
it('navigate to URL', () => {
    cy.visit("https://onboarding.sleepio.com/login-component/login")

//Login with invalid credentials
const email_val = userID_Alpha_Numeric() + "@gmail.com"

cy.get("#sl-login-email").type(email_val)
cy.get("#sl-login-password").type(Cypress.env("pwd"))
cy.get(".sl-new-login-button").click()

//Error message should display
cy.get('.sl-login--error').should('be.visible') 

//Login with valid credentials
cy.get("#sl-login-email").type(Cypress.env("uid"))
cy.get("#sl-login-password").type(Cypress.env("pwd"))
cy.get(".sl-new-login-button").click()

})

