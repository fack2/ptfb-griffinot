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
    width: 6%;
    height: 34px;
    margin-top: -2.5%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 4%;
    height: 37px;
    margin-left: 12%;

  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 5%;
    margin-right: 4%;
    height: 35px;
    margin-left: 12%;
  }
  @media (min-width: 1281px) {
    width: 4%;
    height: 38px;
    margin-right: 2%;
    margin-left: 5%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideoTitle = styled.span`
  font-size: 1.5rem;
  color: var(--main-font-color);
  font-weight: 600;
      align-self: flex-start;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2rem;
    margin-left: 13%;
      }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.9rem;
    margin-left: 13%;
      }
  @media (min-width: 1281px) {
    font-size: 1.9rem;
    margin-left: 7%;  }
`;

export const VideoCard = styled(ReactPlayer)`
  margin: 5% 0% 15%;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 88%;
    height: 334px;
  }
`;
