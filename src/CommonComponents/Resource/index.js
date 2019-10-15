import React from 'react';
import data from '../../Data/resourceDate';

import {
 Container, Image, Title, CardItem 
} from './index.style';

const Resource = () => {
  const resourceData = data.map(({ id, picture, title }) => (
    <React.Fragment key={id}>
      <CardItem>
        <Image src={picture} />
        <Title>{title}</Title>
      </CardItem>
    </React.Fragment>
  ));
  return <Container>{resourceData}</Container>;
};
export default Resource;
