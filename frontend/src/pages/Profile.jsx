import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import Prof from "../components/Prof";
import Header from "../components/Header";
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

const ProfileWrapper = styled.div`
  background-color: white;
  border-radius: 6px;
  width: 20%;
  height: 50%;
  display: inline-block;
  border: 1px solid black;
  margin: 5px;
  padding: 0px;
  display: flex;
`;

const ImgCon = styled.figure`
  width: 50%;
  height: 50%;
  display: flex;
  margin-left: 20%;
  align-items: center;
  object-fit: cover;
  clip-path: circle(45% at 50% 50%);

  /* <clipPath id="svgPath" clipPathUnits="objectBoundingBox">
            <circle r="0.05" cy="0.0625" cx="0.1625" />
            <circle r="0.09322" cy="0.29375" cx="0.2424" /> 
            <!-- rest of path here-->
        </clipPath> */
`;

const Pimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:focus img {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }
  &:focus img:hover {
    border: 70px solid #000;
    border-radius: 50%;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }
`;

const TypoName = styled.p`
  text-decoration: uppercase;
  font-size: 17px;
  font-weight: bold;
  font-family: Roboto, Arial, sans-serif;
  margin-top: 60%;
  align-content: center;
  margin-left: -43%;
`;

const TypoTitle = styled.p`
  font-size: 13px;
  color: #777;
  font-family: Roboto, Arial, sans-serif;
  margin-top: 70%;
  align-content: center;
  margin-left: -43%;
`;

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const CVbt = styled.button`
  appearance: button;
  background-color: #132550;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #000 4px 4px 0 0, #000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #ffff;
  cursor: pointer;
  display: inline-block;
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  font-weight: bolder;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  margin-left: 40px;
  margin-bottom: 8px;
  &:focus {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
  }
  &:not([disabled]):active {
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
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
        <TypoName>
          {retrivedUser.fullName !== undefined
            ? retrivedUser.fullName
            : retrivedUser.username}
        </TypoName>
        <TypoTitle>{retrivedUser.email}</TypoTitle>
        {/* User Category: {retrivedUser.userCategory}
        Address: {retrivedUser.address}
        Subscribers: {retrivedUser.subscribers}
        Subscribed Users: {retrivedUser?.subscribedUsers?.length} */}
      </ProfileWrapper>
      <Header />
    </MainWrapper>
  );
};

export default Profile;
