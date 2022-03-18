import React from 'react';
import styled from 'styled-components';
import Logo from './logo.jpg';

const StyledWrapper = styled.div`
  background-color: hsl(228, 56%, 98%);
  font-size: 40px;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

const LoadingPage = () => <StyledWrapper> <img style={{marginTop:"17%"}} src={Logo} /> </StyledWrapper>;

export default LoadingPage;
