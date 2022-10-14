import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import Prof from "../components/Prof";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import BGimage from "../assets/neon.jpg";

//MUI ICONS
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FlagIcon from "@mui/icons-material/Flag";

//Media Queries
import { device } from "../media";

//Navigation Menu
import About from "../components/ProfileNavigation/About";
import VideoProfile from "../components/ProfileNavigation/VideoProfile";
import Updateprof from "../components/ProfileNavigation/Updateprof";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import axios from "axios";
import { current } from "@reduxjs/toolkit";

/* PROFILE Section*/
const ProfWrapper = styled.div`
  color: white;
  background: #00000081;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//Image Styling

const ImgCon = styled.figure`
  width: 10em;
  height: 10em;
  position: relative;
`;

const Imginner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
`;

const Pimg = styled.img`
  min-width: 100%;
  max-width: 105%;
  min-height: 100%;
  position: absolute;
  object-fit: cover;
`;

// PROF INFO STYLING

const Infowrapper = styled.div`
  padding: 4em 4em 8em 4em;
  width: 100%;
  margin-left: 30px;
`;

const Infoleft = styled.div`
  width: 100%;
  display: flex;
  gap: 2em;
  z-index: 5;
  border-radius: 10px;
`;

const Detailswrap = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5em;
  gap: 2em;
  z-index: 5;
  border-radius: 10px;
`;
const UsernameWrapper = styled.span`
  margin: 2.5rem 1rem;
  text-decoration: uppercase;
  font-size: 2rem;
`;
const Cattitle = styled.span`
  margin: 0;
`;
const TypoDetails = styled.div``;
const Typoemail = styled.p``;

const Subbtn = styled.button`
  margin: 10px;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  max-height: 50px;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  position: absolute;

  right: 0;
  top: 95px;
  background-color: #f51f1ff2;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-position: right center;

    text-decoration: none;
  }
  &:active {
    transform: scale(1.3);
  }
`;

//Navigation Bar

const NavWrapper = styled.div``;

const Bar = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  background-color: #fff;
  color: black;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
`;

//About Section

const Row = styled.div`
  display: flex;
`;
const Aboutwrapper = styled.div`
  color: white;
  background: #00000081;
  flex: 50%;
  padding: 10px;
  margin-left: 20px;
  display: inline-block;
`;

const Aboutme = styled.h1`
  padding-left: 5rem;
`;
const ContentWrap = styled.p`
  align-items: center;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin-left: 45px;
  padding: 3em 2em;
`;

const Aboutdetails = styled.p`
  align-items: center;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin-left: 45px;
  padding: 2em;
`;

//Video Sectiton

const VidWrapper = styled.div`
  color: white;
  background: #00000081;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-left: 20px;
`;

//Contact Section

const ContactWrapper = styled.div`
  color: white;
  background: #00000081;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-left: 20px;
`;

const Pageseparator = styled.hr``;

const Profile = ({ nav }) => {
  let { id } = useParams();

  const [retrivedUser, setRetrievedUser] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      const profile = await axios.get(
        `http://localhost:4000/api/users/find/${id}`
      );
      setRetrievedUser(profile.data);
    };
    getProfile();
  }, [id]);

  const currentUser = useSelector((state) => state.username.currentUser);

  const MainWrapper = styled.div`
    background-image: url("${BGimage}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    font-family: Roboto, Arial, sans-serif;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  `;

  console.log(currentUser);

  return (
    <MainWrapper>
      <ProfWrapper>
        <Infowrapper>
          <Infoleft>
            <ImgCon>
              <Imginner>
                <Pimg src={retrivedUser.image}></Pimg>
              </Imginner>
            </ImgCon>

            <UsernameWrapper>
              {retrivedUser.fullName !== undefined
                ? retrivedUser.fullName
                : retrivedUser.username}
              <br />
              {retrivedUser.userCategory}

              <PersonOutlineIcon />
            </UsernameWrapper>
            <Subbtn>Subscribe</Subbtn>
          </Infoleft>
          <Detailswrap>
            <Cattitle></Cattitle>
            {/* <Typoemail>{retrivedUser.email}</Typoemail> */}

            <TypoDetails>
              {/* Address: {retrivedUser.address} */}
              {retrivedUser.subscribers} Subscribers
              <br />
              {retrivedUser?.subscribedUsers?.length} Subscribed Users
            </TypoDetails>
          </Detailswrap>
        </Infowrapper>
      </ProfWrapper>
      <Pageseparator />
      <Row>
        <Aboutwrapper>
          <Aboutme>About Me</Aboutme>
          <Aboutdetails>
            Even though I didn’t know it until several years later, my first
            foray into Japanese culture was watching cartoons on Saturday
            mornings. Entranced by the fantastic plot lines, giant eyes, and
            wonderful animation, I was watching anime without even knowing it.
            Anime means “animation” in Japan, so in theory, could apply to any
            form of animation from around the world, but in modern times has
            come to refer to any and all Japanese animation. When most people
            think of anime they think of vibrant and beautifully drawn scenes,
            that are both dramatic and heartfelt, sometimes with just a hint of
            magic. The history of anime in Japan can be traced back to the late
            19th century. In fact, it was a French art movement called
            "Japonisme" that helped inspire Japanese artists and create some of
            the first examples of modern animation. However, it wasn't until
            World War II when Japan's government started promoting cartoons as a
            way to raise morale that the style really took off.
          </Aboutdetails>
          <ContentWrap>
            <hr />
            <h3>Details</h3>
            <hr />
            Name:{" "}
            {retrivedUser.fullName !== undefined
              ? retrivedUser.fullName
              : retrivedUser.username}
            <hr />
            <p>Contact user via email: {retrivedUser.email} </p>
            <hr />
            <p>Address: {retrivedUser.address}Cebu City</p>
          </ContentWrap>
        </Aboutwrapper>
        <Aboutwrapper>
          <ContentWrap>
            <h3>Stats</h3>
            <hr />
            <p>Joined {currentUser.createdAt}</p>
            <hr />
            <p>Total views: 100</p>
            <hr />
            <p>
              Report User <FlagIcon />
            </p>
          </ContentWrap>
        </Aboutwrapper>
      </Row>
      <Pageseparator />
      <VidWrapper>
        <About />
        <Aboutme>Videos</Aboutme>
      </VidWrapper>
      <Pageseparator />
      <ContactWrapper>
        <Aboutme>Contact Me</Aboutme>
      </ContactWrapper>
      <Footer />
    </MainWrapper>
  );
};

export default Profile;
