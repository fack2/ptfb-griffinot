import React from 'react';
import PropTypes from 'prop-types';
import { PrevBtn, DivPrev } from './index.style';

const PrevButton = ({
  prevLink,
  nextButtonClickHandler,
  marginTop,
 
}) => (
  <>
    <DivPrev>
      <PrevBtn
        to={prevLink}
        type="primary"
        name="prevBtn"
        onClick={nextButtonClickHandler}
        marginTop={marginTop}

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
