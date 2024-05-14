/// <reference types='cypress'/>

import { Login } from "../Page Objects/Login"
import { HomePage } from "../Page Objects/inventoryPage"

describe('Suite tests for inventory page', () => {
  const login = new Login()
  const homePage = new HomePage()

  beforeEach(() => {
    cy.visit('/')
    login.makeLogin('standard_user', 'secret_sauce')
  })
  
  it('Add a product to a cart and remove after', () => {
    homePage.addProductToCart('Sauce Labs Backpack')
  })
})