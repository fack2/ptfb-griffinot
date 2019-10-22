import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import PopupPage from '../../CommonComponents/PopupPage';
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
      <Option>I would like to help them to improve their pencil grasp</Option>

      <LinkOption to="/questionnaire">
        <Option name="nextBtn" onClick={nextButtonClickHandler}>
          I would like to help them to improve their general fine motor skills.
        </Option>
      </LinkOption>

      <Popup
        modal
        trigger={<Option>I would like to help them to improve their scissor skills..</Option>}
      >
        <PopupPage
          description="This programme will be launching in March 2020, please consider joining our mailing list for updates"
          optionLink="/"
          optionText="Our Mailing list"
          NextLink="/"
        />
      </Popup>
    </DivData>

    <PrevButton prevLink="/questionnaire" nextButtonClickHandler={nextButtonClickHandler} />
  </>
);

Option3.propTypes = {
  nextButtonClickHandler: PropTypes.func.isRequired,
};
export default Option3;
