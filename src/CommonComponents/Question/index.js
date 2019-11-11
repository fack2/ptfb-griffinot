import React from 'react';
import data from '../../Data/questionsData';
import {
  QuestionCard,
  QuestionText,
  QuestionDescription,
  QuestionNumber,
  Checkbox,
} from './index.style';

const Question = ({
  checkedQuestions, checkboxChange, sliceFromQuestion, sliceToQuestion,
}) => data.slice(sliceFromQuestion, sliceToQuestion).map((QuestionsData, index, slicedArray) => (
  <QuestionCard
    id={QuestionsData.questionNumber}
    key={QuestionsData.questionNumber}
    onClick={() => checkboxChange(QuestionsData.questionNumber)}
  >
    <QuestionNumber>{ QuestionsData.questionNumber }</QuestionNumber>
    <QuestionText>{ QuestionsData.question }</QuestionText>
    <Checkbox type="checkbox" checked={checkedQuestions[slicedArray[index].questionNumber - 1]} />
    <QuestionDescription>{ QuestionsData.description }</QuestionDescription>
  </QuestionCard>
));

export default Question;
