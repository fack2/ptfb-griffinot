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
  ContainerBtn,
  Container2,
  TextBtn,
} from './index.style';

const PopupPage = ({ description, NextLink }) => (
  <>
    <BodyPage>
      <PopUPCard>
        <PopUpBox Height="80rem">
          <Logo>
            <LogoImage src={popUpImg} alt="a kid holding a kite logo" />
          </Logo>
          <Container2>
            <PopUpDiv>{description}</PopUpDiv>
            <ContainerBtn>
              <TextBtn to={NextLink}>I understand</TextBtn>
            </ContainerBtn>
          </Container2>
        </PopUpBox>
      </PopUPCard>
    </BodyPage>
  </>
);

PopupPage.propTypes = {
  description: PropTypes.string.isRequired,
  NextLink: PropTypes.element.isRequired,
};

export default PopupPage;
