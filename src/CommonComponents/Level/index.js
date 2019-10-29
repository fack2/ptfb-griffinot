import React from 'react';
import PropTypes from 'prop-types';
import circle from '../../assets/circle.png';
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
          <ParagraphLevel>level1</ParagraphLevel>
        </DivCircle>
        <TitleLevel>
          <TitleParagraph>Fine Motor Skills Programme</TitleParagraph>
        </TitleLevel>
      </DivTitle>

      <DescriptionLevel>Level 1 is the first stage of our programme.  It includes education videos, four warm ups and 32 activities for you to complete with your child. \n By the end of Level 1, your child should be able to snip with scissors, turn the tap on to wash their hands, pour themselves a drink and play successfully with toys like Duplo, blocks and large beads.</DescriptionLevel>
    </LevelDiv>
  </>
);

Level.propTypes = {
  levelScore: PropTypes.string.isRequired,
  titleLevel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Level;
