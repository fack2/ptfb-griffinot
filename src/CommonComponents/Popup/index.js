import React from 'react';
import popuplogo from '../../assets/popup-logo.png';
import { PopUPCard, PopUpPox, Logo, LogoImage, BodyPage ,PopUpDiv,LeftButtonPopUp,RightButtonPopUp,TitleP } from './index.style';
import popUpdata from '../../Data/popupdata'
class PopUp extends React.Component {
  state = {
    title: '',
    descraption: '',
    leftButton: '',
    rightButton: ''
  };
  render() {
    return (
      popUpdata.map(({title,descraption,leftButton,rightButton})=>(
      <BodyPage>
        <PopUPCard>
          <PopUpPox Height='80rem'>
            <Logo>
              <LogoImage src={popuplogo} alt='a kid holding a kite logo' />
            </Logo>
            <TitleP>{title}</TitleP>
            <PopUpDiv >
            {descraption}
            </PopUpDiv>
            <LeftButtonPopUp>{leftButton}</LeftButtonPopUp>
            <RightButtonPopUp>{rightButton}</RightButtonPopUp>

          </PopUpPox>
        </PopUPCard>
      </BodyPage>
    )));
  }
}
export default PopUp;
