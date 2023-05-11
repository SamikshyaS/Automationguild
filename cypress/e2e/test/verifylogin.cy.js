import loginpage from "../../Pageobject/loginelement";
describe("Login", () => {
    const loginobj = new loginpage()
    beforeEach(function () {
        cy.visit('www.saucedemo.com')
    })
    it("Verify that user can login to the application as a normal user", () => {
        cy.fixture('credentials').then((credentials) => {
            cy.login(credentials.username1, credentials.password1)
          })
        loginobj.enterusername('username1')
        loginobj.enterpassword('password1')
        loginobj.clickbutton()
        cy.title().should('eq', 'Sauce Labs Backpack')
    })
    it("Verify that user can navigate to the inventory page", () => {
        cy.fixture('credentials').then((credentials) => {
            cy.login(credentials.username1, credentials.password1)
          })
        loginobj.enterusername('username1')
        loginobj.enterpassword('password1')
        loginobj.clickbutton()
        cy.get('div.inventory_item_name').click()
        cy.title().should('eq', 'Sauce Labs Backpack')
    })
})


//create a function for the page title and format the test
//try to store the credentials on fixtures