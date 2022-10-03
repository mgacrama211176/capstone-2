import React, { useState } from 'react';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import HomeIcon from '@mui/icons-material/Home';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//react-router-dom
import { useLocation, Link } from 'react-router-dom';
import About from './ProfileNavigation/About';

//PROFILE NAVIGATION

export default function CenteredTabs({ currentUser }) {
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const location = useLocation();
  };

  const [display, setDisplay] = useState(false);

  return (
    <Box sx={{ width: '100%', ml: 2, my: 2, bgcolor: 'transparent' }}>
      <Tabs value={value} onChange={handleChange} centered>
        {/* NAVIGATION MENU */}
        <Link to={`/profile/${currentUser._id}/About`}>
          <Tab label={<HomeIcon />} />
        </Link>
        <Link to={`/profile/${currentUser._id}/videos`}>
          <Tab label="VIDEOS" />
        </Link>
        <Link to={`/profile/${currentUser._id}/About`}>
          <Tab label="UPDATE PROFILE" />
        </Link>

        {/* HIREME BTN */}
        <Link onClick={() => (window.location = `${currentUser.email}`)}>
          <Hirebt variant="contained">
            Hire me! <BadgeOutlinedIcon />
          </Hirebt>
        </Link>
      </Tabs>
    </Box>
  );
}
