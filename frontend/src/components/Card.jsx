import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tile from "../assets/home_post_2.gif";
import { device } from "../media";

const Container = styled.div`
  max-width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  display: ${(props) => (props.type === "sm" ? "flex" : "")};
  cursor: pointer;
  flex-wrap: wrap;

  /* Mobile S [fixed]*/
  @media ${device.mobileS} {
    gap: 5px;
    margin: ${(props) => (props.type === "sm" ? "15px 0px" : "0px")};
    max-width: ${(props) => (props.type === "sm" ? "340px" : "300px")};
    gap: ${(props) => (props.type === "sm" ? "15px" : "0px")};
  }

  /* Mobile M */
  @media ${device.mobileM} {
    gap: 5px;
    margin: ${(props) => (props.type === "sm" ? "15px 0px" : "0px")};
    max-width: ${(props) => (props.type === "sm" ? "340px" : "300px")};
    gap: ${(props) => (props.type === "sm" ? "15px" : "0px")};
  }

  /* Mobile L */
  @media ${device.mobileL} {
    gap: 5px;
    margin: ${(props) => (props.type === "sm" ? "15px 0px" : "0px")};
    max-width: ${(props) => (props.type === "sm" ? "420px" : "300px")};
    gap: ${(props) => (props.type === "sm" ? "15px" : "0px")};
  }

  /* Tablet */
  @media ${device.tablet} {
  }

  /* Tablet */
  @media ${device.laptopL} {
  }
  /* Desktop */
  @media ${device.desktop} {
  }
`;

const Image = styled.img`
  width: ${(props) => (props.type === "sm" ? "15em" : "18em")};
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => (props.type === "sm" ? "16px" : "0px")};
  gap: 12px;
  font-family: Inter;
  flex: 1;
  max-width: 100vw;

  /* Mobile S [fixed]*/
  @media ${device.mobileS} {
    gap: 5px;
    margin-top: ${(props) => (props.type === "sm" ? "0px" : "0px")};
  }

  /* Mobile M */
  @media ${device.mobileM} {
    gap: 5px;
    margin-top: ${(props) => (props.type === "sm" ? "0px" : "0px")};
  }

  /* Mobile L */
  @media ${device.mobileL} {
    gap: 5px;
    margin-top: ${(props) => (props.type === "sm" ? "0px" : "0px")};
  }
  /* Desktop */
  @media ${device.desktop} {
    gap: 5px;
    margin-top: ${(props) => (props.type === "sm" ? "0px" : "0px")};
  }
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: ${(props) => (props.type === "sm" ? "0px" : "300px")};

  /* Mobile S [fixed]*/
  @media ${device.mobileS} {
    max-width: ${(props) => (props.type === "sm" ? "200px" : "0px")};
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.type !== "sm" && "12px"};
  font-weight: 500;
  color: ${({ theme }) => theme.titleColor};
  display: flex;
`;

const AnimatorName = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin: 5px 0;
`;

const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={tile} />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          />
          <Texts type={type}>
            <Title>Test edit animation for web media queries</Title>
            <AnimatorName>Test Animator</AnimatorName>
            <Info>660, 987 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
