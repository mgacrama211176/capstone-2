import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';
//MUI
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';

//Icons
import Facebook from '../assets/icons/facebook.png';
import Gmail from '../assets/icons/gmail.png';
import Linkedin from '../assets/icons/linkedin.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(90vh - 56px);
  color: ${({ theme }) => theme.titleColor};
  font-family: 'Roboto', sans-serif;
`;

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  background-color: ${({ theme }) => theme.bg};
  padding: 20px 50px;
  border: 1px solid;
  gap: 10px;
  border-radius: 20px;
  max-width: 50%;
`;

const Image = styled.img`
  max-width: 25%;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const Icons = styled.img`
  max-width: 5%;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const H4 = styled.h4``;

const HrContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #b2792d;
  max-width: 10px;
`;

const Input = styled.input`
  border-radius: 5px;
  padding: 5px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  font-weight: bolder;
  cursor: pointer;
  padding: 10px;
  margin-top: 10px;
  border-radius: 15px;
  border: 1px solid white;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.bg};
  transition: 0.5s ease-in;
  width: 15em;
  justify-content: center;
  &:hover {
    background-color: #fca326;
    color: white;
  }
`;

const Options = styled.div`
  display: flex;
  gap: 50px;
  margin: 5px 0px 40px 0px;
`;

const H6 = styled.h6`
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    color: #fca326;
    text-decoration: underline;
  }
`;

const Signin = () => {
  return (
    <Container>
      <LoginWrapper>
        <Image src={Logo}></Image>
        <Title>Login Using</Title>
        <IconsContainer>
          <Icons src={Facebook} alt="facebook"></Icons>
          <Icons src={Gmail} alt="gmail"></Icons>
          <Icons src={Linkedin} alt="linkedin"></Icons>
        </IconsContainer>
        <HrContainer>
          <Hr />
          Or
          <Hr />
        </HrContainer>
        <H4> Email Address </H4>
        <InputWrapper>
          <EmailIcon />
          <Input placeholder="Username@user.com" type="text" />
        </InputWrapper>
        <H4> Password </H4>
        <InputWrapper>
          <LockIcon />
          <Input placeholder="Password" type="password" />
        </InputWrapper>

        <InputWrapper>
          <Button>
            Login
            <LoginIcon />
          </Button>
        </InputWrapper>

        <Options>
          <H6>Not yet registered? </H6>
          <H6>Forgot Password </H6>
        </Options>
      </LoginWrapper>
    </Container>
  );
};

export default Signin;
