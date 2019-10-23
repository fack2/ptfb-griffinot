import React from 'react';
import SensoryIntroductionData from '../../Data/SensoryIntroductionData';
import {
  TitleCategory, Container, BodyCategory, Link,
} from './index.style';
import ResourcesCategory from '../../CommonComponents/ResourcesCategory';
import PrevButton from '../../CommonComponents/PrevButton';

const SensoryIntroduction = () => (
  <>
    <Container>
      <TitleCategory>Sensory Introduction</TitleCategory>
    </Container>
    <BodyCategory>
      {SensoryIntroductionData.map(({ Title, ImageCategory, LinkCategory }) => (
        <Link href={LinkCategory}>

          <ResourcesCategory Title={Title} ImageCategory={ImageCategory} />
        </Link>
      ))}
    </BodyCategory>
    <PrevButton prevLink="/resources"  />
  </>
);
export default SensoryIntroduction;
