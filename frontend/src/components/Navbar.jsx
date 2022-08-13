import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImg from '../assets/Logo.png';
import { device } from '../media';

//MUI
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
  position: block;
  top: 0;
  background-color: ${({ theme }) => theme.bg};

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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 10px;
  justify-content: space-between;
  position: relative;

  /* Mobile S */
  @media ${device.mobileS} {
    max-width: 374px;
  }

  /* Mobile M */
  @media ${device.mobileM} {
    max-width: 424px;
  }

  /* Tablet */
  @media ${device.tablet} {
    max-width: 1023px;
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

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Burger = styled.div`
  cursor: pointer;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-content: center;
  gap: 5px;
`;

const Img = styled.img`
  height: 4rem;
`;

const Search = styled.div`
  position: absolute;
  left: 0px;
  right: 0;
  margin: auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #b2792d;
  border-radius: 5px;
  background-color: white;

  /* Mobile S */
  @media ${device.mobileS} {
    max-width: 20%;
  }

  /* Mobile L */
  @media ${device.mobileL} {
    max-width: 30%;
  }
`;

const Input = styled.input`
  background-color: transparent;
  width: 100%;
  height: 2em;
  font-family: Inter;
  border: none;
`;

const Button = styled.button`
  font-family: Inter;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: 0.2s ease-in;
  &:hover {
    background-color: transparent;
    border: 1px solid #b2792d;
    color: #b2792d;
  }

  /* Mobile S */
  @media ${device.mobileS} {
    padding: 5px 5px;
  }
`;

const Navbar = ({ setOpen, setClose }) => {
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          {}
          <Burger onClick={setOpen}>
            <MenuIcon />
          </Burger>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo>
              <Img src={logoImg} />
            </Logo>
          </Link>
        </LeftContainer>
        <Search>
          <Input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <SearchIcon />
        </Search>
        <Link to="/signin" style={{ textDecoration: 'none' }}>
          <Button>
            <PersonPinIcon />
            Sign In
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
