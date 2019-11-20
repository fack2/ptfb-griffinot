import React from 'react';
import categoryData from '../../Data/categoryData';
import {
  TitleCategory, Container, BodyCategory, Link,
} from './index.style';
import ResourcesCategory from '../../CommonComponents/ResourcesCategory';
import PrevButton from '../../CommonComponents/PrevButton';

const SensoryTraining = () => (
  <>
    <Container>
      <TitleCategory>Sensory Training</TitleCategory>
    </Container>
    <BodyCategory>
      {categoryData.map(({ Title, ImageCategory, LinkCategory }) => (
        <Link href={LinkCategory}>
          <ResourcesCategory Title={Title} ImageCategory={ImageCategory} />
        </Link>
      ))}
    </BodyCategory>
    <PrevButton
      prevLink="/resources"
   

    />
  </>
);
export default SensoryTraining;
