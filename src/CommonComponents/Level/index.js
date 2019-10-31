import React from 'react';
import PropTypes from 'prop-types';
import {
  ParagraphLevel,
  TitleLevel,
  LevelDiv,
  TitleParagraph,
  DivTitle,
  DescriptionLevel,
  CircleImage,
  DivCircle,
  Button,
  Link,
} from './index.style';
import circle from '../../assets/circle24.png';


const Level = ({
  levelScore, titleLevel, description, link,
}) => (
    <>
      <LevelDiv>
        <DivTitle>
          <DivCircle>
            <CircleImage alt="circle-level" src={circle} />
            <ParagraphLevel>{levelScore}</ParagraphLevel>
          </DivCircle>
          <TitleLevel>
            <TitleParagraph>{titleLevel}</TitleParagraph>
          </TitleLevel>
        </DivTitle>

        <DescriptionLevel>{description}</DescriptionLevel>

        <Link href={link}>
          <Button type="button">Purchase Level</Button>
        </Link>

      </LevelDiv>
    </>
  );

Level.propTypes = {
  levelScore: PropTypes.string.isRequired,
  titleLevel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Level;
