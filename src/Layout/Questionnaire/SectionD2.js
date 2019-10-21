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

const SectionD2 = ({ checkboxChange, nextButtonClickHandler, checkedQuestions }) => (
  <>
    <QuestionContainer>
      <Paragraph>Please check the box if your child is able to do the following:</Paragraph>
      <QuestionCard>
        <QuestionNumber>{data[20].questionNumber}</QuestionNumber>
        <QuestionText>{data[20].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[20].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[20].questionNumber - 1]}
        />
        <QuestionDescription>{data[20].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard height="22rem">
        <QuestionNumber>{data[21].questionNumber}</QuestionNumber>
        <QuestionText>{data[21].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[21].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[21].questionNumber - 1]}
        />
        <QuestionDescription>{data[21].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[22].questionNumber}</QuestionNumber>
        <QuestionText>{data[22].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[22].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[22].questionNumber - 1]}
        />
        <QuestionDescription>{data[22].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[23].questionNumber}</QuestionNumber>
        <QuestionText>{data[23].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[23].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[23].questionNumber - 1]}
        />
        <QuestionDescription>{data[23].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[24].questionNumber}</QuestionNumber>
        <QuestionText>{data[24].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[24].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[24].questionNumber - 1]}
        />
        <QuestionDescription>{data[24].description}</QuestionDescription>
      </QuestionCard>
    </QuestionContainer>
    <NextPrevButton
      prevLink="/questionnaire"
      nextLink="/questionnaire"
      nextButtonClickHandler={nextButtonClickHandler}
    />
  </>
);

SectionD2.propTypes = {
  checkboxChange: PropTypes.func.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
  checkedQuestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool])).isRequired,
};

export default SectionD2;
