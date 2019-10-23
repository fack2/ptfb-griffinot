import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import { PrevBtn } from './index.style';

const PrevButton = ({ prevLink, nextButtonClickHandler }) => (
  <>
    <Button.Group>
      <PrevBtn to={prevLink} type="primary" name="prevBtn" onClick={nextButtonClickHandler}>
        <Icon type="left" />
        Prev
      </PrevBtn>
    </Button.Group>
  </>
);

PrevButton.propTypes = {
  prevLink: PropTypes.string.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
};

export default PrevButton;
