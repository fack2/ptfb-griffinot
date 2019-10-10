import React from 'react';
import popuplogo from '../../assets/popup-logo.png';
import {
  PopUPCard, PopUpBox, Logo, LogoImage, BodyPage, PopUpDiv, LeftButtonPopUp, RightButtonPopUp, TitleP,
} from './index.style';


const PopUp = ({
  title, descraption, leftButton, rightButton,
}) => (

  <>
    <BodyPage>
      <PopUPCard>
        <PopUpBox Height="80rem">
          <Logo>
            <LogoImage src={popuplogo} alt="a kid holding a kite logo" />
          </Logo>
          <TitleP>{title}</TitleP>
          <PopUpDiv>
            {descraption}
          </PopUpDiv>
          <LeftButtonPopUp>{leftButton}</LeftButtonPopUp>
          <RightButtonPopUp>{rightButton}</RightButtonPopUp>
        </PopUpBox>
      </PopUPCard>
    </BodyPage>
  </>
);


export default PopUp;
