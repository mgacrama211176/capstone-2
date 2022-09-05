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

  /* Mobile S */
  @media ${device.mobileS} {
    max-width: 320px;
  }

  /* Mobile M */
  @media ${device.mobileM} {
    max-width: 424px;
  }

  /* Mobile L */
  @media ${device.mobileL} {
    max-width: 767px;
  }

  /* Tablet */
  @media ${device.tablet} {
    max-width: 1023px;
  }

  /* Tablet */
  @media ${device.laptop} {
    max-width: 1024px;
  }

  /* laptop */
  @media ${device.laptop} {
    max-width: 1440px;
  }

  /* laptop L */
  @media ${device.laptopL} {
    max-width: 1919px;
  }

  /* Desktop */
  @media ${device.desktop} {
    max-width: 2559px;
  }
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.content};
`;
const Wrapper = styled.div``;

const App = () => {
  const [darkmode, setDarkMode] = useState(true);

  const [burger, setBurger] = useState('none');

  const setOpen = () => {
    if (burger === 'none') {
      setBurger('block');
    } else setBurger('none');
    // setBurger("block");
  };
  return (
    <ThemeProvider theme={darkmode ? coloredTheme : darkTheme}>
      <Continer>
        <BrowserRouter>
          <Menu
            setDarkMode={setDarkMode}
            darkmode={darkmode}
            burger={burger}
            style={{ position: 'relative', zIndex: '100' }}
          />
          <Main setDarkMode={setDarkMode} darkmode={darkmode}>
            <Navbar
              setOpen={setOpen}
              style={{ position: 'relative', zIndex: '1' }}
            />
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
