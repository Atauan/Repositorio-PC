import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  margin: 10px;
  padding: 10px;
  
`;

const Titulo = styled.h2`
  text-align: center;
  margin-bottom: 1em;
`;

const InputTag = styled.div`
  margin: 10px 0;
`;

class Filtro extends React.Component {
  
  listaFiltrada = () => {
    return this.props.produtos
      .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.preco - b.preco : b.preco - a.preco)
      .filter((produto) => produto.nome.toLowerCase().includes(this.props.peloNome.toLowerCase()))
      .filter((produto) => produto.preco >= this.props.valorMinimo || this.props.valorMinimo === '')
      .filter((produto) => produto.preco <= this.props.valorMaximo || this.props.valorMaximo === '' );
      
  };
  render() {
    return (
      <Container>
        <Titulo> Filtros </Titulo>
        <InputTag>
          <label>Valor Mínimo </label>
          <br />
          <input
            type="number"
            value={this.props.valorMinimo}
            onChange={this.props.onChangeValorMinimo}
          />
        </InputTag>
        <InputTag>
          <label>Valor Maximo </label>
          <br />
          <input
            type="number"
            value={this.props.valorMaximo}
            onChange={this.props.onChangeValorMaximo}
          />
        </InputTag>
        <InputTag>
          <label>Nome do produto </label>
          <br />
          <input type="text" value={this.props.peloNome} onChange={this.props.onChangePeloNome} />
        </InputTag>
      </Container>
    );
  }
}
export default Filtro;
