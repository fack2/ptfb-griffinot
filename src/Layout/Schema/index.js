import React from 'react';
import { Title, HorizontalLine, Para1, FineMotorImg, Para2, NextText, NextArrow } from './index.style';
import FMSimg from '../../assets/FMS-schema.jpg'
import arrow from '../../assets/right-arrow.png'

class Schema extends React.Component {

  state = {
  }

  render() {
    return (
      <>
        <Title>Welcome to the GriffinOT Fine Motor Skills programme.</Title>
        <HorizontalLine />
        <Para1>Our fine motor skill programme is designed to teach you how to help your child to improve their fine motor skills.<br />
          <br />
          The programme is broken into six different sections. There are four levels that support fine motor skill development.  Then, there are two additional sections designed to specifically help with pencil grasp and scissor skills. Each section of the programme is £24 to purchase.  This provides you with 6 months access to the content.  </Para1>

        <FineMotorImg alt="FineMotorSkill" src={FMSimg} />

        <Para2>Before we can recommend the best section of our programme for your child to start working at, we need to ask you a few questions.</Para2>

        <NextText type='button'>Start <NextArrow alt='next-arrow' src={arrow} /></NextText>
      </>
    );
  }
}


export default Schema;
