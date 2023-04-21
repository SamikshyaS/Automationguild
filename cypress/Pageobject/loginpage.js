class LoginPage {
    getUsername() {
        return cy.get('input[data-test="username"]')
    }

    getPassword() {
        return cy.get('input[data-test="password"]')
    }

    getButton() {
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