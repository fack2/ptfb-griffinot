import React from 'react';
import {
  Title, Box, KimImg, Name, Para, Container, LogoImg, GriffinPara, SecBox,
} from './index.style';

import KimG from '../../assets/KimG.png';
import Logo from '../../assets/logo-aboutus.svg';

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

      <SecBox>
        <LogoImg alt="griffin-logo" src={Logo} />
        <GriffinPara>
          Griffin OT is on a social mission to make sensory processing disorder training and motor skills development programmes affordable and accessible to all.  Our packages are designed to help teachers and parents understand and support their children’s sensory processing and/or motor skill challenges.
          <br />
          <br />
          All resources are written and designed by Kim and teach you could do to help your child or the children you work with.
          You can learn more about us
          <a href="https://www.griffinot.com/griffin-occupational-therapy/"> here.</a>
        </GriffinPara>
      </SecBox>
    </Container>

  </>
);

export default AboutUs;
