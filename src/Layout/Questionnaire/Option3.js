import React from 'react';
import Popup from 'reactjs-popup';
import PopupPage from '../../CommonComponents/PopupPage';
import {
  TitleOption,
  OptionDiv,
  ParagraphObtion,
  DivData,
  LinkOption,
} from './index.style';
import PrevButton from '../../CommonComponents/PrevButton';

const Option3 = () => (
  <>
    <TitleOption>
      What skill do you feel your child needs the most help with improving, at
      the moment?
    </TitleOption>

    <DivData>
      <OptionDiv>
        <ParagraphObtion>
          I would like to help them to improve their pencil grasp
        </ParagraphObtion>
      </OptionDiv>
      <OptionDiv>
        <ParagraphObtion>
          I would like to help them to improve their general fine motor
          skills.
        </ParagraphObtion>
      </OptionDiv>
      {/* the 3rd option */}
      <Popup
        modal
        trigger={(
          <OptionDiv>
            <ParagraphObtion>
              I would like to help them to improve their scissor skills..
            </ParagraphObtion>
          </OptionDiv>
        )}
      >
        <PopupPage description="This programme will be launching in March 2020, please consider joining our mailing list for updates" optionLink="/" optionText="Our Mailing list" NextLink="/" />
      </Popup>
    </DivData>

    <PrevButton prevLink="/questionnaire-section-c" />
  </>
);
export default Option3;
