import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import prev from '../../assets/prevButton.png';
import {
  Prevbutton,
  PrevText,
  Container,
  PrevItem,
  LinkButton,
} from './index.style';

const PrevButton = ({ prevLink }) => (
  <Container>
    <LinkButton href={prevLink}>
      <PrevItem>
        <Prevbutton alt="PreviousButton" src={prev} />
        <PrevText>Prev</PrevText>
      </PrevItem>
    </LinkButton>
  </Container>
);

PrevButton.propTypes = {
  prevLink: PropTypes.bool.isRequired,
};

export default PrevButton;
