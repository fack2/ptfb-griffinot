import React from 'react';
import popUpImg from '../../assets/popup-logo.png';
import Popup from 'reactjs-popup';
import {
  Title, HorizontalLine, Para1, FineMotorImg, Para2, NextText, NextArrow, Container, PopUPCard,
  PopUpBox,
  Logo,
  LogoImage,
  BodyPage,
  PopUpDiv,
  YesBtn,
  NoBtn,
  ContainerBtn,
  Container2,
} from './index.style';
import FMSimg from '../../assets/FMS-schema.jpg';
import arrow from '../../assets/right-arrow.png';

class Schema extends React.Component {

  state = {
    Yes: false,
    No: false
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  DisplayPop = () => {
    this.setState({ No: true })
  }

  render() {
    return (
      <>
        <Container>
          <Title>Welcome to the GriffinOT Fine Motor Skills programme.</Title>
          <HorizontalLine />
          <Para1>
            Our fine motor skill programme is designed to teach you how to help your child to improve their fine motor skills.
        <br />
            <br />
            The programme is broken into six different sections. There are four levels that support fine motor skill development.  Then, there are two additional sections designed to specifically help with pencil grasp and scissor skills. Each section of the programme is £24 to purchase.  This provides you with 6 months access to the content.
      </Para1>
          <FineMotorImg alt="FineMotorSkill" src={FMSimg} />
          <Para2>Before we can recommend the best section of our programme for your child to start working at, we need to ask you a few questions.</Para2>
        </Container>


        <Popup
          modal
          trigger={(
            <NextText type="button">
              Start
          <NextArrow alt="next-arrow" src={arrow} />
            </NextText>
          )}
        >
          {() => <BodyPage>
            <PopUPCard>
              <PopUpBox Height="80rem">
                {this.state.No ? <Logo Background='#ABC1D3'>
                  <LogoImage src={popUpImg} alt="a kid holding a kite logo" />
                </Logo> : <Logo>
                    <LogoImage src={popUpImg} alt="a kid holding a kite logo" />
                  </Logo>}
                <Container2>
                  {this.state.No ? <PopUpDiv> 2. Does your child have a neurological or genetic condition?(e.g. CP, Down's Syndrome)</PopUpDiv> : <PopUpDiv>1. Does your child have a degenerative condition?(e.g. MD,  Rhetts)</PopUpDiv>}
                  <ContainerBtn>
                    <YesBtn type="button">Yes</YesBtn>
                    <NoBtn onClick={this.DisplayPop} type="button">No</NoBtn>
                  </ContainerBtn>
                </Container2>
              </PopUpBox>
            </PopUPCard>
          </BodyPage>}
        </Popup>

      </>
    )
  }
};


export default Schema;
