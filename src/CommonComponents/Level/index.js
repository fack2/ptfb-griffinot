import React from 'react';
import PropTypes from 'prop-types';

import {
  CircleLevel,
  ParagraphLevel,
  TitleLevel,
  LevelDiv,
  TitleParagraph,
} from './index.style';

const Level = ({ levelScore, titleLevel }) => (
  <LevelDiv>
    <CircleLevel>
      <ParagraphLevel>{levelScore}</ParagraphLevel>
    </CircleLevel>

    <TitleLevel>
      <TitleParagraph>{titleLevel}</TitleParagraph>
    </TitleLevel>
  </LevelDiv>
);

Level.propTypes = {
  levelScore: PropTypes.string.isRequired,
  titleLevel: PropTypes.string.isRequired,

};
export default Level;
