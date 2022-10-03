import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//MUI
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

//TOAST
import { DeleteNotif, UnauthorizedNotif } from './Toasts';

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
  display: flex;
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

const Separator = styled.div`
  position: absolute;
  right: 0;
`;

const CommentsBox = ({ comment, currentUser }) => {
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

  console.log(comment);

  const deleteComment = async () => {
    if (currentUser !== comment.userId) {
      UnauthorizedNotif();
    } else {
      const deletedComment = await axios.delete(
        `http://localhost:4000/api/comments/${comment._id}`
      );
      DeleteNotif();
    }
  };

  return (
    <>
      <Container>
        <Avatar src={channel.image} />
        <Details>
          <Name>
            {channel?.username} |<Date>1 Day ago</Date>
            <Separator>
              {currentUser !== comment.userId ? (
                ''
              ) : (
                <>
                  <EditIcon style={{ cursor: 'pointer' }} />
                  <DeleteIcon
                    style={{ cursor: 'pointer' }}
                    onClick={deleteComment}
                  />
                </>
              )}
            </Separator>
          </Name>

          <Text>{comment.desc}</Text>
        </Details>
      </Container>
    </>
  );
};

export default CommentsBox;
