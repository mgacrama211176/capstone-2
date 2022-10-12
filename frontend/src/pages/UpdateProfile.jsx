import React from "react";
import styled from "styled-components";
import background from "../assets/Overcome-bro.png";
import { useSelector } from "react-redux";

const Container = styled.div`
  margin: 0px 100px;
  border: 1px solid black;
`;

const Wrapper = styled.div``;

const H1 = styled.h1``;

const AccountSet = styled.div`
  margin-top: 50px;
`;

const CardContainer = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 15rem;
  height: 20rem;
`;

const ImageContainer = styled.div``;

const CardImage = styled.img`
  width: auto;
`;

const UpdateProfile = () => {
  const { currentUser } = useSelector((state) => state.username);

  console.log(currentUser);

  return (
    <Container>
      <Wrapper>
        <AccountSet>Account Settings</AccountSet>
        <CardContainer>
          <ImageContainer>
            <CardImage src={currentUser.image} />
          </ImageContainer>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default UpdateProfile;
