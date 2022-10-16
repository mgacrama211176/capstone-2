import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import tile from '../assets/home_post_2.gif';
import { device } from '../media';

//libraries
import { format } from 'timeago.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Container = styled.div`
  max-width: ${(props) => props.type !== 'sm' && '360px'};
  margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '45px')};
  display: ${(props) => (props.type === 'sm' ? 'flex' : '')};
  cursor: pointer;
  flex-wrap: wrap;

  /* Mobile S [fixed]*/
  @media ${device.mobileS} {
    gap: 5px;
    margin: ${(props) => (props.type === 'sm' ? '15px 0px' : '0px')};
    max-width: ${(props) => (props.type === 'sm' ? '340px' : '300px')};
    gap: ${(props) => (props.type === 'sm' ? '15px' : '0px')};
  }

  /* Mobile M */
  @media ${device.mobileM} {
    gap: 5px;
    margin: ${(props) => (props.type === 'sm' ? '15px 0px' : '0px')};
    max-width: ${(props) => (props.type === 'sm' ? '340px' : '300px')};
    gap: ${(props) => (props.type === 'sm' ? '15px' : '0px')};
  }

  /* Mobile L */
  @media ${device.mobileL} {
    gap: 5px;
    margin: ${(props) => (props.type === 'sm' ? '15px 0px' : '0px')};
    max-width: ${(props) => (props.type === 'sm' ? '420px' : '300px')};
    gap: ${(props) => (props.type === 'sm' ? '15px' : '0px')};
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
  width: ${(props) => (props.type === 'sm' ? '15em' : '18em')};
  height: ${(props) => (props.type === 'sm' ? '120px' : '202px')};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => (props.type === 'sm' ? '16px' : '0px')};
  gap: 12px;
  font-family: Inter;
  flex: 1;
  max-width: 100vw;

  /* Mobile S [fixed]*/
  @media ${device.mobileS} {
    gap: 5px;
    margin-top: ${(props) => (props.type === 'sm' ? '0px' : '0px')};
  }

  /* Mobile M */
  @media ${device.mobileM} {
    gap: 5px;
    margin-top: ${(props) => (props.type === 'sm' ? '0px' : '0px')};
  }

  /* Mobile L */
  @media ${device.mobileL} {
    gap: 5px;
    margin-top: ${(props) => (props.type === 'sm' ? '0px' : '0px')};
  }
  /* Desktop */
  @media ${device.desktop} {
    gap: 5px;
    margin-top: ${(props) => (props.type === 'sm' ? '0px' : '0px')};
  }
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === 'sm' && 'none'};
`;

const Texts = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-width: ${(props) => (props.type === 'sm' ? '0px' : '300px')};

  /* Mobile S [fixed]*/
  @media ${device.mobileS} {
    max-width: ${(props) => (props.type === 'sm' ? '200px' : '0px')};
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.type !== 'sm' && '12px'};
  font-weight: 500;
  color: ${({ theme }) => theme.titleColor};
  display: flex;
  width: 80%;

  //Line Clamp
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;
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

const Card = ({ type, video }) => {
  // fetching user data information using useState hook
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchingChannel = async () => {
      const channel = await axios.get(
        `http://localhost:4000/api/users/find/${video?.userId}`
      );
      setChannel(channel?.data);
    };
    fetchingChannel();
  }, [video?.userId]);

  const path = useLocation();

  return (
    <Link to={`/video/${video?._id}`} style={{ textDecoration: 'none' }}>
      <Container type={type}>
        <Image type={type} src={video?.imgUrl} />
        <Details type={type}>
          <ChannelImage type={type} src={channel?.image} />
          <Texts type={type}>
            <Title>{video?.title}</Title>
            <AnimatorName>{channel?.username}</AnimatorName>
            <Info>
              {video?.views} views • {format(video?.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
