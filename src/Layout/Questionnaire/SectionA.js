/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import LevelData from './QuestionnaireData';
import PopupPage from '../../CommonComponents/PopupPage';
import data from '../../Data/questionnareData';
import QuestionnaireData from './QuestionnaireData';
import { Header, Paragraph, Line } from './index.style';
import NextButton from '../../CommonComponents/NextButton';
import Question from '../../CommonComponents/Question';

const QuestionsData = data.slice(0, 5);

const SectionA = ({
  checkboxChange, nextButtonClickHandler, checkedQuestions, checkedItems,
}) => (
  <>
    <Header>We just need you to answer some questions to determine where to start:</Header>
    <Line />
    <Paragraph>Please check the box if your child is able to do the following:</Paragraph>

    <Question
      data={QuestionsData}
      checkedQuestions={checkedQuestions}
      checkboxChange={checkboxChange}
    />

    {checkedItems.length >= QuestionnaireData[0].limit ? (
      <NextButton nextLink="/questionnaire" nextButtonClickHandler={nextButtonClickHandler} />
    ) : (
      <Popup modal trigger={<NextButton />}>
        {(close) => (
          <PopupPage
            close={close}
            description={LevelData[0].uncompletedMsg}
            optionLink="/resources"
            optionText="Our resources"
            NextLink={LevelData[0].uncompletedAction}
          />
        )}
      </Popup>
    )}
  </>
);

SectionA.propTypes = {
  checkboxChange: PropTypes.func.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
  checkedQuestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool])).isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool])).isRequired,
};

export default SectionA;
