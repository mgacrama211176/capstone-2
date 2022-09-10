import React from 'react';
import styled, { css } from 'styled-components';

//MUI ICONS
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Container = styled.div`
  max-width: 100vw;
  position: relative;
`;

const SharedStyle = css`
  display: flex;
  flex-flow: wrap row;
  color: white;
`;

const Wrapper = styled.div`
  background-color: #132550;
  ${SharedStyle}
  flex-flow: wrap column;
  align-items: center;
  justify-content: center;
`;
const H2 = styled.h2`
  color: white;
`;
const P = styled.p`
  color: white;
  margin-bottom: 10px;
`;

const IconWrapper = styled.div`
  ${SharedStyle}
  gap: 1rem;
  margin-bottom: 10px;
`;

const Copyright = styled.div`
  background-color: #0e54bd;
  ${SharedStyle}
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 2rem;
`;

function Footer() {
  return (
    <Container>
      <Wrapper>
        <H2>ABOUT</H2>
        <br></br>
        <P>Lorem ipsum Lorem ipsum Lorem ipsum</P>
        <IconWrapper>
          <FacebookIcon style={{ cursor: 'pointer' }} />
          <InstagramIcon style={{ cursor: 'pointer' }} />
          <TwitterIcon style={{ cursor: 'pointer' }} />
        </IconWrapper>
        <Copyright>
          <CopyrightIcon />
          <p>2022 CopyRight: Filanime.com</p>
        </Copyright>
      </Wrapper>
    </Container>
  );
}

export default Footer;
