/// <reference types="cypress" />

import cadastroPage from "../support/page_objects/cadastro.page";
import { faker } from '@faker-js/faker';


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    cadastroPage.visitarUrl()
    cadastroPage.registrarCadastro(faker.internet.email(),faker.internet.password())
    cy.get('.woocommerce-MyAccount-content').should('exist')

    /*produtoPage.visitarUrl()
    produtoPage.selecionarLista()
    cy.get()*/

      
  });


})