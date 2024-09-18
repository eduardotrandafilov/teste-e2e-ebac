class ProdutosPage{
    visitarUrl(){
        cy.visit(`produtos`)
    }

    buscarProduto(nomeProduto){
        this.visitarUrl()
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
        cy.get('.product_title').should('contain',nomeProduto)
    }

    buscarProdutoLista(nomeProduto){
        this.visitarUrl()
        cy.get('.product-block')
        .contains(nomeProduto)
        .click()
        cy.get('#tab-title-description > a').should('contain','Descrição')

    }

    visitarProduto(nomeProduto){
        const urlFormatada = nomeProduto.replace(/ /g,'-')
        cy.visit(`produtos/${urlFormatada}`)
        cy.get('.product_title').should('contain',nomeProduto)

    }

    addProdutoCarrinho(nomeProduto,tamanho,cor,quantidade){
        let qtd = quantidade
        this.buscarProduto(nomeProduto)
        cy.get('.button-variable-item-'+ tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain',qtd +' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')

    }

}

export default new ProdutosPage()