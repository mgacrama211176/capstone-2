import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { coloredTheme, darkTheme } from './utils/Theme';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import { device } from './media';

const Continer = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.content};
`;
const Wrapper = styled.div`
  padding: 22px 96px;

  /* LAPTOP */
  @media ${device.laptop} {
    padding: 22px 46px;
  }

  /* TABLET */
  @media (max-width: 768px) {
    padding: 22px 36px;
  }
`;

const App = () => {
  const [darkmode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkmode ? coloredTheme : darkTheme}>
      <Continer>
        <BrowserRouter>
          <Menu setDarkMode={setDarkMode} darkmode={darkmode} />
          <Main setDarkMode={setDarkMode} darkmode={darkmode}>
            <Navbar />
            <Wrapper>
              <AnimatedRoutes />
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Continer>
    </ThemeProvider>
  );
};

export default App;
