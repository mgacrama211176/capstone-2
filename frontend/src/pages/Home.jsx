import React from 'react';
import styled from 'styled-components';
import { device } from '../media';

//Components
import Card from '../components/Card';

//framer motion
import { motion } from 'framer-motion';

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

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opcaity: 0 }}
    >
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </motion.div>
  );
};

export default Home;
