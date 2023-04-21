import loginpage from "../../Pageobject/loginpage";
describe('Verify the loginpage', () => {
    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/')
    })
    it("Verify the login page", () => {
        const loginobj = new loginpage();
        loginobj.enterUsername('standard_user')
        loginobj.enterPassword('secret_sauce')
        loginobj.clickButton()
        loginobj.pagetitle().should('eq', 'Sauce Labs Backpack');
    })
    it('User should be able to naviaget to the page', () => {
        const loginobj = new loginpage();
        loginobj.enterUsername('standard_user')
        loginobj.enterPassword('secret_sauce')
        loginobj.clickButton()
        loginobj.get('div.inventory_item_name').click();
        loginobj.pagetitle().should('eq', 'Sauce Labs Backpack');
    })
})