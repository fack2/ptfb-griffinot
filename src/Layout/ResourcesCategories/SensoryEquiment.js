import React from 'react';
import SensoryEquimentData from '../../Data/SensoryEquimentData';
import {
 TitleCategory, Container, BodyCategory, Link 
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
    <PrevButton
      prevLink="/resources"
      marginTop="33%"
      marginLeft="6%"
      marginLeft1="6%"
      marginLeft2="14%"
      marginTop1="5%"
      marginLeft4="14%"
      marginTop4="7%"
      marginLeft3="19%"
      marginTop3="-5%"
    />
  </>
);
export default SensoryEquiment;
