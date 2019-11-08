import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question';

const QuesetionnaireSection = ({
  checkboxChange,
  checkedQuestions,
  sectionData,
}) => (
  <Question
    checkedQuestions={checkedQuestions}
    checkboxChange={checkboxChange}
    sliceFromQuestion={sectionData.sliceFromQuestion}
    sliceToQuestion={sectionData.sliceToQuestion}
  />
);
QuesetionnaireSection.propTypes = {
  checkboxChange: PropTypes.func.isRequired,
  checkedQuestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool])).isRequired,
  sectionData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
};

export default QuesetionnaireSection;
