/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import cadastroPage from "../support/page_objects/cadastro.page";
import produtosPage from "../support/page_objects/produtos.page";
import carrinhoPage from '../support/page_objects/carrinho.page';
import checkoutPage from '../support/page_objects/checkout.page';


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

    //  cadastroPage.realizarCadastro(faker.internet.email(),
    //      faker.internet.password(),
    //      faker.person.firstName(),
    //      faker.person.lastName())


    cy.fixture('produtos').then(dados=>{
      // produtosPage.buscarProdutoLista(dados[0].nomeProduto)
      // produtosPage.buscarProduto(dados[0].nomeProduto)
      // produtosPage.visitarProduto(dados[0].nomeProduto)
    
      const qtdProdutoSelecionado = 2
      for (let i = 0;i < qtdProdutoSelecionado;i++){
        produtosPage.addProdutoCarrinho(dados[i].nomeProduto,
            dados[i].tamanho,
            dados[i].cor,
            dados[i].quantidade)
      }
      
      const qtdProdutoAlterado =1
      for (let i = 0;i < qtdProdutoAlterado;i++){
        carrinhoPage.adicionarItensCarrinho(`${dados[i].nomeProduto} - ${dados[i].tamanho}, ${dados[i].cor}`)
        carrinhoPage.excluirItensCarrinho(`${dados[i].nomeProduto} - ${dados[i].tamanho}, ${dados[i].cor}`)
      }

      carrinhoPage.concluirCompraCarrinho()
    })

    checkoutPage.preencherDetalhesFaturamento()

    
  })
});
