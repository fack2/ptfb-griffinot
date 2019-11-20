import React from 'react';
import SensoryTopicsData from '../../Data/SensoryTopicsData';
import {
 TitleCategory, Container, BodyCategory, Link 
} from './index.style';
import ResourcesCategory from '../../CommonComponents/ResourcesCategory';
import PrevButton from '../../CommonComponents/PrevButton';

const SensoryTopics = () => (
  <>
    <Container>
      <TitleCategory>Sensory Topics</TitleCategory>
    </Container>
    <BodyCategory>
      {SensoryTopicsData.map(({ Title, ImageCategory, LinkCategory }) => (
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
export default SensoryTopics;
