import React from 'react';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IosShareIcon from '@mui/icons-material/IosShare';

const ContainerWrapper = styled.div`
  padding: 0px;
  margin-left: 15px;
  margin-top: 25px;
  margin-right: 10px;
  background-color: #ffffffd3;
  width: 830px;
  height: 660px;
  position: relative;
`;

const UpCvbt = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  background-color: #ffc500;
  width: 150px;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-left: 630px;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }
`;

const Savebt = styled.div`
  appearance: button;
  background-color: #ffc500;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  margin-top: 50px;

  &:focus {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
  }
  &:not([disabled]):active {
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;

const Updateprof = () => {
  return (
    <ContainerWrapper>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 2, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-name" label="First Name" />
        <TextField id="outlined-uncontrolled" label="Last Name" />
        <br />
        <TextField id="outlined-uncontrolled" type="date" />
        <TextField id="outlined-name" label="Address" />
      </Box>
      Change Profile Image
      <br /> About me <br />
      Change background
      <br />
      <Savebt>Save changes</Savebt>
      <UpCvbt>
        Upload CV <IosShareIcon />
      </UpCvbt>
    </ContainerWrapper>
  );
};

export default Updateprof;
