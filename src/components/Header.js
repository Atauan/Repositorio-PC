import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: SlateBlue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 0 40px;
`;

const Login = styled.button`
  font-size: 16px;
  margin: 0 40px;
	padding: 8px;
	border-radius: 8px;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: lightgrey;
	}
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Logo>LabCommerce</Logo>
        <Login>LOGIN</Login>
      </HeaderContainer>
    );
  }
}
