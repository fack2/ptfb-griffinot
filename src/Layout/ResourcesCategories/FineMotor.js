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
      marginTop="60%"
      marginLeft="7%"
      marginLeft1="6%"
      marginLeft2="14%"
      marginTop1="14%"
      marginLeft4="14%"
      marginTop4="27%"
      marginLeft3="19%"
      marginTop3="8%"
    />
  </>
);
export default FineMotor;
