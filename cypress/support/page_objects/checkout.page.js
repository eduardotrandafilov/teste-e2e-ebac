class Checkout{
    visitarUrl(){
        cy.visit(`checkout`)
    }

    realizarLogin(usuario,senha){
        this.visitarUrl()
        cy.get('.showlogin').click()
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-button').click()

        cy.get('[title="My account"]').should('contain','Welcome')
    }

    finalizarCompraComLogin(pais,rua,cidade,estado,cep,telefone,nome,sobrenome,usuario,senha,formaPagamento,testeFuncional){
        this.visitarUrl()
        if(testeFuncional){
            this.realizarLogin(usuario,senha)
        }
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#select2-billing_country-container').click()
        cy.get('#select2-billing_country-results').contains(pais).click()
        cy.get('#billing_address_1').clear().type(rua)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click()
        cy.get('#select2-billing_state-results').contains(estado).click()
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('.shop_table').should('exist')
        cy.get('.wc_payment_methods').contains(formaPagamento).prev().click()
        cy.get('#terms').check()
        cy.get('#place_order').click()

        cy.get('.page-title').should('contain','Pedido recebido')
    }

    finalizarCompraSemLogin(pais,rua,cidade,estado,cep,telefone,nome,sobrenome,usuario,senha){
        //TODO
    }

}

export default new Checkout()