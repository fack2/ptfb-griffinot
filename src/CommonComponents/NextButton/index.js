import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import next from '../../assets/nextButton.png';
import {
  PrevNextButton,
  PrevNextText,
  Container,
  PrevNextItem,
  LinkButton
} from './index.style';

const NextButton = ({ nextLink }) => (
  <Router>
    <Container>
      <LinkButton to={nextLink}>
        <PrevNextItem>
          <PrevNextText>Next</PrevNextText>
          <PrevNextButton alt='NextButton' src={next} />
        </PrevNextItem>
      </LinkButton>
    </Container>
  </Router>
);

NextButton.propTypes = {
  nextLink: PropTypes.bool.isRequired
};

export default NextButton;
