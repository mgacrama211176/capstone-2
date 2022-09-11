import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 30px;
  padding: 5px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: white;
`;

const ContainerWrapper = styled.div`
  color: black;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavigationItems = styled.div`
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Navigation>
          <NavigationItems>HOME</NavigationItems>
          <NavigationItems>VIDEOS</NavigationItems>
          <NavigationItems>WORK HISTORY</NavigationItems>
          <NavigationItems>UPDATE INFORMATION</NavigationItems>
        </Navigation>
      </ContainerWrapper>
    </Container>
  );
};

export default Header;
