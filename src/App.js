import React from 'react';
import Carrinho from './components/Carrinho';
import Cards from './components/Cards';
import Filtro from './components/Filtro';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import Produtos from './components/Produtos';
import ListaProdutos from './components/ListaProdutos.json';

const Body = styled.div`

`;

const Tela = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 3fr;
width: 100%;
justify-content: space-around;
`;
class App extends React.Component {
  state = {
    valorMinimo: 100,
    valorMaximo: 10000,
    peloNome: 'Traje Espacial',
    produtos: ListaProdutos,
    produtosNoCarrinho: [],
    total: 0,
  };

  onChangeValorMinimo = (e) => {
    this.setState({ valorMinimo: e.target.value });
  };

  onChangeValorMaximo = (e) => {
    this.setState({ valorMaximo: e.target.value });
  };

  onChangePeloNome = (e) => {
    this.setState({ peloNome: e.target.value });
  };

  adicionarAoCarrinho = (produtoId) => {
    const produtoExistenteCarrinho = this.state.produtosNoCarrinho.find(
      (produto) => produtoId === produto.id,
    );

    if (produtoExistenteCarrinho) {
      const novosProdutosCarrinho = this.state.produtosNoCarrinho.map((produto) =>
        produtoId === produto.id ? { ...produto, quantidade: produto.quantidade + 1 } : produto,
      );

      const total = novosProdutosCarrinho.reduce(
        (total, produto) => total + produto.preco * produto.quantidade,
        0,
      );

      this.setState({
        produtosNoCarrinho: novosProdutosCarrinho,
        total: total,
      });
    } else {
      const novoProdutoCarrinho = this.state.produtos.find((produto) => produtoId === produto.id);

      const novosProdutosCarrinho = [
        ...this.state.produtosNoCarrinho,
        { ...novoProdutoCarrinho, quantidade: 1 },
      ];

      const total = novosProdutosCarrinho.reduce(
        (total, produto) => total + produto.preco * produto.quantidade,
        0,
      );

      this.setState({
        produtosNoCarrinho: novosProdutosCarrinho,
        total: total,
      });
    }
  };

  removerDoCarrinho = (produtoId) => {
    const removerProduto = this.state.produtosNoCarrinho
      .map((produto) =>
        produtoId === produto.id ? { ...produto, quantidade: produto.quantidade - 1 } : produto,
      )
      .filter((produto) => produto.quantidade > 0);

    const total = removerProduto.reduce(
      (total, produto) => total + produto.preco * produto.quantidade,
      0,
    );

    this.setState({ produtosNoCarrinho: removerProduto, total: total });
  };

  render() {
    return (
      
      <Body>
        <Header/>
        <Tela>
        <Filtro
        valorMaximo={this.state.valorMaximo}
        valorMinimo={this.state.valorMinimo}
        peloNome={this.state.peloNome}
        onChangePeloNome={this.onChangePeloNome}
        onChangeValorMaximo={this.onChangeValorMaximo}
        onChangeValorMinimo={this.onChangeValorMinimo}
         />
        <Cards
        produtos={this.state.produtos} 
        adicionarAoCarrinho={this.adicionarAoCarrinho}
        valorMaximo={this.state.valorMaximo}
        valorMinimo={this.state.valorMinimo}
        peloNome={this.state.peloNome}
        />
        <Carrinho
          produtosCarrinho={this.state.produtosNoCarrinho}
          total={this.state.total}
          removerDoCarrinho={this.removerDoCarrinho}
        />
        </Tela>
  
  <Footer/>
      </Body>
    );
  }
}

export default App;
