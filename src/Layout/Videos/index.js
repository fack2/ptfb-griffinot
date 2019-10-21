import React from 'react';
import PrevButton from '../../CommonComponents/PrevButton';
import data from '../../Data/videoData';
import logo from '../../assets/video-logo.svg';
import {
  Container,
  ImgTitle,
  Image,
  Title,
  VideoCard,
  VideoTitle,
} from './index.style';

const Videos = () => (
  <>
    <Container>
      <ImgTitle>
        <Image src={logo} alt="video logo" />
        <Title>Introductory Videos</Title>
      </ImgTitle>
      {data.map(({
 id, video, title, height, width 
}) => (
        <>
          <VideoCard key={id} height={height} width={width} url={video} />

          <VideoTitle>{title}</VideoTitle>
        </>
      ))}
    </Container>
    <PrevButton prevLink="/resources" />
  </>
);

export default Videos;
