import React from 'react';
import PropTypes from 'prop-types';
import next from '../../assets/nextButton.png';
import {
  Nextbutton,
  NextText,
  Container,
  NextItem,
  LinkButton,
} from './index.style';

const NextButton = ({ nextLink }) => (

  <Container>
    <LinkButton to={nextLink}>
      <NextItem>
        <NextText>Next</NextText>
        <Nextbutton alt="NextButton" src={next} />
      </NextItem>
    </LinkButton>
  </Container>

);

NextButton.propTypes = {
  nextLink: PropTypes.bool.isRequired,
};

export default NextButton;
