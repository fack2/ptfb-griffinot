import React from 'react';
import NotFoundPageImg from '../../assets/NotPageFound.png';
import {
 Container, NotFound, Description, NotFoundImg 
} from './index.style';

const NotPageFound = () => (
  <>
    <Container>
      <NotFound>Page Not Found</NotFound>
      <NotFoundImg src={NotFoundPageImg} />
      <Description>
        Sorry, we couldn't find the page you were for looking for.
        <br />
        We suggist that you return to main section.
      </Description>
    </Container>
  </>
);
export default NotPageFound;
