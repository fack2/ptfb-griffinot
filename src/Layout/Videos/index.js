import React from 'react';
import PrevButton from '../../CommonComponents/PrevButton';
import data from '../../Data/videoData';
import logo from '../../assets/video-logo.svg';
import {
  VideosContainer,
  IconTitleContainer,
  VideoIcon,
  PageTitle,
  VideoCard,
  VideoTitle,
} from './index.style';

const Videos = () => (
  <>
    <IconTitleContainer>
      <VideoIcon src={logo} alt="video logo" />
      <PageTitle>Introductory Videos</PageTitle>
    </IconTitleContainer>

    <VideosContainer>
      {data.map(({
        id, video, title, height, width,
      }) => (
        <>
          <VideoTitle>{title}</VideoTitle>
          <VideoCard key={id} height={height} width={width} url={video} />
        </>
      ))}
    </VideosContainer>
    <PrevButton prevLink="/resources" />
  </>
);

export default Videos;
