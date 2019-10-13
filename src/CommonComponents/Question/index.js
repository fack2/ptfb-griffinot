import React from 'react';
import {
  QuestionCard,
  QuestionText,
  QuestionDescription,
  QuestionNumber,
  Checkbox,
} from './index.style';

const Question = ({ QuestionsData, checkboxChange }) => QuestionsData.map(({ questionNumber, question, description }) => (
  <QuestionCard key={questionNumber}>
    <QuestionNumber>{questionNumber}</QuestionNumber>
    <QuestionText>{question}</QuestionText>
    <QuestionDescription>{description}</QuestionDescription>
    <Checkbox type="checkbox" id={questionNumber} onChange={checkboxChange} />
  </QuestionCard>
));

export default Question;
