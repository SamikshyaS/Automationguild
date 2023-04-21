class LoginPage {
    getUsername() {
        return cy.get('input[data-test="username"]')
    }

    getPasswordInput() {
        return cy.get('input[data-test="password"]')
    }

    getLoginButton() {
        return cy.get('input[data-test="login-button"]')
    }

    enterUsername(username) {
        this.getUsername().type(username)
    }

    enterPassword(password) {
        this.getPassword().type(password)
    }

    clickButton() {
        this.getButton().click()
    }
}

export default LoginPage;