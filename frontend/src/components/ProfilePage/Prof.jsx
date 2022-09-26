import React from "react";
import styled from "styled-components";
import Shots from "../../assets/Shots.jpg";
import TimeLine from "../TimeComp/TimeLine";

import FeedIcon from "@mui/icons-material/Feed";

import { useSelector } from "react-redux";

const Profile = styled.div`
  background-color: white;
  border-radius: 6px;
  width: 100%;
  display: inline-block;
  border: 1px solid black;
  margin: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ProfileName = styled.div`
  padding: 20px;
`;

const ImgCon = styled.figure`
  margin-top: -10px;
  -webkit-clip-path: polygon(0 9%, 100% 100%, 50% 94%, 0% 100%);
  clip-path: polygon(0 9%, 100% 0, 100% 85%, 0% 100%);
`;

const Pimg = styled.img`
  width: 100%;
`;

const Pinfo = styled.div``;
const TypoName = styled.p`
  text-decoration: uppercase;
  font-size: 17px;
  font-weight: bold;
`;
const TypoTitle = styled.p`
  font-size: 13px;
  color: #777;
`;

const CVbt = styled.button`
  border-radius: 5rem;
  align-items: center;
  background-clip: padding-box;
  background-color: #ffc500;
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
  margin-left: 64px;

  &:hover,
  :focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }
  &:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;

const Prof = () => {
  const currentUser = useSelector((state) => state.username.currentUser);
  return (
    <Profile>
      <ProfileName>
        <TypoName>{currentUser.username}</TypoName>
        <TypoTitle>{currentUser.email}</TypoTitle>
      </ProfileName>
      <ImgCon>
        <Pimg src={currentUser.image}></Pimg>
      </ImgCon>
      <Pinfo>
        <TimeLine />
      </Pinfo>
      <CVbt variant="contained">
        Download CV <FeedIcon />
      </CVbt>
    </Profile>
  );
};

export default Prof;
