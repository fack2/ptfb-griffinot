import React from 'react';
import NotFoundPageImg from '../../assets/NotFound.png';
import { Container, Description, NotFoundImg } from './index.style';

const NotPageFound = () => (
  <Container>
    <NotFoundImg src={NotFoundPageImg} />
    <Description>
      Sorry, we couldn&apos;t find the page you were for looking for. We suggist that you return to
      main page.
    </Description>
  </Container>
);
export default NotPageFound;
