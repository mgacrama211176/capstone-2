import React from "react";
import styled from "styled-components";

//MUI
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
`;

const Wrapper = styled.div``;

const Banner = styled.div`
  max-width: 100vw;
  height: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-image: url("https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const CustomizeBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  max-width: 20px;
  min-height: 20px;
  border: 1px solid transparent;
  border-radius: 100%;
  margin: 10px;
  padding: 5px;
  align-items: center;
  transition-duration: 1s;
  z-index: 1;
  color: white;
  &:hover {
    background-color: #132550;
  }
`;

const ProfileNav = styled.div`
  display: flex;
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ProfilePhoto = styled.img`
  border: 1px solid transparent;
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 100%;
`;

const H1 = styled.h1`
  font-family: "Inter", sans-serif;
`;

const H4 = styled.h4``;

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <Banner>
          <CustomizeBanner>
            <CameraAltIcon />
          </CustomizeBanner>
        </Banner>
        <ProfileNav>
          <ProfilePhoto src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
          <ProfileHeader>
            <H1>Animator</H1>
            <H4>Subscribers: 0</H4>
          </ProfileHeader>
        </ProfileNav>
      </Wrapper>
    </Container>
  );
};

export default Profile;
