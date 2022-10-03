import React from 'react';
import styled from 'styled-components';

//MUI
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BrushIcon from '@mui/icons-material/Brush';
import Filter2Icon from '@mui/icons-material/Filter2';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import GestureIcon from '@mui/icons-material/Gesture';
import VibrationIcon from '@mui/icons-material/Vibration';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LightModeIcon from '@mui/icons-material/LightMode';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LogoutIcon from '@mui/icons-material/Logout';

const Container = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 130px;
  z-index: 6;
`;

const P = styled.p`
  display: none;
  color: white;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  gap: 5px;
  justify-content: center;
`;

const Items = styled.div`
  cursor: pointer;
  display: flex;
  transition: 3s ease;
  background-color: #132550;
  color: white;
  border-radius: 0px 10px 10px 0px;
  padding: 10px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  transition: 3s ease;

  &:hover ${P} {
    display: block;
    color: white;
  }
`;

const NewMenuUi = () => {
  return (
    <Container>
      <SideBar>
        <Items>
          <Item>
            <HomeIcon />
            <P>HOME</P>
          </Item>
        </Items>
        <Items>
          <Item>
            <ExploreIcon />
            <P>Explore</P>
          </Item>
        </Items>
        <Items>
          <Item>
            <SubscriptionsIcon />
            <P>Subscription</P>
          </Item>
        </Items>
        <Items>
          <Item>
            <LibraryBooksIcon />
            <P>Library</P>
          </Item>
        </Items>

        <Items>
          <Item>
            <BrushIcon />
            <P>Traditional Animation</P>
          </Item>
        </Items>

        <Items>
          <Item>
            <Filter2Icon />
            <P>2D Animation</P>
          </Item>
        </Items>

        <Items>
          <Item>
            <ThreeDRotationIcon />
            <P>3D Animation</P>
          </Item>
        </Items>
        <Items>
          <Item>
            <GestureIcon />
            <P>Motion Graphics</P>
          </Item>
        </Items>
        <Items>
          <Item>
            <VibrationIcon />
            <P>Stop Motion</P>
          </Item>
        </Items>
        <Items>
          <Item>
            <SettingsIcon />
            <P>Settings</P>
          </Item>
        </Items>
        <Items>
          <Item>
            <FlagIcon />
            <P>Report</P>
          </Item>
        </Items>

        <Items>
          <Item>
            <LiveHelpIcon />
            <P>Help</P>
          </Item>
        </Items>

        <Items>
          <Item>
            <LightModeIcon />
            <P>Dark Mode</P>
          </Item>
        </Items>
      </SideBar>
    </Container>
  );
};

export default NewMenuUi;
