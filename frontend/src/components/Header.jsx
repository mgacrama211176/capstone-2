import React, { useState } from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

//react-router-dom
import { Link } from "react-router-dom";

//Media Queries
import { device } from "../media";

//PROFILE NAVIGATION

export default function CenteredTabs({ retrivedUser }) {
  const [value, setValue] = React.useState(0);

  const Hirebt = styled.button`
    border-radius: 5rem;
    align-items: center;
    background-clip: padding-box;
    background-color: #132550;
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-size: 16px;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
    margin-left: 100px;
    &:hover,
    :focus {
      background-color: #fb8332;
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    }
    &:active {
      background-color: #c85000;
      box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
      transform: translateY(0);
    }
  `;

  return (
    <Box sx={{ width: "100%", ml: 2, my: 2, bgcolor: "transparent" }}>
      <Tabs value={value} centered>
        {/* NAVIGATION MENU */}
        <Link to={`/profile/About/${retrivedUser?._id}`}>
          <Tab label="PROFILE" />
        </Link>

        <Link to={`/profile/videos/${retrivedUser?._id}`}>
          <Tab label="VIDEOS" />
        </Link>

        <Link to={`/profile/updateProf/${retrivedUser?._id}`}>
          <Tab label="UPDATE PROFILE" />
        </Link>
        {/* HIREME BTN */}

        <Hirebt
          variant="contained"
          onClick={() => (window.location = `mailto:${retrivedUser?.email}`)}
        >
          Hire me! <BadgeOutlinedIcon />
        </Hirebt>
      </Tabs>
    </Box>
  );
}
