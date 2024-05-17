export class Login{
  username() {
    return cy.get('[data-test="username"]')
  }

  password() {
    return cy.get('[data-test="password"]')
  }

  loginButton() {
    return cy.get('[data-test="login-button"]')
  }

  shoppingCartIconContainer() {
    return cy.get('[id="shopping_cart_container"]')
  }

  login(username, password){
    this.username().type(username)
    this.password().type(password)
    this.loginButton().click()

    this.shoppingCartIconContainer().should('be.visible')
  }
}