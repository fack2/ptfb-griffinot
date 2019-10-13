import React from 'react';
import Question from '../../CommonComponents/Question/index';
import data from '../../Data/data';
import DataContext from './index';

// eslint-disable-next-line import/prefer-default-export
export const SectionA = ({ checked, questionNumber }) => {
  const QuestionsData = data.slice(0, 5);
  return (
    <DataContext.Consumer>
      <Question data={QuestionsData} />
    </DataContext.Consumer>
  );
};
