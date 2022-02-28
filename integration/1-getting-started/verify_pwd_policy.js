/// <reference types = "cypress"/>
/// <reference types="cypress-xpath" />
//require('cypress-xpath')

/***This test cases tests the workflow up to the sleep score page.***/

function userID_Alpha_Numeric() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
//Navigate to URL, begin the process and follow through to Golden Path
it('navigate to URL', () => {
    cy.visit("https://onboarding.sleepio.com/sleepio/big-health#1/1")
    cy.get('.sl-button').click()

//Improve Sleep
//Select Stop waking & wake up refreshed
cy.get('#options-id-2').click()
cy.get('#options-id-3').click()
cy.get('.sl-button-wrapper').click()

//How long 
//Select 2-3 weeks 
cy.get('select').select([2])
cy.get('.sl-button-wrapper').click()

//Stops from sleep
//Select Noise
cy.get('#options-id-3').click()
cy.get('.sl-button-wrapper').click()

//Extent of Trouble
//Select Very Much
cy.get('select').select([4])
cy.get('.sl-button-wrapper').click()

//Nights a Week
//Select 5 nights
cy.get('select').select([5])
cy.get('.sl-button-wrapper').click()

//How often no control
//Select very often
cy.get('select').select([4])
cy.get('.sl-button-wrapper').click()

//How likely fall asleep
//Select No Chance
cy.get('select').select([1])
cy.get('.sl-button-wrapper').click()

//Gender
//Select Female
cy.get('#options-id-1').click()
cy.get('.sl-button-wrapper').click()

//DOB
//Enter Feb-22-1977
cy.get('#select-month').select([1])
cy.get('#select-day').select(21)
cy.get('#select-year').select('1977')
cy.get('.sl-button-wrapper').click()

//Employment
//Select Retired
cy.get('select').select([3])
cy.get('.sl-button-wrapper').click()


//Guides
//Select the 4 guides
cy.get('#options-id-0').click()
cy.get('#options-id-1').click()
cy.get('#options-id-2').click()
cy.get('#options-id-3').click()
cy.get('.sl-button-wrapper').click()

//Sleep score
//Enter name
cy.xpath("//input[@name='first_name']").type(userID_Alpha_Numeric())
cy.xpath("//input[@name='last_name']").type(userID_Alpha_Numeric());

//Enter email & pwd
const email_val = userID_Alpha_Numeric() + "@gmail.com"

cy.xpath("//input[@name='email']").type(email_val);
cy.xpath("//input[@name='password']").type(Cypress.env("pwd_bad"));

//Error message should display
//Privacy & Acknowledgement
cy.xpath('//*[@id="sl-flow"]/div[3]/div/div/div/div/form/div[5]/input').click()
cy.xpath('//*[@id="sl-flow"]/div[3]/div/div/div/div/form/div[6]/input').click()
cy.xpath('//*[@id="sl-flow"]/div[3]/div/div/div/div/form/div[7]/button').click()
cy.get('.sl-button-wrapper').click()
cy.xpath('//*[@id="sl-flow"]/div[3]/div/div/div/div/form/div[4]/div/div').should('be.visible') 
cy.end()
})


