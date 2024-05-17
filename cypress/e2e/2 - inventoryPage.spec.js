/// <reference types='cypress'/>

import { Login } from "../Page Objects/Login"
import { InventoryPage } from "../Page Objects/InventoryPage"

describe('Suite tests for inventory page', () => {
  const login = new Login()
  const inventoryPage = new InventoryPage()

  beforeEach(() => {
    cy.visit('/')
    login.login('standard_user', 'secret_sauce')
  })
  
  it('Add a product to a cart and remove after', () => {
    inventoryPage.addProductToCart('Sauce Labs Backpack')
    inventoryPage.removeProductFromCart('Sauce Labs Backpack')
  })
})