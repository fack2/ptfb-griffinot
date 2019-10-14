import React from 'react';

import Resource from '../../CommonComponents/Resource';
import PrevButton from '../../CommonComponents/PrevButton';
import { TitleH, Container } from './index.style';

const Resources = ({ prevLink }) => (
  <Container>
    <TitleH>Helpful resources</TitleH>
    <Resource />
    <PrevButton prevLink="/" />
  </Container>
);

export default Resources;
