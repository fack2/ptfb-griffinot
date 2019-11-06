/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import PopupPage from '../../CommonComponents/PopupPage';
import LevelPop from '../../CommonComponents/LevelPop';
import data from '../../Data/questionnareData';
import QuestionnaireData from './QuestionnaireData';
import { QuestionContainer, Paragraph, DivNextPrev } from './index.style';
import PrevButton from '../../CommonComponents/PrevButton';
import NextButton from '../../CommonComponents/NextButton';
import Question from '../../CommonComponents/Question';

const QuestionsData = data.slice(20, 25);

const SectionD2 = ({
  checkboxChange, checkedQuestions, checkedItems, nextButtonClickHandler,
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

        {checkedItems.length === QuestionnaireData[5].limit ? (
          <Popup modal trigger={<NextButton />}>
            {(close) => (
              <PopupPage
                close={close}
                description="Our programme will be too simple for your child and we would not recommend it.  It is likely your child doesn’t need extra support with developing their fine motor skills."
                NextLink="/"
              />
            )}
          </Popup>
        ) : (
          <Popup modal trigger={<NextButton />}>
            {(close) => (
              <LevelPop
                close={close}
                levelScore={QuestionnaireData[5].LevelNo}
                description={QuestionnaireData[5].uncompletedMsg}
                NextLink={QuestionnaireData[5].uncompletedAction}
                No={QuestionnaireData[5].LevelNo}
              />
            )}
          </Popup>
        )}
      </DivNextPrev>
    </QuestionContainer>
  </>
);

SectionD2.propTypes = {
  checkboxChange: PropTypes.func.isRequired,
  checkedQuestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool])).isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
};

export default SectionD2;
