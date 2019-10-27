import React from 'react';
import PropTypes from 'prop-types';
import { PrevBtn, DivPrev } from './index.style';

const PrevButton = ({
  prevLink,
  nextButtonClickHandler,
  marginLeft,
  marginTop
}) => (
  <>
    <DivPrev marginTop={marginTop} marginLeft={marginLeft}>
      <PrevBtn
        to={prevLink}
        type='primary'
        name='prevBtn'
        onClick={nextButtonClickHandler}
        margin={marginTop}
      >
        Prev
      </PrevBtn>
    </DivPrev>
  </>
);

PrevButton.propTypes = {
  prevLink: PropTypes.string.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired
};

export default PrevButton;
