import React from 'react';
import styled from 'styled-components';
import background from '../assets/Overcome-bro.png';

//MUI
import { Container } from '@mui/material';

const Wrapper = styled.div``;

const H1 = styled.h1``;

const AccountSet = styled.div`
  margin-top: 50px;
`;

const UpdateProfile = () => {
  return (
    <Container sx={{ margin: '0px 100px' }}>
      <Wrapper>
        <AccountSet>Account Settings</AccountSet>
      </Wrapper>
    </Container>
  );
};

export default UpdateProfile;
