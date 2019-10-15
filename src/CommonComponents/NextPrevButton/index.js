import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import prev from '../../assets/prevButton.png';
import next from '../../assets/nextButton.png';
import {
  PrevNextButton, PrevNextText, Container, PrevNextItem, LinkButton,
} from './index.style';

const NextPrevButton = ({ prevLink, nextLink }) => (
  <Router>
    <Container>
      <LinkButton href={prevLink}>
        <PrevNextItem>
          <PrevNextButton alt="PreviousButton" src={prev} />
          <PrevNextText>Prev</PrevNextText>
        </PrevNextItem>
      </LinkButton>
      
      <LinkButton href={nextLink}>
        <PrevNextItem>
          <PrevNextText>Next</PrevNextText>
          <PrevNextButton alt="NextButton" src={next} />
        </PrevNextItem>
      </LinkButton>
    </Container>
  </Router>
);

NextPrevButton.propTypes = {
  prevLink: PropTypes.string.isRequired,
  nextLink: PropTypes.string.isRequired,
};

export default NextPrevButton;
