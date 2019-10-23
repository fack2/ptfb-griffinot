import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import { NextBtn } from './index.style';

const NextButton = (props) => (
  <>
    <Button.Group {...props}>
      <NextBtn to={props.nextLink} type="primary" name="nextBtn" onClick={props.nextButtonClickHandler}>
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
