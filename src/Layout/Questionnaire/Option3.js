import React from 'react';
import {
  TitleOption, OptionDiv, ParagraphObtion, DivData, LinkOption,
} from './index.style';
import PrevButton from '../../CommonComponents/PrevButton';

const Option3 = () => (
  <>
    <TitleOption>
      What skill do you feel your child needs the most help with improving, at the moment?
    </TitleOption>

    <DivData>
      <LinkOption href="/">
        <OptionDiv>
          <ParagraphObtion>I would like to help them to improve their pencil grasp</ParagraphObtion>
        </OptionDiv>
      </LinkOption>
      <LinkOption href="/">
        <OptionDiv>
          <ParagraphObtion>
            I would like to help them to improve their general fine motor skills.
          </ParagraphObtion>
        </OptionDiv>
      </LinkOption>
      <LinkOption href="/">
        <OptionDiv>
          <ParagraphObtion>
            I would like to help them to improve their scissor skills..
          </ParagraphObtion>
        </OptionDiv>
      </LinkOption>
    </DivData>

    <PrevButton prevLink="/questionnaire" />
  </>
);
export default Option3;
