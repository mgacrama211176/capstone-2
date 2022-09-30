import React from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";

const ContainerWrapper = styled.div`
  padding: 0px;
  margin-left: 15px;
  margin-top: 25px;
  margin-right: 10px;
  background-color: white;
  // opacity: 0.5;
  width: 830px;
  height: 660px;
`;

const UpCvbt = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
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
  margin-top: 360px;
  margin-left: 630px;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }
`;

const Updateprof = () => {
  return (
    <ContainerWrapper>
      For Profile Page
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-name" label="First Name" />
        <TextField id="outlined-uncontrolled" label="Last Name" />
      </Box>
      <Stack
        component="form"
        sx={{
          m: 2,
          width: "25ch",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-name" label="Address" />
        <TextField id="outlined-name" label="Test" />
      </Stack>
      <UpCvbt>Upload CV</UpCvbt>
    </ContainerWrapper>
  );
};

export default Updateprof;
