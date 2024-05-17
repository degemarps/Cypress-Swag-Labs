export class HomePage {
  productsList(){
    return cy.get('div.inventory_item_description')
  }

  shoppingCartIconWithProduct(){
    return cy.get('span.shopping_cart_badge')
  }

  addProductToCart(name){
    this.productsList().contains(name).parent().parent().find('button').click()
    this.productsList().contains(name).parent().parent().find('button').should('have.text', 'Remove')
    this.shoppingCartIconWithProduct().should('have.text', '1')
  }

  removeProductFromCart(name){
    this.productsList().contains(name).parent().parent().find('button').then( label => {
      const labelTex = label.text()
      expect(labelTex).to.equal('Remove')
    })
    this.productsList().contains(name).parent().parent().find('button').click()
    this.productsList().contains(name).parent().parent().find('button').should('have.text', 'Add to cart')
    this.shoppingCartIconWithProduct().should('not.exist')
  }
}