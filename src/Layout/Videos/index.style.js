import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const IconTitleContainer = styled.div`
  margin-left: 4%;
`;

export const VideoIcon = styled.img`
  width: 7%;
  margin-right: 4%;
`;

export const PageTitle = styled.span`
  font-size: 2rem;
  color: #205c8b;
  font-weight: 600;
`;

export const VideosContainer = styled.div`
  margin-top: 10%;
  margin-left: 3%;
`;

export const VideoTitle = styled.span`
  font-size: 2rem;
  color: var(--main-font-color);
  font-weight: 400;
`;

export const VideoCard = styled(ReactPlayer)`
  margin: 5% 0% 15%;
`;
