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
      marginTop="70%"
      marginLeft="7%"
      marginLeft1="9%"
      marginTop1="35%"
      marginLeft2="16%"
      marginLeft3="17%"
      marginTop3="32%"
      marginTop4="35%"
      marginLeft4="14%"
      // marginLeft3="7%"
      // marginLeft="9%"
      // marginTop1="35%"
      // marginLeft1="16%"
      // marginTop3="35%"
      // marginLeft4="16%"

    />
  </>
);
export default SensoryTraining;
