import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContainerError, Logo } from './styles';
import logo from '../../assets/images/logo.png';

export default function InvalidRoute() {
  return (
    <Container>
      <ContainerError>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <p>404 - ROTA INVÁLIDA</p>
        <Link to="/">
          <p>Volta tela SignIn</p>
        </Link>
      </ContainerError>
    </Container>
  );
}
