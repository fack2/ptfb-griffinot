import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import { NextBtn } from './index.style';

const NextButton = ({ nextLink, nextButtonClickHandler }) => (
  <>
    <Button.Group>
      <NextBtn to={nextLink} type="primary" name="nextBtn" onClick={nextButtonClickHandler}>
        Next
        <Icon type="right" />
      </NextBtn>
    </Button.Group>
  </>
);

NextButton.propTypes = {
  nextLink: PropTypes.string.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
};

export default NextButton;
