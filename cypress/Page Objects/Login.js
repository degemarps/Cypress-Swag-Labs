export class Login{
  makeLogin(username, password){
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()

    cy.get('[id="shopping_cart_container"]')
  }
}