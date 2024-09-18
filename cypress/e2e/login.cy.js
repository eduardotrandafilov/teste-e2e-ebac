/// <reference types="cypress" />
let dadosLogin

context('Funcionalidade Login', () => {
    before(() => {
        cy.fixture('perfil').then(perfil => {
            dadosLogin = perfil
        })
    });

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Login com sucesso usando Comando customizado', () => {
        cy.login(dadosLogin[1].usuario, dadosLogin[1].senha)
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Login usando fixture', () => {
        cy.fixture('perfil').then((dados) => {
            cy.login(dados[1].usuario, dados[1].senha)
        })
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it.skip('Deve fazer login com sucesso - sem otimização', () => {
        cy.get('#username').type(dadosLogin[1].usuario)
        cy.get('#password').type(dadosLogin[1].senha, { log: false })
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, karli.rowe83 (não é karli.rowe83? Sair)')
    })
})