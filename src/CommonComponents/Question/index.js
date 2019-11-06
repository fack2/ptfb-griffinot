import React from 'react';
import {
  QuestionCard,
  QuestionText,
  QuestionDescription,
  QuestionNumber,
  Checkbox,
} from './index.style';

const Question = ({ checkboxChange, checkedQuestions, data }) => data.map((QuestionsData, index, dataArray) => (
  <QuestionCard
    id={QuestionsData.questionNumber}
    onClick={() => checkboxChange(QuestionsData.questionNumber)}
  >
    <QuestionNumber>{QuestionsData.questionNumber}</QuestionNumber>
    <QuestionText>{QuestionsData.question}</QuestionText>
    <Checkbox type="checkbox" checked={checkedQuestions[dataArray[index].questionNumber - 1]} />
    <QuestionDescription>{QuestionsData.description}</QuestionDescription>
  </QuestionCard>
));

export default Question;
