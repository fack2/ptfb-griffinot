import React from 'react';
import PropTypes from 'prop-types';

import {
  Price, Description, Container, Image, Title, CardItem, TextOne,
} from './index.style';

const Resource = ({
  id, picture, title, price, description, onClick,
}) => (
  <Container>
    <CardItem key={id}>
      <Image src={picture} />
      <TextOne onClick={onClick} name={id}>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <Description>{description}</Description>
      </TextOne>
    </CardItem>
  </Container>
);

Resource.proypes = {
  id: PropTypes.integer,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Resource;
