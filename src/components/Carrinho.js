import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: solid 1px black;
  margin: 10px;
  padding: 10px;
`;

const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Texto = styled.p`
  font-size: 16px;
`;
const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
`;

class Carrinho extends React.Component {
  render() {
    return (
      <Container>
        <h3>Carrinho</h3>
        {this.props.produtosCarrinho.map((produto) => (
          <ContainerFlex>
            <Texto>{produto.quantidade}x</Texto>
            <Texto>{produto.nome}</Texto>
            <Texto>R$ {produto.preco},00</Texto>
            <Button onClick={() => this.props.removerDoCarrinho(produto.id)}>Remover</Button>
          </ContainerFlex>
        ))}
        {this.props.produtosCarrinho.length > 0 ? (
          <p>Valor Total: R$ {this.props.total},00</p>
        ) : (
          <p>O Carrinho está vazio</p>
        )}
      </Container>
    );
  }
}

export default Carrinho;
