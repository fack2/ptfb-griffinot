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
  PopUPCard,
  PopUpBox,
  Logo,
  LogoImage,
  BodyPage,
  PopUpDiv,
  OptionBtn,
  ContainerBtn,
  Container2,
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
            improve their fine motor skills.
            <br />
            <br />
            The programme is broken into six different sections. There are four levels that support
            fine motor skill development. Then, there are two additional sections designed to
            specifically help with pencil grasp and scissor skills. Each section of the programme is
            £24 to purchase. This provides you with 6 months access to the content.
          </Para1>
          <FineMotorImg alt="FineMotorSkill" src={FMSimg} />
          <Para2>
            Before we can recommend the best section of our programme for your child to start
            working at, we need to ask you a few questions.
          </Para2>
        </Container>

        <Popup
          modal
          trigger={
            <NextText type="button">
              <NextArrow alt="next-arrow" src={arrow} />
            </NextText>
          }
          onClose={() => {
            this.setState({ NoBtn: false });
          }}
        >
          {() => (
            <BodyPage>
              <PopUPCard>
                <PopUpBox Height="80rem">
                  {this.state.NoBtn ? (
                    <Logo Background="#ABC1D3">
                      <LogoImage src={popUpImg} alt="a kid holding a kite logo" />
                    </Logo>
                  ) : (
                      <Logo>
                        <LogoImage src={popUpImg} alt="a kid holding a kite logo" />
                      </Logo>
                    )}

                  <Container2>
                    {this.state.NoBtn ? (
                      <PopUpDiv>
                        2. Does your child have a neurological or genetic condition?(e.g. CP, Down's
                        Syndrome)
                      </PopUpDiv>
                    ) : (
                        <PopUpDiv>
                          1. Does your child have a degenerative condition?(e.g. MD, Rhetts)
                      </PopUpDiv>
                      )}

                    <ContainerBtn>
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
                    </ContainerBtn>
                  </Container2>
                </PopUpBox>
              </PopUPCard>
            </BodyPage>
          )}
        </Popup>
      </>
    );
  }
}

export default Schema;
