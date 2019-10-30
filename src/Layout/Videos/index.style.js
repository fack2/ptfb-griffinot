import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const IconTitleContainer = styled.div`
  margin-top: 13%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 1281px) {
    margin-left: 1%;
  }
`;

export const VideoIcon = styled.img`
  width: 7%;
  margin-right: 3%;
  height: 31px;
  margin-top: -2%;

  @media (min-width: 481px) and (max-width: 767px) {
    width: 8%;
    height: 62px;
    margin-top: -2.5%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 5%;
    height: 43px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 6%;
    margin-right: 3%;
    height: 42px;
  }
  @media (min-width: 1281px) {
    width: 6%;
    height: 50px;
    margin-right: 2%;
  }
`;

export const PageTitle = styled.h1`
  font-size: 1.8rem;
  color: #205c8b;
  font-weight: 600;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 2.6rem;
  }
  @media (min-width: 1281px) {
    font-size: 3rem;
  }
`;

export const VideosContainer = styled.div`
  margin-top: 10%;
  margin-bottom: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideoTitle = styled.span`
  font-size: 1.5rem;
  color: var(--main-font-color);
  font-weight: 600;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 2rem;
  }
  @media (min-width: 1281px) {
    font-size: 2.4rem;
  }
`;

export const VideoCard = styled(ReactPlayer)`
  margin: 5% 0% 15%;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 88%;
    height: 334px;
  }
`;
