import React from 'react';
import PropTypes from 'prop-types';
import circle from '../../assets/circle24.png';
import {

  ParagraphLevel,
  TitleLevel,
  LevelDiv,
  TitleParagraph,
  DivTitle,
  DescriptionLevel,
  CircleImage,
  DivCircle,
} from './index.style';

const Level = ({ levelScore, titleLevel, description }) => (
  <>
    <LevelDiv>
      <DivTitle>
        <DivCircle>
          <CircleImage alt="circle-level" src={circle} />
          <ParagraphLevel>{levelScore}</ParagraphLevel>
        </DivCircle>
        <TitleLevel>
          <TitleParagraph>{titleLevel}</TitleParagraph>
        </TitleLevel>
      </DivTitle>

      <DescriptionLevel>{description}</DescriptionLevel>
    </LevelDiv>
  </>
);

Level.propTypes = {
  levelScore: PropTypes.string.isRequired,
  titleLevel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Level;
