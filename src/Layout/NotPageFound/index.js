import React from 'react';
import NotFoundPageImg from '../../assets/NotFound.png';
import { Container, NotFound, Description, NotFoundImg } from './index.style';

const NotPageFound = () => (
  <Container>
    <NotFoundImg src={NotFoundPageImg} />
    <Description>
      Sorry, we couldn't find the page you were for looking for.
      <br />
      We suggist that you return to main page.
    </Description>
  </Container>
);
export default NotPageFound;
