import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerError = styled.div`
  height: 448px;
  width: 100%;
  max-width: 360px;
  display: flex;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px;

  p {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 50px;
  }
`;

export const Logo = styled.img`
  height: 100px;
  width: 153px;
  margin: 50px;
`;
