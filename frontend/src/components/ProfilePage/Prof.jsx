import React from "react";
import styled from "styled-components";
import Shots from "../../assets/Shots.jpg";
import TimeLine from "./TimeLine";

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
    </Profile>
  );
};

export default Prof;
