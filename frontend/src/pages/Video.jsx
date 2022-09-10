import React from "react";
import styled, { css } from "styled-components";
import CommentsBox from "../components/CommentsBox";
import ViewComments from "../components/ViewComments";
import Card from "../components/Card";
//MUI
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

//framer motion
import { motion } from "framer-motion";

//Media Queries
import { device } from "../media";

const Container = styled.div`
  display: flex;
  gap: 24px;
  font-family: "Roboto", sans-serif;
  max-width: 100vw;
`;

const Content = styled.div`
  flex: 5;
  max-width: 100vw;
`;
const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 100vw;
`;

const Iframe = styled.iframe`
  margin-top: 10px;
  border: none;
  width: 100%;
  height: 30vh;
`;

const VideoInformationContainer = styled.div`
  padding: 5px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.titleColor};

  @media ${device.mobileS} {
    font-size: 14px;
    font-weight: 600;
  }
`;

const Details = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;

  @media ${device.mobileS} {
    font-size: 11px;
    font-weight: 600;
  }
`;

const Info = styled.span`
  color: ${({ theme }) => theme.titleColor};

  @media ${device.mobileS} {
    font-size: 11px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.titleColor};
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Like = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: transform 0.2s;
  &:hover {
    color: #0675e8;

    transform: scale(1.1);
  }
`;
const Dislike = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: transform 0.2s;
  &:hover {
    color: red;

    transform: scale(1.1);
  }
`;

const Share = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: transform 0.2s;
  &:hover {
    color: #e3930e;

    transform: scale(1.1);
  }
`;

const Save = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: transform 0.2s;
  &:hover {
    color: #04a86c;

    transform: scale(1.1);
  }
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0px;
  width: 100%;
`;

const Recommendation = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  flex-direction: row;
  max-width: 100vw;
  gap: 3rem;

  overflow: auto;
  white-space: nowrap;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.titleColor};
`;

const ChannelName = styled.span`
  font-weight: bold;
`;

const ChannelCounter = styled.span`
  margin: 5px 0 20px 0;
  color: ${({ theme }) => theme.titleColor};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;

  @media ${device.mobileS} {
    font-size: 12px;
    margin-bottom: 20px;
  }
`;

const Subscribe = styled.button`
  background-color: red;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 10px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  &:hover {
    animation: shake 0.5s;
    animation-iteration-count: infinite;
  }
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }

  /* Mobile S */
  @media ${device.mobileS} {
    padding: 5px 10px;
    gap: 3px;
    font-size: 12px;
  }
`;

const Video = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opcaity: 0 }}
    >
      <Container>
        <Content>
          <VideoWrapper>
            <Iframe src="https://www.youtube.com/embed/GtL1huin9EE"></Iframe>
          </VideoWrapper>

          <VideoInformationContainer>
            <Title>Test Vid</Title>
            <Info>7, 948,154 views • Jun 22,2022</Info>
            <Hr />
            <Details>
              <Buttons>
                <Like>
                  <ThumbUpIcon />
                  123
                </Like>
                <Dislike>
                  <ThumbDownIcon />
                  Dislike
                </Dislike>
                <Share>
                  <ScreenShareIcon />
                  Share
                </Share>
                <Save>
                  <SaveAltIcon />
                  Save
                </Save>
              </Buttons>
            </Details>

            <Hr />
            <Channel>
              <ChannelInfo>
                <Image src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
                <ChannelDetail>
                  <ChannelName>Animator</ChannelName>
                  <ChannelCounter>200K subscribers</ChannelCounter>
                </ChannelDetail>
              </ChannelInfo>

              <Subscribe>
                <NotificationsActiveIcon />
                SUBSCRIBE
              </Subscribe>
            </Channel>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis ipsa dolorem facere numquam, culpa aspernatur
              consequuntur amet nemo accusantium hic nulla commodi architecto
              eos, at nostrum nesciunt consequatur! Aperiam, aut!
            </Description>

            <Title>Recommended Videos</Title>

            <Recommendation>{/* <Card type="sm" /> */}</Recommendation>

            <ViewComments></ViewComments>

            <CommentsBox />
            <CommentsBox />
            <CommentsBox />
            <CommentsBox />
            <CommentsBox />
            <CommentsBox />
            <CommentsBox />
            <CommentsBox />
            <CommentsBox />
          </VideoInformationContainer>
        </Content>
      </Container>
    </motion.div>
  );
};

export default Video;
