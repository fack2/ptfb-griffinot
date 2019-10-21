import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import { NextBtn } from './index.style';

const NextButton = (props) => (
  <>
    {/* we use props to have refs for next button so we can show the pop up after we click on it */}
    <Button.Group {...props}>
      <NextBtn type="button">
        Next
        <Icon type="right" />
      </NextBtn>
    </Button.Group>

  </>
);

NextButton.propTypes = {
  nextLink: PropTypes.string.isRequired,
};

export default NextButton;
