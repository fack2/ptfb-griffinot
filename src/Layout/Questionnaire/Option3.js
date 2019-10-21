import React from 'react';
import PropTypes from 'prop-types';
import {
  TitleOption, Option, DivData, LinkOption,
} from './index.style';
import PrevButton from '../../CommonComponents/PrevButton';

const Option3 = ({ nextButtonClickHandler }) => (
  <>
    <TitleOption>
      What skill do you feel your child needs the most help with improving, at the moment?
    </TitleOption>

    <DivData>
      <LinkOption to="/questionnaire">
        <Option>I would like to help them to improve their pencil grasp</Option>
      </LinkOption>
      <LinkOption to="/questionnaire">
        <Option name="nextBtn" onClick={nextButtonClickHandler}>
          I would like to help them to improve their general fine motor skills.
        </Option>
      </LinkOption>
      <LinkOption to="/questionnaire">
        <Option>
            I would like to help them to improve their scissor skills..
        </Option>
      </LinkOption>
    </DivData>

    <PrevButton prevLink="/questionnaire" nextButtonClickHandler={nextButtonClickHandler} />
  </>
);

Option3.propTypes = {
  nextButtonClickHandler: PropTypes.func.isRequired,
};
export default Option3;
