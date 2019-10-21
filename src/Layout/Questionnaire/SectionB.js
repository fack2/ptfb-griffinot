import React from 'react';
import PropTypes from 'prop-types';
import data from '../../Data/questionnareData';
import {
  QuestionCard,
  QuestionText,
  QuestionDescription,
  QuestionNumber,
  Checkbox,
  QuestionContainer,
  Paragraph,
} from './index.style';

import NextPrevButton from '../../CommonComponents/NextPrevButton';

const SectionB = ({ checkboxChange, nextButtonClickHandler, checkedQuestions }) => (
  <>
    <QuestionContainer>
      <Paragraph>Please check the box if your child is able to do the following:</Paragraph>
      <QuestionCard>
        <QuestionNumber>{data[5].questionNumber}</QuestionNumber>
        <QuestionText>{data[5].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[5].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[5].questionNumber - 1]}
        />
        <QuestionDescription>{data[5].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[6].questionNumber}</QuestionNumber>
        <QuestionText>{data[6].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[6].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[6].questionNumber - 1]}
        />
        <QuestionDescription>{data[6].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[7].questionNumber}</QuestionNumber>
        <QuestionText>{data[7].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[7].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[7].questionNumber - 1]}
        />
        <QuestionDescription>{data[7].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[8].questionNumber}</QuestionNumber>
        <QuestionText>{data[8].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[8].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[8].questionNumber - 1]}
        />
        <QuestionDescription>{data[8].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[9].questionNumber}</QuestionNumber>
        <QuestionText>{data[9].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[9].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[9].questionNumber - 1]}
        />
        <QuestionDescription>{data[9].description}</QuestionDescription>
      </QuestionCard>
    </QuestionContainer>
    <NextPrevButton
      prevLink="/questionnaire"
      nextLink="/questionnaire"
      nextButtonClickHandler={nextButtonClickHandler}
    />
  </>
);

SectionB.propTypes = {
  checkboxChange: PropTypes.func.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
  checkedQuestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool])).isRequired,
};

export default SectionB;
