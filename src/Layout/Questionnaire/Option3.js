import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import popUpImg from '../../assets/popup-logo.png';
import PopupPage from '../../CommonComponents/PopupPage';
import {
  TitleOption,
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
} from './index.style';

import PrevButton from '../../CommonComponents/PrevButton';

const Option3 = ({ nextButtonClickHandler }) => (
  <>
    <TitleOption>
      What skill do you feel your child needs the most help with improving, at the moment?
    </TitleOption>

    {/* 1 option */}
    <DivData>
      <Popup
        modal
        trigger={<Option>I would like to help them to improve their pencil grasp</Option>}
      >
        <BodyPage>
          <PopUPCard>
            <PopUpBox Height="110rem">
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
                  The Supporting Pencil Grasp Development Programme is specifically designed to help
                  children improve their pencil grasp. The programme consists of two warm ups, 14
                  fine motor activities and 14 worksheet tasks. The activities focus on improving
                  the hand dexterity required to hold a pencil. The worksheets help with pencil
                  control. By the end of the programme your child should be able to hold their
                  pencil using an adequate grasp This might be a tripod, modified tripod or
                  quadruped grasp. They should also have made improvements with their pencil
                  control.
                </PopUpDiv>

                <ToLink href="https://griffinot.teachable.com/p/online-pencil-grasp-development-programme1">
                  Purchase programme
                </ToLink>
              </Container2>
            </PopUpBox>
          </PopUPCard>
        </BodyPage>
      </Popup>

      {/* 2nd option  */}
      <Option name="nextBtn" onClick={nextButtonClickHandler}>
        <LinkOption to="/questionnaire">
          I would like to help them to improve their general fine motor skills.
        </LinkOption>
      </Option>

      {/* 3rd option */}
      <Popup
        modal
        trigger={<Option>I would like to help them to improve their scissor skills..</Option>}
      >
        <PopupPage
          description="This programme will be launching in March 2020, please consider joining our mailing list for updates"
          optionLink="https://www.griffinot.com/mailing-list-sign-up/"
          optionText="Our Mailing list"
          NextLink="/"
        />
      </Popup>
    </DivData>

    <PrevButton
      prevLink="/questionnaire"
      nextButtonClickHandler={nextButtonClickHandler}
      marginLeft="8%"
      marginLeft1="8%"
      marginLeft2="14%"
      marginTop="55%"
      marginTop1="20%"
      marginLeft4="20%"
      marginTop4="29%"
      marginLeft3="14%"
      marginTop3="18%"

    />
  </>
);

Option3.propTypes = {
  nextButtonClickHandler: PropTypes.func.isRequired,
};
export default Option3;
