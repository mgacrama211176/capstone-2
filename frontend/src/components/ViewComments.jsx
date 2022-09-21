import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CommentsBox from './CommentsBox';
import axios from 'axios';

//MUI
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.titleColor};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
  color: ${({ theme }) => theme.titleColor};
`;

const ViewComments = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  const { currentUser } = useSelector((state) => state.username);

  useEffect(() => {
    const fetchComments = async () => {
      const responseComments = await axios.get(
        `http://localhost:4000/api/comments/${videoId}`
      );
      console.log(responseComments.data);
      setComments(responseComments.data);
    };
    fetchComments();
  }, [videoId]);

  const addComment = async () => {
    const newComment = await axios.get(``);
  };

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser.image} />
        <Input placeholder="Add new comment" />
        <SendIcon style={{ cursor: 'pointer' }} />
      </NewComment>
      {comments.map((comment) => (
        <CommentsBox key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default ViewComments;
