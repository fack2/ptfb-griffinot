import React from 'react';
import PropTypes from 'prop-types';
import {
 Container, Image, Title, CardItem 
} from './index.style';

const Resource = (props) => {
  const { id, picture, title } = props;
  return (
    <Container>
      <CardItem key={id}>
        <Image src={picture} />
        <Title>{title}</Title>
      </CardItem>
    </Container>
  );
};

Resource.prototypes = {
  id: PropTypes.integer,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Resource;
