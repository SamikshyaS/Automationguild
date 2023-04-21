class loginpage {
    elements =
        {
            username: () => cy.get('input[data-test="username"]'),
            password: () => cy.get('input[data-test="password"]'),
            clickbutton: () => cy.get('input[data-test="login-button"]')
        }
    enterusername(username) {
        this.elements.username().type(username)
    }
    enterpassword(password) {
        this.elements.password().type(password)
    }
    clickbutton() {
        this.elements.clickbutton().click()
    }
}
export default loginpage;