import loginpage from "../../Pageobject/loginpage";
describe('Verify the loginpage', () => {
    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/')
    })
    it("Verify the login page", () => {
        const loginobj = new loginpage();
        loginobj.enterusername('standard_user')
        loginobj.enterpassword('secret_sauce')
        loginobj.clickbutton()
        loginobj.pagetitle().should('eq', 'Sauce Labs Backpack');
    })
    it('User should be able to naviaget to the page', () => {
        const loginobj = new loginpage();
        loginobj.enterusername('standard_user')
        loginobj.enterpassword('secret_sauce')
        loginobj.clickbutton()
        loginobj.get('div.inventory_item_name').click();
        loginobj.pagetitle().should('eq', 'Sauce Labs Backpack');

        //this is the changes to create a pr ignore this
    })
})