import React from 'react';

import {
 Container, Image, Title, CardItem 
} from './index.style';

const Resource = ({ id, picture, title }) => (
  <Container key={id}>
    <CardItem>
      <Image src={picture} />
      <Title>{title}</Title>
    </CardItem>
  </Container>
);
export default Resource;
