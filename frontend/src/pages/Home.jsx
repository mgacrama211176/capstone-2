import React from "react";
import styled from "styled-components";
import { device } from "../media";

//Components
import Card from "../components/Card";

//framer motion
import { motion } from "framer-motion";

// libraries
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;

  /* Mobile S */
  @media ${device.mobileS} {
    justify-content: center;
  }

  /* Tablet */
  @media ${device.tablet} {
    gap: 40px;
  }
`;

const Wrapper = styled.div``;

const Home = ({ type }) => {
  // fetching data using the use state hook
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchingVideos = async () => {
      const randomReturn = await axios.get(
        `http://localhost:4000/api/videos/${type}`
      );
      setVideos(randomReturn.data);
    };
    fetchingVideos();
  }, [type]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opcaity: 0 }}
    >
      <Container>
        {videos.map((video) => (
          <Card key={video._id} video={video} />
        ))}
      </Container>
    </motion.div>
  );
};

export default Home;
