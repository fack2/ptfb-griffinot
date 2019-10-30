import React from 'react';
import SensoryIntroductionData from '../../Data/SensoryIntroductionData';
import {
 TitleCategory, Container, BodyCategory, Link 
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

    <PrevButton
      prevLink="/resources"
      marginLeft="6%"
      marginLeft1="6%"
      marginLeft2="14%"
      marginTop1="-2%"
      marginLeft4="14%"
      marginTop4="-2%"
      marginLeft3="19%"
      marginTop3="-5%"
    />
  </>
);
export default SensoryIntroduction;
