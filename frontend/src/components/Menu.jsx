import React from 'react';
import styled, { keyframes } from 'styled-components';
import logoImg from '../assets/Logo.png';

import { Link } from 'react-router-dom';

//MUI
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LightModeIcon from '@mui/icons-material/LightMode';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import BrushIcon from '@mui/icons-material/Brush';
import Filter2Icon from '@mui/icons-material/Filter2';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import GestureIcon from '@mui/icons-material/Gesture';
import VibrationIcon from '@mui/icons-material/Vibration';

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  font-size: 14px;
  font-family: Inter;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 0 26px;
`;
const Logo = styled.div`
  display: flex;
  align-content: center;
  gap: 5px;
`;

const Img = styled.img`
  height: 5rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  font-family: Inter;
  padding: 6px 0;
  transition: 0.2s ease-in;
  &:hover {
    background-color: transparent;
    color: #b2792d;
  }
  &:after {
    content: '';
    position: absolute;
    width: 78%;
    transform: scaleX(0);
    height: 2px;
    background-color: #0087ca;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #b2792d;
`;

const Login = styled.div``;

const Button = styled.button`
  font-family: Inter;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid white;
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 10px auto;
  transition: 0.2s ease-in;
  &:hover {
    background-color: transparent;
    border: 1px solid #b2792d;
    color: #b2792d;
  }
`;

const Menu = ({ darkmode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo>
            <Img src={logoImg} />
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          HOME
        </Item>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscription
        </Item>
        <Hr />
        <Item>
          <LibraryBooksIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment and subscribe.
          <Link to={'/signin'}>
            <Button>
              <PersonPinIcon />
              Sign In
            </Button>
          </Link>
        </Login>
        <Hr />
        Categories
        <Item>
          <BrushIcon />
          Traditional Animation
        </Item>
        <Item>
          <Filter2Icon />
          2D Animation
        </Item>
        <Item>
          <ThreeDRotationIcon />
          3D Animation
        </Item>
        <Item>
          <GestureIcon />
          Motion Graphics
        </Item>
        <Item>
          <VibrationIcon />
          Stop Motion
        </Item>
        <Hr />
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item>
          <FlagIcon />
          Report
        </Item>
        <Item>
          <LiveHelpIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkmode)}>
          <LightModeIcon />
          {darkmode ? 'Dark' : 'Light'} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
