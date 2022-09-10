import React from "react";
import styled from "styled-components";

import ProfileImg from "../assets/Body.jpg";

import Card from "../components/Card";
import Footer from "../components/Footer";

import Prof from "../components/ProfilePage/Prof";
import Header from "../components/ProfilePage/Header";
import Portfolio from "../components/ProfilePage/Portfolio";
import Resume from "../components/ProfilePage/Resume";

import { Grid, Container } from "@mui/material";

const Profile = ({ type, video }) => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Prof />
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          xyz
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
