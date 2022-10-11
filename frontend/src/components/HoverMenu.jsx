import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { device } from '../media';
import { useSelector } from 'react-redux';

const Container = styled.div``;

const Wrapper = styled.div``;

const DropdownContainer = styled.div``;

const DropdownContent = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px;
`;

const ContentWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 60px;
  border: 1px solid red;
  border-radius: 15px;
  padding: 5px;
  background-color: white;
  display: flex;
  flex-flow: wrap column;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: transparent;
`;

const HoverMenu = () => {
  const currentUser = useSelector((state) => state.username.currentUser);
  const [rightMenu, setRightMenu] = useState(false);

  const onHover = () => {
    rightMenu ? setRightMenu(false) : setRightMenu(true);
    console.log(rightMenu);
  };

  return (
    <Container>
      <Wrapper>
        <DropdownContainer>
          <Button onMouseEnter={onHover}>
            {currentUser ? (
              <>
                <Link
                  to={`/profile/About/${currentUser._id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <User>
                    {/* {currentUser.username} */}
                    <Avatar src={currentUser.image} />
                  </User>
                </Link>
              </>
            ) : (
              <Link to="/signin" style={{ textDecoration: 'none' }}>
                <Button>
                  <PersonPinIcon />
                  Sign In
                </Button>
              </Link>
            )}
          </Button>
          {rightMenu ? (
            <>
              <ContentWrapper onMouseLeave={onHover}>
                <DropdownContent>
                  {currentUser.username}{' '}
                  <User>
                    {/* {currentUser.username} */}
                    <Avatar src={currentUser.image} />
                  </User>
                </DropdownContent>
                <DropdownContent>UPLOAD</DropdownContent>
                <DropdownContent>SETTINGS</DropdownContent>
                <DropdownContent>REPORT</DropdownContent>
                <DropdownContent>HELP</DropdownContent>
                <DropdownContent>LOG OUT</DropdownContent>
              </ContentWrapper>
            </>
          ) : (
            ''
          )}
        </DropdownContainer>
      </Wrapper>
    </Container>
  );
};

export default HoverMenu;
