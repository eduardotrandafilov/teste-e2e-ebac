class Cadastro {

    visitarUrl(){
        cy.visit('minha-conta')
    }

    criarLogin(email,senha){
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha,{log:true})
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    }

    criarUsuario(nome,sobrenome){
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.') 
    }

    realizarCadastro(email,senha,nome,sobrenome){
        this.visitarUrl()
        this.criarLogin(email,senha)
        this.criarUsuario(nome,sobrenome)
    }

}

export default new Cadastro()