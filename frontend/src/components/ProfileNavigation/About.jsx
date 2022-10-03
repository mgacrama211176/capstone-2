import React from 'react';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const ContainerWrapper = styled.div`
  padding: 0px;
  margin-left: 15px;
  margin-top: 25px;
  margin-right: 10px;
  width: 830px;
  height: 660px;
  position: relative;
`;

const FullName = styled.div`
  padding-top: 20px;
  font-size: 20px;
  padding-left: 30px;
`;

const AboutWrapper = styled.div`
  display: flex;
  width: 45%;
  padding: 40px;
  padding-left: 70px;
  padding-right: 70px;
  height: 475px;
  margin: 30px;
  margin-right: 30px;
  background-color: #fede00;
  line-height: 2;
`;

const AboutCont = styled.div``;

const About = () => {
  return (
    <ContainerWrapper>
      <FullName>Marlon Gacrama</FullName>
      <AboutWrapper>
        <AboutCont>
          <h1>About me</h1>
          <p>
            Hi! I'm Sammy the Shark, Senior Selachimorpha at DigitalOcean by
            day, dabbler in all things dev by night. This site is a
            demonstration website for the tutorial series " ," which walks you
            through building and customizing this website from start to finish.
          </p>
          <p>
            If you're following this tutorial series, you can replace this text
            with your own "About Me" content.
          </p>{' '}
        </AboutCont>
      </AboutWrapper>
    </ContainerWrapper>
  );
};

export default About;
