import React from 'react';
import popuplogo from '../../assets/popup-logo.png';
import {
  PopUPCard, PopUpPox, Logo, LogoImage, BodyPage,
} from './index.style';

const PopUp = () => (
  <BodyPage>
    <PopUPCard>
      <PopUpPox>
        <Logo>
          <LogoImage src={popuplogo} alt="mainlogo" />
        </Logo>
      </PopUpPox>
    </PopUPCard>
  </BodyPage>
);

export default PopUp;
