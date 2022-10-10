import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card';

const Container = styled.div`
  margin: 100px;
`;

const Wrapper = styled.div``;

const videoProfile = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchingVideos = async () => {
      videos = await axios.get(`http://localhost:4000/api/videos/random`);
      setVideos(videos);
      console.log(videos);
    };
    fetchingVideos();
  }, []);

  return (
    <Container>
      <Wrapper>{videos}</Wrapper>
    </Container>
  );
};

export default videoProfile;
