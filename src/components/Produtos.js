import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;
const Imagem = styled.img`
  width: 240px;
`;
const Button = styled.button `
margin-bottom: 12px;
border-radius: 10px;
border: none;
padding: 10px;
cursor: pointer;
&:hover {
background-color: lightgrey;
}
`

class Produtos extends React.Component {
  render() {
    return (
      <CardContainer>
        <Imagem src={this.props.produtos.foto} alt="imagem" />
        <div>
          <p>{this.props.produtos.nome}</p>
          <p>R$ {this.props.produtos.preco},00 </p>
          <Button onClick={() => this.props.adicionarAoCarrinho(this.props.produtos.id)}>
            Adicionar ao carrinho
          </Button>
        </div>
      </CardContainer>
    );
  }
}

export default Produtos;
