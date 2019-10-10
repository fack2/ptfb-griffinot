import React from 'react';
import popuplogo from '../../assets/popup-logo.png';
import {
  PopUPCard,
  PopUpBox,
  Logo,
  LogoImage,
  BodyPage,
  PopUpDiv,
  UndersandWord,
  TitleP,
} from './index.style';
import Header from '../Header';

const PopUp = ({ title, descraption }) => (
  <>
    <BodyPage>
      <Header />

      <PopUPCard>
        <PopUpBox Height="80rem">
          <Logo>
            <LogoImage src={popuplogo} alt="a kid holding a kite logo" />
          </Logo>
          <TitleP>{title}</TitleP>
          <PopUpDiv>{descraption}</PopUpDiv>
          <UndersandWord>I understand</UndersandWord>
        </PopUpBox>
      </PopUPCard>
    </BodyPage>
  </>
);

export default PopUp;
