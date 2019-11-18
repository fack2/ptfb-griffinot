import React from 'react';
import PrevButton from '../../CommonComponents/PrevButton';
import data from '../../Data/videoData';
import logo from '../../assets/video-logo.png';
import {
  VideosContainer,
  IconTitleContainer,
  VideoIcon,
  PageTitle,
  VideoCard,
  VideoTitle,
} from './index.style';

const Videos = () => {
  const changeWidth = () => {
    const screenWidth = window.screen.width;
    let width = '640px';
    if (screenWidth <= 480) {
      width = '100%';
    } else if (screenWidth >= 481 && screenWidth <= 767) {
      width = '100%';
    } else if (screenWidth >= 768 && screenWidth <= 1025) {
      width = '73%';
    }
    return width;
  };
  const changeHeight = () => {
    const screenWidth = window.screen.width;
    let height = '400px';
    if (screenWidth <= 480) {
      height = '220px';
    } else if (screenWidth >= 481 && screenWidth <= 767) {
      height = '281px';
    } else if (screenWidth >= 768 && screenWidth <= 1025) {
      height = '301px';
    }

    return height;
  };
  return (
    <>
      <IconTitleContainer>
        <VideoIcon src={logo} alt="video logo" />
        <PageTitle>Introductory Videos</PageTitle>
      </IconTitleContainer>

      <VideosContainer>
        {data.map(({ id, video, title }) => (
          <>
            <VideoTitle>{title}</VideoTitle>
            <VideoCard
              key={id}
              height={changeHeight()}
              width={changeWidth()}
              url={video}
            />
          </>
        ))}
      </VideosContainer>
      <PrevButton
        prevLink="/resources"
      />
    </>
  );
};

export default Videos;
