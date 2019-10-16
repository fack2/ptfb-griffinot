import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import { NextBtn } from './index.style';

const NextButton = ({ nextLink }) => (
  <>
    <Button.Group>
      <NextBtn to={nextLink} type="primary">
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
