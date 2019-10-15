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

const SectionA = () => (
  <>
    <QuestionContainer>
      <Paragraph>Please check the box if your child is able to do the following:</Paragraph>
      <QuestionCard>
        <QuestionNumber>{data[10].questionNumber}</QuestionNumber>
        <QuestionText>{data[10].question}</QuestionText>
        <Checkbox type="checkbox" id={data[10].questionNumber} />
        <QuestionDescription>{data[10].description}</QuestionDescription>
      </QuestionCard>
      <QuestionCard>
        <QuestionNumber>{data[11].questionNumber}</QuestionNumber>
        <QuestionText>{data[11].question}</QuestionText>
        <Checkbox type="checkbox" id={data[11].questionNumber} />
        <QuestionDescription>{data[11].description}</QuestionDescription>
      </QuestionCard>
      <QuestionCard>
        <QuestionNumber>{data[12].questionNumber}</QuestionNumber>
        <QuestionText>{data[12].question}</QuestionText>
        <Checkbox type="checkbox" id={data[12].questionNumber} />
        <QuestionDescription>{data[12].description}</QuestionDescription>
      </QuestionCard>
      <QuestionCard>
        <QuestionNumber>{data[13].questionNumber}</QuestionNumber>
        <QuestionText>{data[13].question}</QuestionText>
        <Checkbox type="checkbox" id={data[13].questionNumber} />
        <QuestionDescription>{data[13].description}</QuestionDescription>
      </QuestionCard>
      <QuestionCard>
        <QuestionNumber>{data[14].questionNumber}</QuestionNumber>
        <QuestionText>{data[14].question}</QuestionText>
        <Checkbox type="checkbox" id={data[14].questionNumber} />
        <QuestionDescription>{data[14].description}</QuestionDescription>
      </QuestionCard>
    </QuestionContainer>
    <NextPrevButton prevLink="/" nextLink="/" />
  </>
);

export default SectionA;
