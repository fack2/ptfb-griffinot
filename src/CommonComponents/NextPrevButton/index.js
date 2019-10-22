import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import { PrevBtn, NextBtn } from './index.style';

const NextPrevButton = ({ nextLink, prevLink, nextButtonClickHandler }) => (
  <>
    <div>
      <Button.Group>
        <PrevBtn
          to={prevLink}
          type="primary"
          name="prevBtn"
          onClick={nextButtonClickHandler}
        >
          <Icon type="left" />
          Prev
        </PrevBtn>

        <NextBtn
          to={nextLink}
          type="primary"
          name="nextBtn"
          onClick={nextButtonClickHandler}
        >
          Next
          <Icon type="right" />
        </NextBtn>
      </Button.Group>
    </div>
  </>
);

NextPrevButton.propTypes = {
  prevLink: PropTypes.string.isRequired,
  nextLink: PropTypes.string.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
};

export default NextPrevButton;
