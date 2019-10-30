import React from 'react';
import PropTypes from 'prop-types';

import { Image, Title, ResourseCard } from './index.style';

const Resource = ({
  id, picture, title, onClick,
}) => (
  <ResourseCard key={id} onClick={onClick}>
    <Image src={picture} />
    <Title>{title}</Title>
  </ResourseCard>
);

Resource.propTypes = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Resource;
