/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import popUpImg from '../../assets/popup-logo.png';
import {
  PopUPCard,
  PopUpBox,
  Logo,
  LogoImage,
  BodyPage,
  PopUpDiv,
  Container2,
  TextBtn,
  CircleLevel,
  ParagraphLevel,
  TitleLevel,
  LevelDiv,
  TitleParagraph,
} from './index.style';

const LevelPop = ({
  description, NextLink, levelScore, titleLevel, No,
}) => (
    <>
      <BodyPage>
        <PopUPCard>
          <PopUpBox Height="100rem">
            <Logo>
              <LogoImage src={popUpImg} alt="a kid holding a kite logo" />
            </Logo>
            <Container2>
              <LevelDiv>
                <CircleLevel>
                  <ParagraphLevel>
                    Level
                    {levelScore}
                  </ParagraphLevel>
                </CircleLevel>

                <TitleLevel>
                  <TitleParagraph>{titleLevel}</TitleParagraph>
                </TitleLevel>
              </LevelDiv>
              <PopUpDiv FontSize="2rem">{description}</PopUpDiv>
              <TextBtn to={NextLink}>
                Purchase Level
                {No}
              </TextBtn>
            </Container2>
          </PopUpBox>
        </PopUPCard>
      </BodyPage>
    </>
  );

LevelPop.propTypes = {
  description: PropTypes.string.isRequired,
  NextLink: PropTypes.element.isRequired,
  levelScore: PropTypes.string.isRequired,
  titleLevel: PropTypes.string.isRequired,
  No: PropTypes.string.isRequired,
};

export default LevelPop;
