import React from 'react';
import PropTypes from 'prop-types';

import {
  CircleLevel,
  ParagraphLevel,
  TitleLevel,
  LevelDiv,
  TitleParagraph,
  DivTitle,
  DescriptionLevel,
} from './index.style';

const Level = ({ levelScore, titleLevel, description }) => (
  <>
    <LevelDiv>
      <DivTitle>
        <CircleLevel>
          <ParagraphLevel>{levelScore}</ParagraphLevel>
        </CircleLevel>

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
