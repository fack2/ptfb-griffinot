import React from 'react';
import levelData from '../../Data/levelData';
import { Title, Bodypage } from './index.style';
import Level from '../../CommonComponents/Level';

const Levels = () => (
  <>
    <Title>Here are a courses for all level</Title>
    <Bodypage>
      {levelData.map(({ levelScore, titleLevel }) => (
        <Level levelScore={levelScore} titleLevel={titleLevel} />
      ))}
    </Bodypage>
  </>
);

export default Levels;
