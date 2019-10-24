import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Image, Title, CardItem,
} from './index.style';

const Resource = ({
  id, picture, title, onClick,
}) => (
  <Container>
    <CardItem key={id}>
      <Image src={picture} />
      <Title onClick={onClick} name={id}>
        {title}
      </Title>
    </CardItem>
  </Container>
);

Resource.propTypes = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Resource;
