import React from 'react';
import {
  Title, Box, KimImg, Name, Para, Container,
} from './index.style';

import KimG from '../../assets/KimG.png';

const AboutUs = () => (
  <>
    <Container>
      <Title>Your Instructor</Title>
      <Box>
        <KimImg alt="Kim-Griffin" src={KimG} />
        <Name>Kim Griffin</Name>
        <Para>
          Kim is an occupational therapist striving to make the occupational therapy knowledge accessible to everyone! Hailing from Australia but now based in London, she splits her time between creating online resources and working in schools.
          <br />
          <br />
          Kim has completed her post graduate sensory integration training through the University of Ulster and her Masters of Health Science through the University of Sydney. She has an interest in sensory processing, motor skills, autism and attachment.

        </Para>
      </Box>
    </Container>
  </>
);

export default AboutUs;
