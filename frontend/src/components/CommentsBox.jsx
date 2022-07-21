import React from 'react';
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
`;

const CommentsBox = () => {
  return (
    <Container>
      <Avatar src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
      <Details>
        <Name>
          test 1 |<Date>1 Day ago</Date>
        </Name>

        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
          tempora pariatur expedita recusandae modi possimus suscipit odit,
          consequuntur molestiae quas accusamus laborum at praesentium eaque
          iure. Veniam impedit nulla amet.
        </Text>
      </Details>
    </Container>
  );
};

export default CommentsBox;
