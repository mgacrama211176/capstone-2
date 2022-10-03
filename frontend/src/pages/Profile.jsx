import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Prof from '../components/Prof';
import Header from '../components/Header';

import BGimage from '../assets/bgimage.jpg';

import { Grid, Container } from '@mui/material';
import Updateprof from '../components/ProfileNavigation/Updateprof';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import About from '../components/ProfileNavigation/About';

import axios from 'axios';

const ContainerWrapper = styled.div`
  background-image: url(${BGimage});
  margin-top: 50px;
  border-radius: 10px;
`;
const Profile = ({ type, video }) => {
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
            <Prof currentUser={currentUser} />
          </Grid>
          <Grid item xs>
            <Header currentUser={currentUser} />
            {/* <About /> */}
            <Updateprof />
          </Grid>
        </Grid>
      </ContainerWrapper>
      <Footer />
    </Container>
  );
};

export default Profile;
