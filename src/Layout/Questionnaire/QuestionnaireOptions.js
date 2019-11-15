import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import popUpImg from '../../assets/popup-logo.png';
import PopupPage from '../../CommonComponents/PopupPage';
import {
  Option,
  DivData,
  LinkOption,
  PopUPCard,
  PopUpBox,
  Logo,
  LogoImage,
  BodyPage,
  PopUpDiv,
  Container2,
  LevelIntro,
  CircleLevel,
  Para,
  LevelDiv,
  ToLink,
  Close,
} from './index.style';

const QuestionnaireOptions = ({ nextButtonClickHandler, close }) => (
  <>
    {/* 1 option */}
    <DivData>
      <Popup
        modal
        trigger={<Option>I would like to help them to improve their pencil grasp</Option>}
      >
        {(close) => (
          <BodyPage>
            <PopUPCard>
              <PopUpBox>
                <Close onClick={close}>&times;</Close>
                <Logo>
                  <LogoImage src={popUpImg} alt="a kid holding a kite logo" />
                </Logo>
                <Container2>
                  <LevelIntro>The most appropriate programme for your child is:</LevelIntro>
                  <LevelDiv>
                    <CircleLevel>
                      <Para> Supporting Pencil Grasp Development </Para>
                    </CircleLevel>
                  </LevelDiv>
                  <PopUpDiv FontSize="2rem">
                    The Supporting Pencil Grasp Development Programme is specifically designed to
                    help children improve their pencil grasp. The programme consists of two warm
                    ups, 14 fine motor activities and 14 worksheet tasks. The activities focus on
                    improving the hand dexterity required to hold a pencil.
                  </PopUpDiv>

                  <ToLink href="https://griffinot.teachable.com/p/online-pencil-grasp-development-programme1">
                    Purchase programme
                  </ToLink>
                </Container2>
              </PopUpBox>
            </PopUPCard>
          </BodyPage>
        )}
      </Popup>

      {/* 2nd option  */}
      <Option onClick={nextButtonClickHandler}>
        <LinkOption to="/questionnaire" name="motorSkills">
          I would like to help them to improve their general fine motor skills.
        </LinkOption>
      </Option>

      {/* 3rd option */}
      <Popup
        modal
        trigger={<Option>I would like to help them to improve their scissor skills..</Option>}
      >
        {(close) => (
          <PopupPage
            close={close}
            description="This programme will be launching in March 2020, please consider joining our mailing list for updates"
            optionLink="https://www.griffinot.com/mailing-list-sign-up/"
            optionText="Our Mailing list"
            NextLink="/"
          />
        )}
      </Popup>
    </DivData>
  </>
);

QuestionnaireOptions.propTypes = {
  nextButtonClickHandler: PropTypes.func.isRequired,
};
export default QuestionnaireOptions;
