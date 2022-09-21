import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Roboto', sans-serif;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: bolder;
  color: ${({ theme }) => theme.titleColor};
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: gray;
  margin-left: 5px;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.titleColor};
  font-size: 14px;
`;

const CommentsBox = ({ comment }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchComments = async () => {
      const responseToComments = await axios.get(
        `http://localhost:4000/api/users/find/${comment.userId}`
      );
      setChannel(responseToComments.data);
    };
    fetchComments();
  }, [comment.userId]);

  return (
    <Container>
      <Avatar src={channel?.image} />
      <Details>
        <Name>
          {channel?.username} |<Date>1 Day ago</Date>
        </Name>

        <Text>{comment.desc}</Text>
      </Details>
    </Container>
  );
};

export default CommentsBox;
