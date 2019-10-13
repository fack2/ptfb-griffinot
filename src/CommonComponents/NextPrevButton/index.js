import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import prev from '../../assets/prevButton.png';
import next from '../../assets/nextButton.png';
import {
  PrevNextButton,
  PrevNextText,
  Container,
  PrevNextItem,
  LinkButton
} from './index.style';

const NextPrevButton = ({ prevLink, nextLink }) => (
  <Router>
    <Container>
      <LinkButton to={prevLink}>
        <PrevNextItem>
          <PrevNextButton alt='PreviousButton' src={prev} />
          <PrevNextText>Prev</PrevNextText>
        </PrevNextItem>
      </LinkButton>
      <LinkButton to={nextLink}>
        <PrevNextItem>
          <PrevNextText>Next</PrevNextText>
          <PrevNextButton alt='NextButton' src={next} />
        </PrevNextItem>
      </LinkButton>
    </Container>
  </Router>
);
export default NextPrevButton;
