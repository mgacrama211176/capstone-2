import React from 'react';
import styled from 'styled-components';

import ProfileImg from '../assets/Body.jpg';

import Card from '../components/Card';
import Footer from '../components/Footer';

import DefaultImage from '../assets/landscape.jpg';

//MUI ICONS
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Container = styled.div`
  scroll-behavior: smooth;
  height: 100vh;
`;

const Wrapper = styled.div``;

const ProfileHeading = styled.div`
  height: 100%;
`;

const Info = styled.div`
  display: grid;
  grid-template-row: auto auto;
`;

const BasicInfo = styled.div`
  display: flex;
  border: 1px solid red;
  background-image: url(${DefaultImage});
`;

const BasicInfoWrapper = styled.div`
  display: flex;
  border: 1px solid blue;
  align-items: center;
  flex-flow: wrap column;
  cursor: pointer;
  padding: 10px;
  /* max-width: fit-content; */
  width: 50%;

  &:hover {
    opacity: 0.8;
  }
`;

const ImgContainer = styled.div`
  width: 15%;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10%;
`;

const AnimatorName = styled.h1`
  cursor: pointer;
  transition-duration: 2s;
  font-size: 200%;
  font-weight: 500;
`;

const AnimatorJobDesc = styled.div`
  font-size: 1.7rem;
  font-weight: 100;
`;

const Email = styled.p`
  font-size: 1.3rem;
`;

const SocialMediaWrapper = styled.div`
  margin-top: 5px;
  gap: 15px;
`;

const AboutAnimator = styled.div`
  display: flex;
  border: 1px solid green;
`;

const ProfileNavigator = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 3rem;
  height: 50px;
`;

const Options = styled.div`
  margin: 10px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: 900;
  &:hover {
    color: #b2792d;
    text-decoration: underline;
  }
`;

const AboutSide = styled.div``;

const ProfileVideoContainer = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
`;

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <ProfileHeading>
          <Info>
            <BasicInfo>
              <BasicInfoWrapper>
                <ImgContainer>
                  <Img src={ProfileImg}></Img>
                </ImgContainer>
                <AnimatorName>Marlon Gacrama Jr.</AnimatorName>
                <AnimatorJobDesc>Full-Stack Web Developer</AnimatorJobDesc>
                <Email>mgacrama_ccs@uspf.edu.ph</Email>
                <SocialMediaWrapper>
                  <FacebookIcon />
                  <InstagramIcon />
                  <YouTubeIcon />
                  <LinkedInIcon />
                  <TwitterIcon />
                </SocialMediaWrapper>
              </BasicInfoWrapper>
              <AboutSide>{/* <H1>ABOUT</H1> */}</AboutSide>
            </BasicInfo>
            <AboutAnimator>
              <ProfileNavigator>
                <Options>Videos</Options>
                <Options>Art Works</Options>
                <Options>Experience</Options>
              </ProfileNavigator>
            </AboutAnimator>
          </Info>
          <ProfileVideoContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ProfileVideoContainer>
        </ProfileHeading>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Profile;
