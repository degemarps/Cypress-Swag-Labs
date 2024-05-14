export class HomePage {
  productsList(){
    return cy.get('div.inventory_item_description')
  }

  addProductToCart(name){
    this.productsList().contains(name).parent().parent().find('button').click()
  }
}