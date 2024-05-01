/// <reference types='cypress'/>

import { Login } from "../Page Objects/Login"

describe('Suite tests for login', () => {
  const login = new Login()

  beforeEach(() => {
    cy.visit('/')
  })

  it('Login with a valid user', () => {
    login.makeLogin('standard_user', 'secret_sauce')
  })
})