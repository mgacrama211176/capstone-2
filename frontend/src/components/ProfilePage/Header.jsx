import * as React from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import HomeIcon from "@mui/icons-material/Home";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const Hirebt = styled.button`
    border-radius: 5rem;
    align-items: center;
    background-clip: padding-box;
    background-color: #ffc500;
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-flex;
    font-size: 16px;
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
    margin-left: 270px;
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "transparent" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label={<HomeIcon />} />
        <Tab label="VIDEOS" />
        <Tab label="UPDATE PROFILE" />
        <Hirebt variant="contained">
          Hire me! <BadgeOutlinedIcon />
        </Hirebt>
      </Tabs>
    </Box>
  );
}
