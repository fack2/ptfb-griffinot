import React from 'react';
import {
  CircleLevel,
  ParagraphLevel,
  TitleLevel,
  LevelDiv,
  TitleParagraph,
} from './index.style';

const Level = () => (
  <LevelDiv>
    <CircleLevel>
      <ParagraphLevel>Level 1</ParagraphLevel>
    </CircleLevel>

    <TitleLevel>
      <TitleParagraph>Fine Motor Skills Programme</TitleParagraph>
    </TitleLevel>
  </LevelDiv>
);
export default Level;
