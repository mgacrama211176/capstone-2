import React from "react";
import styled from "styled-components";
import ProfileImg from "../assets/loid.jpg";
import Accountpic from "../assets/Shots.jpg";

const Container = styled.div``;

const Wrapper = styled.div``;

const Hero = styled.div`
  position: absolute;
`;

const HeroImg = styled.img`
  width: 100%;
  z-index: -1;
  z-index: -1;
  max-height: 60vh;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
`;

const ProfileHeader = styled.div`
  max-width: 50%;
`;

const AccountImg = styled.img`
  width: 80%;
`;

const AccountInfomation = styled.div``;

const H1 = styled.h1``;

const P = styled.p``;

const BasicInfo = styled.div`
  gap: 10px;
`;

const Counters = styled.div`
  display: flex;
  gap: 10px;
`;

const About = styled.p``;

function Profile() {
  return (
    <Container>
      <Wrapper>
        <Hero>
          <HeroImg src={ProfileImg}></HeroImg>
        </Hero>
        <GridContainer>
          <ProfileHeader>
            <AccountImg src={Accountpic} />
            <About>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              tempore velit itaque optio est voluptatum ex praesentium
              repellendus illo asperiores sapiente ad quod sit nulla omnis,
              perspiciatis reprehenderit enim! Animi!
            </About>
          </ProfileHeader>
          <AccountInfomation>
            <H1>Marlon Gacrama Jr</H1>
            <BasicInfo>
              <Counters>
                <P>Followers: 123</P>
                <P>Likes: 123</P>
                <P>Views: 123</P>
              </Counters>
              <P>Email: mgacrama_ccs@uspf.edu.ph</P>
            </BasicInfo>
          </AccountInfomation>
        </GridContainer>
      </Wrapper>
    </Container>
  );
}

export default Profile;
