import React from 'react';
import levelData from '../../Data/levelData';
import { Title, Bodypage, Link } from './index.style';
import Level from '../../CommonComponents/Level';

const Levels = () => (
  <>
    <Title>Here are a courses for all level</Title>
    <Bodypage>
      {levelData.map(({ levelScore, titleLevel, link }) => (
        <Link href={link}>
          <Level levelScore={levelScore} titleLevel={titleLevel} />
        </Link>
      ))}
    </Bodypage>
  </>
);

export default Levels;
