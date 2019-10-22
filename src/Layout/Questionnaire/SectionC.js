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

const SectionC = ({ checkboxChange, nextButtonClickHandler, checkedQuestions }) => (
  <>
    <QuestionContainer>
      <Paragraph>Please check the box if your child is able to do the following:</Paragraph>
      <QuestionCard>
        <QuestionNumber>{data[10].questionNumber}</QuestionNumber>
        <QuestionText>{data[10].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[10].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[10].questionNumber - 1]}
        />
        <QuestionDescription>{data[10].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[11].questionNumber}</QuestionNumber>
        <QuestionText>{data[11].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[11].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[11].questionNumber - 1]}
        />
        <QuestionDescription>{data[11].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard height="21rem">
        <QuestionNumber>{data[12].questionNumber}</QuestionNumber>
        <QuestionText>{data[12].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[12].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[12].questionNumber - 1]}
        />
        <QuestionDescription>{data[12].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[13].questionNumber}</QuestionNumber>
        <QuestionText>{data[13].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[13].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[13].questionNumber - 1]}
        />
        <QuestionDescription>{data[13].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[14].questionNumber}</QuestionNumber>
        <QuestionText>{data[14].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[14].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[14].questionNumber - 1]}
        />
        <QuestionDescription>{data[14].description}</QuestionDescription>
      </QuestionCard>
    </QuestionContainer>
    <NextPrevButton
      prevLink="/questionnaire"
      nextLink="/questionnaire"
      nextButtonClickHandler={nextButtonClickHandler}
    />
  </>
);

SectionC.propTypes = {
  checkboxChange: PropTypes.func.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
  checkedQuestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool])).isRequired,
};

export default SectionC;
