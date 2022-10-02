import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useLocation, useParams } from "react-router-dom";
import TimeLine from "../TimeComp/TimeLine";
import { useSelector } from "react-redux";
import axios from "axios";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

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
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  background-color: #ffc500;
  width: 200px;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-left: 40px;
  margin-bottom: 8px;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }
`;

const Prof = () => {
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
    <>
      <Profile>
        {retrivedUser._id ? (
          <>
            {" "}
            <ProfileName>
              <TypoName>{retrivedUser?.username}</TypoName>
              <TypoTitle>{retrivedUser?.email}</TypoTitle>
            </ProfileName>
            <ImgCon>
              <Pimg src={retrivedUser?.image}></Pimg>
            </ImgCon>
            <Pinfo>
              <TimeLine />
            </Pinfo>
          </>
        ) : (
          <>
            {" "}
            <ProfileName>
              <TypoName>{currentUser?.username}</TypoName>
              <TypoTitle>{currentUser?.email}</TypoTitle>
            </ProfileName>
            <ImgCon>
              <Pimg src={currentUser?.image}></Pimg>
            </ImgCon>
            <Pinfo>
              <TimeLine />
            </Pinfo>
          </>
        )}
        <CVbt variant="contained">
          Download CV
          <FileDownloadIcon />
        </CVbt>
      </Profile>
    </>
  );
};

export default Prof;
