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

const QuestionsData = data.slice(5, 10);

const SectionB = ({
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

        {checkedItems.length >= QuestionnaireData[1].limit ? (
          <NextButton nextLink="/questionnaire" nextButtonClickHandler={nextButtonClickHandler} />
        ) : (
          <Popup modal trigger={<NextButton />}>
            {(close) => (
              <LevelPop
                close={close}
                levelScore={QuestionnaireData[1].LevelNo}
                description={QuestionnaireData[1].uncompletedMsg}
                NextLink={QuestionnaireData[1].uncompletedAction}
                No={QuestionnaireData[1].LevelNo}
              />
            )}
          </Popup>
        )}
      </DivNextPrev>
    </QuestionContainer>
  </>
);

SectionB.propTypes = {
  checkboxChange: PropTypes.func.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
  checkedQuestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool])).isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
};

export default SectionB;
