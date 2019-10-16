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

const SectionD2 = () => (
  <>
    <QuestionContainer>
      <Paragraph>Please check the box if your child is able to do the following:</Paragraph>
      <QuestionCard>
        <QuestionNumber>{data[20].questionNumber}</QuestionNumber>
        <QuestionText>{data[20].question}</QuestionText>
        <Checkbox type="checkbox" id={data[20].questionNumber} />
        <QuestionDescription>{data[20].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard height="22rem">
        <QuestionNumber>{data[21].questionNumber}</QuestionNumber>
        <QuestionText>{data[21].question}</QuestionText>
        <Checkbox type="checkbox" id={data[21].questionNumber} />
        <QuestionDescription>{data[21].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[22].questionNumber}</QuestionNumber>
        <QuestionText>{data[22].question}</QuestionText>
        <Checkbox type="checkbox" id={data[22].questionNumber} />
        <QuestionDescription>{data[22].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[23].questionNumber}</QuestionNumber>
        <QuestionText>{data[23].question}</QuestionText>
        <Checkbox type="checkbox" id={data[23].questionNumber} />
        <QuestionDescription>{data[23].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[24].questionNumber}</QuestionNumber>
        <QuestionText>{data[24].question}</QuestionText>
        <Checkbox type="checkbox" id={data[24].questionNumber} />
        <QuestionDescription>{data[24].description}</QuestionDescription>
      </QuestionCard>
    </QuestionContainer>
    <NextPrevButton prevLink="/questionnaire-section-d2" nextLink="s" />
  </>
);

export default SectionD2;
