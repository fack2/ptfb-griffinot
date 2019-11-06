import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import LevelData from './QuestionnaireData';
import PopupPage from '../../CommonComponents/PopupPage';
import data from '../../Data/questionnareData';
import QuestionnaireData from './QuestionnaireData';
import {
  QuestionCard,
  QuestionText,
  QuestionDescription,
  QuestionNumber,
  Checkbox,
  QuestionContainer,
  Header,
  Paragraph,
  Line,
} from './index.style';
import NextButton from '../../CommonComponents/NextButton';

const SectionA = ({
  checkboxChange,
  nextButtonClickHandler,
  checkedQuestions,
  checkedItems,
}) => (
  <>
    <Header>
      We just need you to answer some questions to determine where to start:
    </Header>
    <Line />
    <QuestionContainer>
      <Paragraph>
        Please check the box if your child is able to do the following:
      </Paragraph>
      <div>
        <QuestionCard
          id={data[0].questionNumber}
          onClick={() => checkboxChange(data[0].questionNumber)}
        >
          <QuestionNumber>{data[0].questionNumber}</QuestionNumber>
          <QuestionText>{data[0].question}</QuestionText>
          <Checkbox
            type="checkbox"
            checked={checkedQuestions[data[0].questionNumber - 1]}
          />
          <QuestionDescription>{data[0].description}</QuestionDescription>
        </QuestionCard>
      </div>
      <QuestionCard
        id={data[1].questionNumber}
        onClick={() => checkboxChange(data[1].questionNumber)}
      >
        <QuestionNumber>{data[1].questionNumber}</QuestionNumber>
        <QuestionText>{data[1].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[1].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[1].questionNumber - 1]}
        />

        <QuestionDescription>{data[1].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard
        id={data[2].questionNumber}
        onClick={() => checkboxChange(data[2].questionNumber)}
      >
        <QuestionNumber>{data[2].questionNumber}</QuestionNumber>
        <QuestionText>{data[2].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[2].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[2].questionNumber - 1]}
        />
        <QuestionDescription>{data[2].description}</QuestionDescription>
      </QuestionCard>
      <QuestionCard
        id={data[3].questionNumber}
        onClick={() => checkboxChange(data[3].questionNumber)}
      >
        <QuestionNumber>{data[3].questionNumber}</QuestionNumber>
        <QuestionText>{data[3].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[3].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[3].questionNumber - 1]}
        />
        <QuestionDescription>{data[3].description}</QuestionDescription>
      </QuestionCard>
      <QuestionCard
        id={data[4].questionNumber}
        onClick={() => checkboxChange(data[4].questionNumber)}
      >
        <QuestionNumber>{data[4].questionNumber}</QuestionNumber>
        <QuestionText>{data[4].question}</QuestionText>
        <Checkbox
          type="checkbox"
          id={data[4].questionNumber}
          onChange={checkboxChange}
          checked={checkedQuestions[data[4].questionNumber - 1]}
        />

        <QuestionDescription>{data[4].description}</QuestionDescription>
      </QuestionCard>
    </QuestionContainer>

    {checkedItems.length >= QuestionnaireData[0].limit ? (
      <NextButton
        nextLink="/questionnaire"
        nextButtonClickHandler={nextButtonClickHandler}
      />
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
  checkedQuestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool]))
    .isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool]))
    .isRequired,
};

export default SectionA;
