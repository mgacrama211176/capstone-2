import React from 'react';
import styled from 'styled-components';
import background from '../assets/Overcome-bro.png';
import { useSelector } from 'react-redux';

//MUI
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

const Container = styled.div`
  margin: 0px 100px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const H1 = styled.h1``;

const AccountSet = styled.div`
  margin-top: 50px;
  font-size: 36px;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 20%;
  height: 10%;
  box-shadow: 5px 5px ${({ theme }) => theme.hover};
`;

const ImageContainer = styled.div`
  display: flex;
  flex-flow: wrap column;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 15px 15px 0 0;
  background-color: transparent;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpdateContainer = styled.div``;

const InputContainers = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FileUploadContainers = styled.div``;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Submit = styled.button``;

const UpdateProfile = () => {
  const { currentUser } = useSelector((state) => state.username);

  console.log(currentUser);

  return (
    <Container>
      <AccountSet>Account Update</AccountSet>
      <Wrapper>
        <CardContainer>
          <ImageContainer>
            <CardImage src={currentUser.image} />
            <UserInfo>{currentUser.username}</UserInfo>
            {currentUser.userCategory}
          </ImageContainer>
        </CardContainer>
        <UpdateContainer>
          <InputContainers>
            <TextField id="Username" label="Username" variant="outlined" />
            <TextField id="Email" label="Email" variant="outlined" />
            <TextField id="UserCat" label="User Category" variant="outlined" />
            <TextField
              id="password"
              label="password"
              variant="outlined"
              type="password"
            />
            <TextField id="Full Name" label="Full Name" variant="outlined" />
            <TextField id="Address" label="Address" variant="outlined" />

            <TextField
              id="BirthDate"
              // label="Birthdate"
              variant="outlined"
              type="date"
            />
            <TextField id="About" label="About" variant="outlined" />
            <FileUploadContainers>
              <TextField
                id="ProfileImage"
                label="Profile Image"
                variant="outlined"
              />
              <TextField
                id="ProfileBackground"
                label="Profile Background"
                variant="outlined"
              />
              <TextField id="uploadCV" label="uploadCV" variant="outlined" />
            </FileUploadContainers>
          </InputContainers>
          <SubmitContainer>
            <Submit>Update</Submit>
          </SubmitContainer>
        </UpdateContainer>
      </Wrapper>
    </Container>
  );
};

export default UpdateProfile;
