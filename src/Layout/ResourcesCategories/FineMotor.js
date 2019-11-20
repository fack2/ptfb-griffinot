import React from 'react';
import FineMotorData from '../../Data/FineMotorData';
import {
 TitleCategory, Container, BodyCategory, Link 
} from './index.style';
import ResourcesCategory from '../../CommonComponents/ResourcesCategory';
import PrevButton from '../../CommonComponents/PrevButton';

const FineMotor = () => (
  <>
    <Container>
      <TitleCategory>Fine Motor Skill Tips</TitleCategory>
    </Container>
    <BodyCategory>
      {FineMotorData.map(({ Title, ImageCategory, LinkCategory }) => (
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
export default FineMotor;
