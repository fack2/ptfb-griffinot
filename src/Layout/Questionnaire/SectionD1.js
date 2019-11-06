/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import LevelPop from '../../CommonComponents/LevelPop';
import data from '../../Data/questionnareData';
import QuestionnaireData from './QuestionnaireData';
import {
  QuestionContainer,
  Paragraph,
  DivNextPrev,
} from './index.style';
import NextButton from '../../CommonComponents/NextButton';
import PrevButton from '../../CommonComponents/PrevButton';
import Question from '../../CommonComponents/Question';

const QuestionsData = data.slice(15, 20);

const SectionD1 = ({
  checkboxChange, nextButtonClickHandler, checkedQuestions, checkedItems,
}) => (
  <>
    <QuestionContainer>
      <Paragraph>Please check the box if your child is able to do the following:</Paragraph>

      <Question
        data={QuestionsData}
        checkedQuestions={checkedQuestions}
        checkboxChange={checkboxChange}
      />

      <DivNextPrev>
        <PrevButton prevLink="/questionnaire" nextButtonClickHandler={nextButtonClickHandler} />

        {checkedItems.length >= QuestionnaireData[4].limit ? (
          <NextButton nextLink="/questionnaire" nextButtonClickHandler={nextButtonClickHandler} />
        ) : (
          <Popup modal trigger={<NextButton />}>
            {(close) => (
              <LevelPop
                close={close}
                levelScore={QuestionnaireData[4].LevelNo}
                description={QuestionnaireData[4].uncompletedMsg}
                NextLink={QuestionnaireData[4].uncompletedAction}
                No={QuestionnaireData[4].LevelNo}
              />
            )}
          </Popup>
        )}
      </DivNextPrev>
    </QuestionContainer>
  </>
);

SectionD1.propTypes = {
  checkboxChange: PropTypes.func.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
  checkedQuestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool])).isRequired,
};

export default SectionD1;
