import React, { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { device } from "../media";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//MUI
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import LightModeIcon from "@mui/icons-material/LightMode";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import BrushIcon from "@mui/icons-material/Brush";
import Filter2Icon from "@mui/icons-material/Filter2";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import GestureIcon from "@mui/icons-material/Gesture";
import VibrationIcon from "@mui/icons-material/Vibration";
import LogoutIcon from "@mui/icons-material/Logout";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap");
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  height: 120vh;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  position: sticky;
  top: 0;
  transition: 1s ease;
  padding-top: 5px;

  & button,
  div {
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }

  /* Mobile S */
  @media ${device.mobileS} {
    min-height: 100vh;
    max-width: 374px;
  }
`;

const Wrapper = styled.div`
  padding: 0 26px;
`;

const Item = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  padding: 6px 0;
  transition: 0.2s ease-in;
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: transparent;
    color: #b2792d;
  }

  @media (max-width: 1440px) {
    gap: 10px;
    font-size: 12px;
  } ;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #b2792d;
`;

const Login = styled.div``;

const Button = styled.button`
  font-family: "Inter", sans-serif;
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

//for Mobile Hamburger
const MobileWrapper = styled.div``;

const Menu = ({ darkmode, setDarkMode, burger }) => {
  const currentUser = useSelector((state) => state.username.currentUser);
  // console.log(currentUser);

  const nav = useNavigate();
  const dispatch = useDispatch();

  const OnclickLogout = () => {
    dispatch(logout(currentUser));
    nav("/");
  };

  return (
    <Container style={{ display: `${burger}` }}>
      <Wrapper>
        <MobileWrapper>
          {/* <MenuIcon /> */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Item>
              <HomeIcon />
              HOME
            </Item>
          </Link>
          <Link to="/trend" style={{ textDecoration: "none" }}>
            <Item>
              <ExploreIcon />
              Explore
            </Item>
          </Link>
          <Link to="/subscriptions" style={{ textDecoration: "none" }}>
            <Item>
              <SubscriptionsIcon />
              Subscription
            </Item>
          </Link>
          <Hr />
          <Item>
            <LibraryBooksIcon />
            Library
          </Item>
          <Item>
            <HistoryIcon />
            History
          </Item>
          {currentUser ? (
            ""
          ) : (
            <>
              <Hr />
              <Login>
                Sign in to like videos, comment and subscribe.
                <Link to={"/signin"} style={{ textDecoration: "none" }}>
                  <Button>
                    <PersonPinIcon />
                    Sign In
                  </Button>
                </Link>
              </Login>
            </>
          )}
          <Hr />
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
          <Item onClick={() => setDarkMode(!darkmode)}>
            <LightModeIcon />
            {darkmode ? "Dark" : "Light"} Mode
          </Item>
          {!currentUser ? (
            ""
          ) : (
            <Item onClick={OnclickLogout}>
              <LogoutIcon />
              LOGOUT
            </Item>
          )}
        </MobileWrapper>
      </Wrapper>
    </Container>
  );
};

export default Menu;
