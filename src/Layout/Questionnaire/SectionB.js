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

const SectionB = ({ checkboxChange }) => (
  <>
    <QuestionContainer>
      <Paragraph>Please check the box if your child is able to do the following:</Paragraph>
      <QuestionCard>
        <QuestionNumber>{data[5].questionNumber}</QuestionNumber>
        <QuestionText>{data[5].question}</QuestionText>
        <Checkbox type="checkbox" id={data[5].questionNumber} onChange={checkboxChange} />
        <QuestionDescription>{data[5].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[6].questionNumber}</QuestionNumber>
        <QuestionText>{data[6].question}</QuestionText>
        <Checkbox type="checkbox" id={data[6].questionNumber} onChange={checkboxChange} />
        <QuestionDescription>{data[6].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[7].questionNumber}</QuestionNumber>
        <QuestionText>{data[7].question}</QuestionText>
        <Checkbox type="checkbox" id={data[7].questionNumber} onChange={checkboxChange} />
        <QuestionDescription>{data[7].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[8].questionNumber}</QuestionNumber>
        <QuestionText>{data[8].question}</QuestionText>
        <Checkbox type="checkbox" id={data[8].questionNumber} onChange={checkboxChange} />
        <QuestionDescription>{data[8].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[9].questionNumber}</QuestionNumber>
        <QuestionText>{data[9].question}</QuestionText>
        <Checkbox type="checkbox" id={data[9].questionNumber} onChange={checkboxChange} />
        <QuestionDescription>{data[9].description}</QuestionDescription>
      </QuestionCard>
    </QuestionContainer>
    <NextPrevButton prevLink="/questionnaire" nextLink="/questionnaire" />
  </>
);

SectionB.propTypes = {
  checkboxChange: PropTypes.func.isRequired,
};

export default SectionB;
