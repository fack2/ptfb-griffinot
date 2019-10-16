import React from 'react';
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

const SectionD1 = () => (
  <>
    <QuestionContainer>
      <Paragraph>Please check the box if your child is able to do the following:</Paragraph>
      <QuestionCard>
        <QuestionNumber>{data[15].questionNumber}</QuestionNumber>
        <QuestionText>{data[15].question}</QuestionText>
        <Checkbox type="checkbox" id={data[15].questionNumber} />
        <QuestionDescription>{data[15].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[16].questionNumber}</QuestionNumber>
        <QuestionText>{data[16].question}</QuestionText>
        <Checkbox type="checkbox" id={data[16].questionNumber} />
        <QuestionDescription>{data[16].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[17].questionNumber}</QuestionNumber>
        <QuestionText>{data[17].question}</QuestionText>
        <Checkbox type="checkbox" id={data[17].questionNumber} />
        <QuestionDescription>{data[17].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[18].questionNumber}</QuestionNumber>
        <QuestionText>{data[18].question}</QuestionText>
        <Checkbox type="checkbox" id={data[18].questionNumber} />
        <QuestionDescription>{data[18].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard height="26rem">
        <QuestionNumber>{data[19].questionNumber}</QuestionNumber>
        <QuestionText>{data[19].question}</QuestionText>
        <Checkbox type="checkbox" id={data[19].questionNumber} />
        <QuestionDescription>{data[19].description}</QuestionDescription>
      </QuestionCard>
    </QuestionContainer>
    <NextPrevButton prevLink="/questionnaire-section-c" nextLink="/questionnaire-section-d2" />
  </>
);

export default SectionD1;
