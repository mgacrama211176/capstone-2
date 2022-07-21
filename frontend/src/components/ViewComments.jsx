import React from 'react';
import styled from 'styled-components';

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

const ViewComments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
        <Input placeholder="Add new comment" />
      </NewComment>
    </Container>
  );
};

export default ViewComments;
