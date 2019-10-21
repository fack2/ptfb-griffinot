import React from 'react';
import Popup from 'reactjs-popup';
import PopupPage from '../../CommonComponents/PopupPage';
import data from '../../Data/questionnareData';
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

const SectionA = () => (
  <>
    <Header>We just need you to answer some questions to determine where to start:</Header>
    <Line />
    <QuestionContainer>
      <Paragraph>Please check the box if your child is able to do the following:</Paragraph>
      <QuestionCard height="24rem">
        <QuestionNumber>{data[0].questionNumber}</QuestionNumber>
        <QuestionText>{data[0].question}</QuestionText>
        <Checkbox type="checkbox" id={data[0].questionNumber} />
        <QuestionDescription>{data[0].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard height="30rem">
        <QuestionNumber>{data[1].questionNumber}</QuestionNumber>
        <QuestionText>{data[1].question}</QuestionText>
        <Checkbox type="checkbox" id={data[1].questionNumber} />
        <QuestionDescription>{data[1].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[2].questionNumber}</QuestionNumber>
        <QuestionText>{data[2].question}</QuestionText>
        <Checkbox type="checkbox" id={data[2].questionNumber} />
        <QuestionDescription>{data[2].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard>
        <QuestionNumber>{data[3].questionNumber}</QuestionNumber>
        <QuestionText>{data[3].question}</QuestionText>
        <Checkbox type="checkbox" id={data[3].questionNumber} />
        <QuestionDescription>{data[3].description}</QuestionDescription>
      </QuestionCard>

      <QuestionCard height="31rem">
        <QuestionNumber>{data[4].questionNumber}</QuestionNumber>
        <QuestionText>{data[4].question}</QuestionText>
        <Checkbox type="checkbox" id={data[4].questionNumber} />
        <QuestionDescription>{data[4].description}</QuestionDescription>
      </QuestionCard>
    </QuestionContainer>

    <Popup modal trigger={<NextButton />}>
      <PopupPage description="Sorry, our program is too challenging for your child, you might want to check out these resources to get you started." NextLink="/" />
    </Popup>
  </>
);

export default SectionA;
