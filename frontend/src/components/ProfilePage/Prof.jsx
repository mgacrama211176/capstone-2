import React from "react";
import styled from "styled-components";
import Shots from "../../assets/Shots.jpg";

const Profile = styled.div`
  background-color: white;
  border-radius: 6px;
  width: 100%;
  display: inline-block;
`;

const ProfileName = styled.div``;
const ImgCon = styled.figure`
  margin-top: -10px;
  -webkit-clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
  clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
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
  return (
    <Profile>
      <ProfileName>
        <TypoName>Steve</TypoName>
        <TypoTitle>Fil Animator</TypoTitle>
      </ProfileName>
      <ImgCon>
        <Pimg src={Shots}></Pimg>
      </ImgCon>
      <Pinfo>Insert Timeline</Pinfo>
    </Profile>
  );
};

export default Prof;
