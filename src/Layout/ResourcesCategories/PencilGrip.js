import React from 'react';
import PencilGripData from '../../Data/PencilGripData';
import {
 TitleCategory, Container, BodyCategory, Link 
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
    <PrevButton
      prevLink="/resources"
      marginTop="-2%"
      marginLeft="6%"
      marginLeft1="6%"
      marginLeft2="14%"
      marginTop1="-3%"
      marginLeft4="14%"
      marginTop4="-3%"
      marginLeft3="19%"
      marginTop3="-5%"
    />
  </>
);
export default PencilGrip;
