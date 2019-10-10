import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import prev from '../../assets/prevButton.png';
import next from '../../assets/nextButton.png';
import {
  PrevNextButton,
  PrevNextText,
  Container,
  PrevNextItem,
} from './index.style';

const NextPrevButton = ({ prevLink, nextLink }) => (
  <Router>
    <Container>
      <Link to={prevLink} style={{ textDecoration: 'none' }}>
        <PrevNextItem>
          <PrevNextButton alt="PreviousButton" src={prev} />
          <PrevNextText>Prev</PrevNextText>
        </PrevNextItem>
      </Link>
      <Link to={nextLink} style={{ textDecoration: 'none' }}>
        <PrevNextItem>
          <PrevNextText>Next</PrevNextText>
          <PrevNextButton alt="NextButton" src={next} />
        </PrevNextItem>
      </Link>
    </Container>
  </Router>
);
export default NextPrevButton;
