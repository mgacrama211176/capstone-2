import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Prof from '../components/Prof';
import Header from '../components/Header';

import BGimage from '../assets/bgimage.jpg';

import { Grid, Container } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Navigation Menu
import About from '../components/ProfileNavigation/About';
import VideoProfile from '../components/ProfileNavigation/VideoProfile';
import Updateprof from '../components/ProfileNavigation/Updateprof';

import axios from 'axios';

const ContainerWrapper = styled.div`
  background-image: url(${BGimage});
  margin-top: 50px;
  border-radius: 10px;
`;
const Profile = ({ nav }) => {
  let { id } = useParams();

  const [retrivedUser, setRetrievedUser] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      const profile = await axios.get(
        `http://localhost:4000/api/users/find/${id}`
      );
      setRetrievedUser(profile.data);
    };
    getProfile();
  }, [id]);

  const currentUser = useSelector((state) => state.username.currentUser);

  return (
    <Container>
      <ContainerWrapper>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Prof retrivedUser={retrivedUser} />
          </Grid>
          <Grid item xs>
            <Header retrivedUser={retrivedUser} />
            {nav === 'about' ? (
              <About />
            ) : nav === 'videos' ? (
              <VideoProfile />
            ) : (
              <Updateprof />
            )}
          </Grid>
        </Grid>
      </ContainerWrapper>
      <Footer />
    </Container>
  );
};

export default Profile;
