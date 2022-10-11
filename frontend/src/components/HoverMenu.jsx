import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { device } from '../media';
import { useSelector } from 'react-redux';

//MUI
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import VideoCallIcon from '@mui/icons-material/VideoCall';

const Container = styled.div``;

const Wrapper = styled.div``;

const DropdownContainer = styled.div``;

const DropdownContent = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 10px;
`;

const ContentWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 50px;
  border: solid #132550 0.5px;
  border-radius: 15px;
  padding: 5px;
  background-color: white;
  display: flex;
  flex-flow: wrap column;
  gap: 5px;
  z-index: 99;
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

  const SignIn = styled.div`
    display: flex;
    gap: 5px;
    border: 1px white solid;
    border-radius: 5px;
    padding: 5px;
    align-items: center;
    color: white;
    transition: 0.3s ease;
    font-family: Inter;

    &:hover {
      color: #b2792d;
      border: 5px #b2792d solid;
    }
  `;

  return (
    <Container>
      <Wrapper>
        <DropdownContainer>
          {currentUser ? (
            <>
              <Button onMouseEnter={onHover}>
                <Link
                  to={`/profile/About/${currentUser._id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <User>
                    {/* {currentUser.username} */}
                    <Avatar src={currentUser.image} />
                  </User>
                </Link>
              </Button>
            </>
          ) : (
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <SignIn>
                <PersonPinIcon />
                Sign In
              </SignIn>
            </Link>
          )}

          {rightMenu ? (
            <>
              <ContentWrapper onMouseLeave={onHover}>
                <DropdownContent>
                  <User>
                    {/* {currentUser.username} */}
                    <Avatar src={currentUser?.image} />
                  </User>
                  {currentUser?.username}
                </DropdownContent>
                <DropdownContent>
                  <VideoCallIcon />
                  UPLOAD
                </DropdownContent>
                <DropdownContent>
                  <SettingsIcon />
                  SETTINGS
                </DropdownContent>
                <DropdownContent>
                  <FlagIcon />
                  REPORT
                </DropdownContent>
                <DropdownContent>
                  <LiveHelpIcon />
                  HELP
                </DropdownContent>
                <DropdownContent>
                  <LogoutIcon />
                  LOG OUT
                </DropdownContent>
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
