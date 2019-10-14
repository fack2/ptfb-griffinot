import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import prev from '../../assets/prevButton.png';
import {
  PrevNextButton,
  PrevNextText,
  Container,
  PrevNextItem,
  LinkButton,
} from './index.style';

const PrevButton = ({ prevLink }) => (
  <Router>
    <Container>
      <LinkButton href={prevLink}>
        <PrevNextItem>
          <PrevNextButton alt="PreviousButton" src={prev} />
          <PrevNextText>Prev</PrevNextText>
        </PrevNextItem>
      </LinkButton>
    </Container>
  </Router>
);

PrevButton.propTypes = {
  prevLink: PropTypes.bool.isRequired,

};

export default PrevButton;
