import React from 'react';
import { Redirect } from 'react-router-dom';
import popUpImg from '../../assets/popup-logo.png';
import Popup from 'reactjs-popup';
import PopupPage from '../../CommonComponents/PopupPage';
import {
  Title,
  HorizontalLine,
  Para1,
  FineMotorImg,
  Para2,
  NextText,
  NextArrow,
  Container,
  Logo,
  LogoImage,
  PopUpDiv,
  OptionBtn,
  Text,
  BigDiv,
  BtnDiv,
} from './index.style';
import FMSimg from '../../assets/FMS-schema.jpg';
import arrow from '../../assets/right-arrow.png';

class Schema extends React.Component {
  state = {
    NoBtn: false,
    redirectBtn: false,
  };

  DisplayPop = () => {
    this.setState({ NoBtn: true });
  };

  setRedirect = () => {
    this.setState({
      redirectBtn: true,
    });
  };

  renderBtn = () => {
    if (this.state.redirectBtn) {
      return <Redirect to="/questionnaire" />;
    }
  };

  render() {
    return (
      <>
        <Container>
          <Title>Welcome to the GriffinOT Fine Motor Skills programme.</Title>
          <HorizontalLine />
          <Para1>
            Our fine motor skill programme is designed to teach you how to help your child to
            improve their fine motor skills. It is suitable for children aged 18 months and older.
            <br /> <br />
            The programme is broken into six different sections. There are four levels that support
            fine motor skill development. Each level is harder than the previous. There are two
            additional sections designed to specifically help with pencil grasp and scissor skills.
            <br /> <br />
            We know that children develop at a different rates, so there is not a recommended age
            for the sections. Instead, we use the following questionnaire to recommend the best
            section for your child at the moment.
            <br /> <br /> Each section of the programme is £24 to purchase. This provides you with 6
            months access to the content.
          </Para1>
          <FineMotorImg alt="FineMotorSkill" src={FMSimg} />
          <Para2>
            Before we can recommend the best section of our programme for your child to start
            working at, we need to ask you a few questions.
          </Para2>
        </Container>

        <Popup
          trigger={
            <NextText type="button">
              <NextArrow alt="next-arrow" src={arrow} />
            </NextText>
          }
          onClose={() => {
            this.setState({ NoBtn: false });
          }}
          modal
        >
          {() => (
            <BigDiv>
              {this.state.NoBtn ? (
                <Logo Background="#ABC1D3">
                  <LogoImage src={popUpImg} alt="a kid holding a kite logo" />
                </Logo>
              ) : (
                <Logo>
                  <LogoImage src={popUpImg} alt="a kid holding a kite logo" />
                </Logo>
              )}

              <Text>
                {this.state.NoBtn ? (
                  <PopUpDiv>
                    2. Does your child have a neurological or genetic condition which is causing
                    their fine motor skill difficulties? (e.g. Cerebral Palsy, Brain Injury, Down's
                    Syndrome, Prader-Willi, unnamed genetic condition)
                  </PopUpDiv>
                ) : (
                  <PopUpDiv>
                    1. Does your child have a degenerative condition? (e.g. Muscular Dystrophy,
                    Rhetts)
                  </PopUpDiv>
                )}
              </Text>
              <BtnDiv>
                {this.state.NoBtn ? (
                  <Popup modal trigger={<OptionBtn type="button">Yes</OptionBtn>}>
                    {() => (
                      <PopupPage
                        description="Please note that your child’s rate of progress will likely be a slower and they may still need additional specialist support whilst using the programme."
                        NextLink="/questionnaire"
                      />
                    )}
                  </Popup>
                ) : (
                  <Popup modal trigger={<OptionBtn type="button">Yes</OptionBtn>}>
                    {() => (
                      <PopupPage
                        description="Sorry, our program is not suitable for your child."
                        NextLink="/"
                      />
                    )}
                  </Popup>
                )}

                {this.renderBtn()}
                {this.state.NoBtn ? (
                  <OptionBtn onClick={this.setRedirect} type="button">
                    No
                  </OptionBtn>
                ) : (
                  <OptionBtn onClick={this.DisplayPop} type="button">
                    No
                  </OptionBtn>
                )}
              </BtnDiv>
            </BigDiv>
          )}
        </Popup>
      </>
    );
  }
}

export default Schema;
