/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import cadastroPage from "../support/page_objects/cadastro.page";
import produtosPage from "../support/page_objects/produtos.page";


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
    
    cadastroPage.realizarCadastro(faker.internet.email(),
        faker.internet.password(),
        faker.person.firstName(),
        faker.person.lastName())

    produtosPage.buscarProdutoLista('Atlas Fitness Tank')
    produtosPage.buscarProduto('Atlas Fitness Tank')
    produtosPage.visitarProduto('Atlas Fitness Tank')
    produtosPage.addProdutoCarrinho('Atlas Fitness Tank','XS',"Blue",4)

    })
  });
