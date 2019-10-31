import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import LevelPop from '../../CommonComponents/LevelPop';
import LevelData from './QuestionnaireData';
import data from '../../Data/questionnareData';
import QuestionnaireData from './QuestionnaireData';
import {
  QuestionCard,
  QuestionText,
  QuestionDescription,
  QuestionNumber,
  Checkbox,
  QuestionContainer,
  Paragraph,
  DivNextPrev,
} from './index.style';

import NextButton from '../../CommonComponents/NextButton';
import PrevButton from '../../CommonComponents/PrevButton';

const SectionB = ({
  checkboxChange,
  nextButtonClickHandler,
  checkedQuestions,
  checkedItems,
}) => (
  <>
      <QuestionContainer>
        <Paragraph>
          Please check the box if your child is able to do the following:
        </Paragraph>
        <QuestionCard
          id={data[5].questionNumber}
          onClick={() => checkboxChange(data[5].questionNumber)}
        >
          <QuestionNumber>{data[5].questionNumber}</QuestionNumber>
          <QuestionText>{data[5].question}</QuestionText>
          <Checkbox
            type="checkbox"
            id={data[5].questionNumber}
            onChange={checkboxChange}
            checked={checkedQuestions[data[5].questionNumber - 1]}
          />
          <QuestionDescription>{data[5].description}</QuestionDescription>
        </QuestionCard>

        <QuestionCard
          id={data[6].questionNumber}
          onClick={() => checkboxChange(data[6].questionNumber)}
        >
          <QuestionNumber>{data[6].questionNumber}</QuestionNumber>
          <QuestionText>{data[6].question}</QuestionText>
          <Checkbox
            type="checkbox"
            id={data[6].questionNumber}
            onChange={checkboxChange}
            checked={checkedQuestions[data[6].questionNumber - 1]}
          />
          <QuestionDescription>{data[6].description}</QuestionDescription>
        </QuestionCard>

        <QuestionCard
          id={data[7].questionNumber}
          onClick={() => checkboxChange(data[7].questionNumber)}
        >
          <QuestionNumber>{data[7].questionNumber}</QuestionNumber>
          <QuestionText>{data[7].question}</QuestionText>
          <Checkbox
            type="checkbox"
            id={data[7].questionNumber}
            onChange={checkboxChange}
            checked={checkedQuestions[data[7].questionNumber - 1]}
          />
          <QuestionDescription>{data[7].description}</QuestionDescription>
        </QuestionCard>

        <QuestionCard
          id={data[8].questionNumber}
          onClick={() => checkboxChange(data[8].questionNumber)}
        >
          <QuestionNumber>{data[8].questionNumber}</QuestionNumber>
          <QuestionText>{data[8].question}</QuestionText>
          <Checkbox
            type="checkbox"
            id={data[8].questionNumber}
            onChange={checkboxChange}
            checked={checkedQuestions[data[8].questionNumber - 1]}
          />
          <QuestionDescription>{data[8].description}</QuestionDescription>
        </QuestionCard>

        <QuestionCard
          id={data[9].questionNumber}
          onClick={() => checkboxChange(data[9].questionNumber)}
        >
          <QuestionNumber>{data[9].questionNumber}</QuestionNumber>
          <QuestionText>{data[9].question}</QuestionText>
          <Checkbox
            type="checkbox"
            id={data[9].questionNumber}
            onChange={checkboxChange}
            checked={checkedQuestions[data[9].questionNumber - 1]}
          />
          <QuestionDescription>{data[9].description}</QuestionDescription>
        </QuestionCard>

        <DivNextPrev>
          <PrevButton
            prevLink="/questionnaire"
            nextButtonClickHandler={nextButtonClickHandler}
          />

          {checkedItems.length >= QuestionnaireData[1].limit ? (
            <NextButton
              nextLink="/questionnaire"
              nextButtonClickHandler={nextButtonClickHandler}
            />
          ) : (
            <Popup modal trigger={<NextButton />}>
                {(close) => (
                  <LevelPop
                    close={close}
                    levelScore={LevelData[1].LevelNo}
                    description={LevelData[1].uncompletedMsg}
                    NextLink={LevelData[1].uncompletedAction}
                    No={LevelData[1].LevelNo}
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
  checkedQuestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool]))
    .isRequired,
};

export default SectionB;
