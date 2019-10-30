import React from 'react';
import PropTypes from 'prop-types';
import { PrevBtn, DivPrev } from './index.style';

const PrevButton = ({
  prevLink,
  nextButtonClickHandler,
  marginTop,
  marginLeft,
  marginLeft1,
  marginLeft2,
  marginLeft3,
  marginTop1,
  marginTop2,
  marginLeft4,
  marginTop3,
  marginTop4
}) => (
  <>
    <DivPrev
      marginTop={marginTop}
      marginTop2={marginTop2}
      marginTop2={marginTop2}
      marginTop3={marginTop3}
      marginTop1={marginTop1}
      marginLeft={marginLeft}
      marginLeft1={marginLeft1}
      marginLeft2={marginLeft2}
      marginLeft3={marginLeft3}
      marginLeft4={marginLeft4}
      marginTop4={marginTop4}
    >
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
