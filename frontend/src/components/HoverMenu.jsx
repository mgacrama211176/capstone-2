import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { device } from '../media';
import { useSelector } from 'react-redux';

const Container = styled.div``;

const Wrapper = styled.div``;

const DropdownContainer = styled.div``;

const DropdownContent = styled.div`
  display: none;
`;

const Button = styled.div`
  cursor: pointer;

  &:hover ${DropdownContent} {
    display: inline-block;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  right: 10px;
  border: 1px solid red;
`;

const HoverMenu = () => {
  return (
    <Container>
      <Wrapper>
        <DropdownContainer>
          <Button>MENU</Button>
          <ContentWrapper>
            <DropdownContent>OPTIONS</DropdownContent>
            <DropdownContent>OPTIONS</DropdownContent>
            <DropdownContent>OPTIONS</DropdownContent>
            <DropdownContent>OPTIONS</DropdownContent>
            <DropdownContent>OPTIONS</DropdownContent>
          </ContentWrapper>
        </DropdownContainer>
      </Wrapper>
    </Container>
  );
};

export default HoverMenu;

//TEST
