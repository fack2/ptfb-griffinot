import React from 'react';
import PencilGripData from '../../Data/PencilGripData';
import {
  TitleCategory, Container, BodyCategory, Link,
} from './index.style';
import ResourcesCategory from '../../CommonComponents/ResourcesCategory';
import PrevButton from '../../CommonComponents/PrevButton';

const PencilGrip = () => (
  <>
    <Container>
      <TitleCategory>Pencil Grip Reviews</TitleCategory>
    </Container>
    <BodyCategory>
      {PencilGripData.map(({ Title, ImageCategory, LinkCategory }) => (
        <Link href={LinkCategory}>

          <ResourcesCategory Title={Title} ImageCategory={ImageCategory} />
        </Link>
      ))}
    </BodyCategory>
    <PrevButton prevLink="/resources" margin="0rem" />
  </>
);
export default PencilGrip;
