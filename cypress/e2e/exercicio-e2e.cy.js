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


      cy.fixture('produtos').then(dados=>{

        produtosPage.buscarProdutoLista(dados[0].nomeProduto)
        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.visitarProduto(dados[0].nomeProduto)
      
        produtosPage.addProdutoCarrinho(dados[0].nomeProduto,
            dados[0].tamanho,
            dados[0].cor,
            dados[0].quantidade)
      })
    })
  });
