import React from 'react';
import Resource from '../../CommonComponents/Resource';
import PrevButton from '../../CommonComponents/PrevButton';
import { TitleH, Container } from './index.style';
import data from '../../Data/resourceDate';

const Resources = () => (
  <Container>
    <TitleH>Helpful resources</TitleH>
    {data.map(({ id, picture, title }) => (
      <Resource key={id} picture={picture} title={title} />
    ))}
    <PrevButton prevLink="/" />
  </Container>
);

export default Resources;
