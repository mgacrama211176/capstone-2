import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tile from '../assets/home_post_2.gif';

const Container = styled.div`
  width: 340px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 12px;
  font-family: Inter;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.titleColor};
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

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: 'none' }}>
      <Container>
        <Image src={tile} />
        <Details>
          <ChannelImage src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
          <Texts>
            <Title>Test Title</Title>
            <AnimatorName>Test Animator</AnimatorName>
            <Info>660, 987 vies • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
