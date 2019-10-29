/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
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

const SectionD1 = ({
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
      <QuestionCard>
        <QuestionNumber>{data[15].questionNumber}</QuestionNumber>
        <QuestionText>{data[15].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[15].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[15].questionNumber - 1]}
        />
        <QuestionDescription>{data[15].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[16].questionNumber}</QuestionNumber>
        <QuestionText>{data[16].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[16].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[16].questionNumber - 1]}
        />
        <QuestionDescription>{data[16].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[17].questionNumber}</QuestionNumber>
        <QuestionText>{data[17].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[17].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[17].questionNumber - 1]}
        />
        <QuestionDescription>{data[17].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[18].questionNumber}</QuestionNumber>
        <QuestionText>{data[18].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[18].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[18].questionNumber - 1]}
        />
        <QuestionDescription>{data[18].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard height="110px" height3="96px" height4="110px">
        <QuestionNumber>{data[19].questionNumber}</QuestionNumber>
        <QuestionText>{data[19].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[19].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[19].questionNumber - 1]}
        />
        <QuestionDescription>{data[19].description}</QuestionDescription>
      </QuestionCard>
      <DivNextPrev>
        <PrevButton
          prevLink="/questionnaire"
          nextButtonClickHandler={nextButtonClickHandler}
        />

        {checkedItems.length >= QuestionnaireData[4].limit ? (
          <NextButton
            Margin="55rem"
            nextLink="/questionnaire"
            nextButtonClickHandler={nextButtonClickHandler}
          />
        ) : (
          <Popup modal trigger={<NextButton Margin="55rem" />}>
            <LevelPop
              levelScore={LevelData[4].LevelNo}
              description={LevelData[4].uncompletedMsg}
              NextLink={LevelData[4].uncompletedAction}
              No={LevelData[4].LevelNo}
            />
          </Popup>
        )}
      </DivNextPrev>
    </QuestionContainer>
  </>
);

SectionD1.propTypes = {
  checkboxChange: PropTypes.func.isRequired,
  nextButtonClickHandler: PropTypes.func.isRequired,
  checkedQuestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool]))
    .isRequired,
};

export default SectionD1;
