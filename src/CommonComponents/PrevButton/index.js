import React from 'react';
import PropTypes from 'prop-types';
import { PrevBtn, DivPrev } from './index.style';

const PrevButton = ({ prevLink, nextButtonClickHandler ,margin}) => (
  <>
    <DivPrev margin={margin}>
      <PrevBtn
        to={prevLink}
        type="primary"
        name="prevBtn"
        onClick={nextButtonClickHandler}
      >
        Prev
      </PrevBtn>
    </DivPrev>
  </>
);

PrevButton.propTypes = {
  prevLink: PropTypes.string.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
};

export default PrevButton;
