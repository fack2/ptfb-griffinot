import React from 'react';
import SensoryEquimentData from '../../Data/SensoryEquimentData';
import {
  TitleCategory, Container, BodyCategory, Link,
} from './index.style';
import ResourcesCategory from '../../CommonComponents/ResourcesCategory';
import PrevButton from '../../CommonComponents/PrevButton';

const SensoryEquiment = () => (
  <>
    <Container>
      <TitleCategory>Sensory Training</TitleCategory>
    </Container>
    <BodyCategory>
      {SensoryEquimentData.map(({ Title, ImageCategory, LinkCategory }) => (
        <Link href={LinkCategory}>

          <ResourcesCategory Title={Title} ImageCategory={ImageCategory} />
        </Link>
      ))}
    </BodyCategory>
    <PrevButton prevLink="/resources" margin="1rem" />
  </>
);
export default SensoryEquiment;