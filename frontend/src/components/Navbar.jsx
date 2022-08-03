import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//MUI
import PersonPinIcon from "@mui/icons-material/PersonPin";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative; ;
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
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  height: 2em;
  font-family: Inter;
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
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <SearchIcon />
        </Search>
        <Link to="/signin" style={{ textDecoration: "none" }}>
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
