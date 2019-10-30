/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import popUpImg from '../../assets/popup-logo.png';
import {
  Logo,
  LogoImage,
  ContainerBtn,
  TextBtn,
  LinkText,
  PopUpDiv,
  Text,
  BigDiv,
  BtnDiv,
  Close,
} from './index.style';

const PopupPage = ({
  description, optionText, optionLink, close,
}) => (
  <>
      <BigDiv>
        <Close onClick={close}>
          &times;
        </Close>
        <Logo>
          <LogoImage src={popUpImg} alt="a kid holding a kite logo" />
        </Logo>
        <Text>
          <PopUpDiv>{description}</PopUpDiv>
          <LinkText href={optionLink}>{optionText}</LinkText>
        </Text>
        <BtnDiv>
          <ContainerBtn href="/">
            <TextBtn type="button">I understand</TextBtn>
          </ContainerBtn>
        </BtnDiv>
      </BigDiv>
  </>
);

PopupPage.propTypes = {
  description: PropTypes.string.isRequired,
  NextLink: PropTypes.element.isRequired,
  // eslint-disable-next-line react/require-default-props
  optionLink: PropTypes.element,
  optionText: PropTypes.string,
};

export default PopupPage;
