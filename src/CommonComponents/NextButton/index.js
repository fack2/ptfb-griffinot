import React from 'react';
import PropTypes from 'prop-types';
import { NextBtn, DivNext } from './index.style';

const NextButton = (props, paddingLeft) => (
  <>
    <DivNext {...props} paddingLeft={paddingLeft}>
      <NextBtn
        to={props.nextLink}
        type="primary"
        name="nextBtn"
        onClick={props.nextButtonClickHandler}
      >
        Next
      </NextBtn>
    </DivNext>
  </>
);

NextButton.propTypes = {
  nextLink: PropTypes.string.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
};

export default NextButton;
