/// <reference types = "cypress"/>
/// <reference types="cypress-xpath" />
//require('cypress-xpath')


/***This test cases tests the login for a new member.***/

//Login after receiving Sleep Score and Verify data appears on this pGE
it('navigate to URL', () => {
    cy.visit("https://onboarding.sleepio.com/login-component/login")

//Login with invalid credentials

cy.get("#sl-login-email").type(Cypress.env("uid_home"))
cy.get("#sl-login-password").type(Cypress.env("pwd_home"))
cy.get(".sl-new-login-button").click()
cy.get("#resumeCourseButton").click()
cy.get("#html5Popup > .confirm").click()

cy.end()
})

