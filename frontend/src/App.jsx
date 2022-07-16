import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { coloredTheme, darkTheme } from './utils/Theme';

const Continer = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.content};
`;
const Wrapper = styled.div``;

const App = () => {
  const [darkmode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkmode ? coloredTheme : darkTheme}>
      <Continer>
        <Menu setDarkMode={setDarkMode} darkmode={darkmode} />
        <Main setDarkMode={setDarkMode} darkmode={darkmode}>
          <Navbar />
          <Wrapper>Video Wrapper</Wrapper>
        </Main>
      </Continer>
    </ThemeProvider>
  );
};

export default App;
