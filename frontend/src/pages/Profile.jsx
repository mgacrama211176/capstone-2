import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import Prof from "../components/Prof";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import BGimage from "../assets/bgimage.jpg";

import { Grid, Container } from "@mui/material";

//Media Queries
import { device } from "../media";

//Navigation Menu
import About from "../components/ProfileNavigation/About";
import VideoProfile from "../components/ProfileNavigation/VideoProfile";
import Updateprof from "../components/ProfileNavigation/Updateprof";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import axios from "axios";

const MainWrapper = styled.div`
  /* background-color */
  background:linear-gradient(90deg, rgba(18, 42, 177, 1) 0%, rgba(94, 111, 207, 1) 50%, rgba(112, 44, 147, 1) 100%);
  display: flex;
  border-radius: 25px;
  color: white;
  font-family: Roboto, Arial, sans-serif;
  margin: 100%;
  padding 0;
  margin-top: 10px;
  margin-left: 80px;
  margin-right: 80px;
  align-items: center;
  justify-content: center;

  
  
`;

const ProfileWrapper = styled.div`
background:linear-gradient(90deg, rgba(188, 0, 255, 1) 0%, rgba(36, 119, 187, 1) 50%, rgba(14, 9, 197, 1) 100%);
  display: flex;
  border-radius: 25px;
  color: white;
  font-family: Roboto, Arial, sans-serif;
  margin: 100%;
  padding 0;
  margin-top: 10px;
  margin-left: 80px;
  margin-right: 80px;
  align-items: center;
 `;

const Videowrapper = styled.div`
  background: linear-gradient(
    90deg,
    rgba(188, 0, 255, 1) 0%,
    rgba(36, 119, 187, 1) 50%,
    rgba(14, 9, 197, 1) 100%
  );

  display: flex;
  border-radius: 25px;
  color: white;
  font-family: Roboto, Arial, sans-serif;
  margin: 100%;
  padding 0;
  margin-top: 10px;
  margin-left: 80px;
  margin-right: 80px;
  align-items: center;
  justify-content: center;
`;

const ImgCon = styled.figure`
  margin-top: 0.5%;

  object-fit: cover;
  width: 90px;
  -webkit-clip-path: circle(46% at 50% 50%);
  clip-path: circle(46% at 50% 50%);
`;

const Pimg = styled.img`
  object-fit: cover;
`;

const TypoName = styled.p`
  padding: 2rem;
  text-decoration: uppercase;
  font-size: 2rem;
  align-content: center;
`;

const TypoDetails = styled.p`
  padding: 2rem;
`;
const Typoemail = styled.p`
  padding: 2rem;
`;

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

  return (
    <MainWrapper>
      <ProfileWrapper>
        <ImgCon>
          <Pimg src={retrivedUser.image}></Pimg>
        </ImgCon>
        <Typoemail>{retrivedUser.email}</Typoemail>
        <TypoName>
          {retrivedUser.fullName !== undefined
            ? retrivedUser.fullName
            : retrivedUser.username}
        </TypoName>

        <TypoDetails>User Category {retrivedUser.userCategory}</TypoDetails>
        <TypoDetails>
          <br />
          {/* Address: {retrivedUser.address} */}
          {retrivedUser.subscribers} Subscribers <br />
          {retrivedUser?.subscribedUsers?.length} Subscribed Users
        </TypoDetails>
      </ProfileWrapper>
    </MainWrapper>
  );
};

export default Profile;
