import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/Overcome-bro.png";
const ariaLabel = { "aria-label": "description" };
import { useSelector } from "react-redux";

import axios from "axios";

//MUI
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

const Container = styled.div`
  margin: 0px 100px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
  padding: 30px;
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
  width: 25em;
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
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  gap: 10px;
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

  const [newData, setNewData] = useState({
    username: "",
    Email: "",
    userCategory: "",
    fullName: "",
    address: "",
    birthdate: "",
    about: "",
  });

  const onChangeHandle = (e) => {
    const newUser = { ...newData };
    newUser[e.target.id] = e.target.value;
    setNewData(newUser);
  };

  const onClickUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const update = await axios.post(
        `http://localhost:4000/api/users/${currentUser._id}`,
        {
          username: newData.username,
          Email: newData.Email,
          userCategory: newData.userCategory,
          fullName: newData.fullName,
          address: newData.address,
          birthdate: newData.birthdate,
          about: newData.about,
        }
      );
      console.log(update);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <AccountSet>Account Update</AccountSet>
      <Wrapper>
        <CardContainer>
          <ImageContainer>
            <CardImage src={currentUser.image} />
            <UserInfo>
              <p>{currentUser.username}</p>
              <p>{currentUser.userCategory}</p>
            </UserInfo>
          </ImageContainer>
        </CardContainer>
        <UpdateContainer>
          <InputContainers>
            <TextField
              disabled
              id="Email"
              label={currentUser.email}
              variant="outlined"
              placeholder="Email"
            />
            <TextField
              id="username"
              label={currentUser.username}
              variant="outlined"
              placeholder="Channel Name"
              onChange={(e) => onChangeHandle(e)}
            />

            <TextField
              id="userCategory"
              label={currentUser.userCategory}
              variant="outlined"
              placeholder="Category"
              onChange={(e) => onChangeHandle(e)}
            />
            {currentUser.fullName ? (
              <TextField
                id="fullName"
                label={currentUser.fullName}
                variant="outlined"
                placeholder="Full Name"
                onChange={(e) => onChangeHandle(e)}
              />
            ) : (
              <TextField
                id="fullName"
                label="Full Name"
                variant="outlined"
                placeholder="Full Name"
                onChange={(e) => onChangeHandle(e)}
              />
            )}

            {currentUser.address ? (
              <TextField
                id="address"
                label={currentUser.address}
                variant="outlined"
                placeholder="Address"
                onChange={(e) => onChangeHandle(e)}
              />
            ) : (
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                placeholder="Address"
                onChange={(e) => onChangeHandle(e)}
              />
            )}

            <TextField
              id="birthdate"
              // label="Birthdate"
              variant="outlined"
              type="date"
              onChange={(e) => onChangeHandle(e)}
            />
            <TextField
              id="about"
              label={`About the ${currentUser.userCategory}`}
              variant="outlined"
              multiline
              maxRows={50}
              onChange={(e) => onChangeHandle(e)}
            />

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
            <Submit onClick={onClickUpdateSubmit}>Update</Submit>
          </SubmitContainer>
        </UpdateContainer>
      </Wrapper>
    </Container>
  );
};

export default UpdateProfile;
