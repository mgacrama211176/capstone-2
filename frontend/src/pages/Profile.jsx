import React from "react";
import styled from "styled-components";

//Components
import Card from "../components/Card";

//MUI
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bg};
`;

const Icons = styled.div``;

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

const About = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const H1 = styled.h1`
  font-family: "Inter", sans-serif;
  color: white;
`;

const H3 = styled.h3`
  color: ${({ theme }) => theme.titleColor};
  padding: 10px;
`;

const H4 = styled.h4`
  font-family: "Inter", sans-serif;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #b2792d;
    text-decoration: underline;
  }
`;

const H5 = styled.h5`
  color: ${({ theme }) => theme.profileSubs};
`;

const DescriptionContainer = styled.div`
  padding: 10px;
`;
const Description = styled.h4``;

const Textarea = styled.textarea`
  padding: 10px;
`;

const ProfileLinks = styled.div`
  display: flex;
  gap: 70px;
  padding: 20px;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 100vw;
`;

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
            <H5>Subscribers: 0</H5>
          </ProfileHeader>
        </ProfileNav>
        <ProfileLinks>
          <H4>Home</H4>
          <H4>Videos</H4>
          <H4>Saved</H4>
          <H4>About</H4>
        </ProfileLinks>
      </Wrapper>
      <About>
        <H3>About</H3>

        <EditIcon />
      </About>

      <DescriptionContainer>
        <Description>Description: </Description>
        <Textarea
          cols="100"
          rows="10"
          placeholder="Tell us about yourself animator"
        ></Textarea>
      </DescriptionContainer>
      <H3>Subscribed</H3>

      <H3>My Uploads</H3>
      <UploadWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </UploadWrapper>
    </Container>
  );
};

export default Profile;
