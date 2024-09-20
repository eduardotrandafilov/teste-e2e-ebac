class CarrinhoPage{
    visitarUrl(){
        cy.visit(`carrinho`)
    }

    adicionarItensCarrinho(produto){
        this.visitarUrl()
        cy.get('tbody > .cart_item').contains(produto).parent().parent().find('.product-quantity > .quantity > .plus').click()
        cy.get('.woocommerce-message').should('contain','Carrinho atualizado.')
    }

    excluirItensCarrinho(produto){
        let prod = produto.split('-')
        this.visitarUrl()
        cy.get('tbody > .cart_item').contains(produto).parent().parent().find('.product-remove > .remove > .fa').click()
        cy.get('.woocommerce-message').should('contain','“'+prod[0].trim()+'” removido. Desfazer?')
    }

    alterarItensCarrinho(){
        //todo
    }

    concluirCompraCarrinho(){
        cy.get('.checkout-button').click()
        cy.get('.page-title').should('contain','Checkout')
    }

}

export default new CarrinhoPage()