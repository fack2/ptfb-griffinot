import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  @media (min-width: 1281px) {
    margin-left: 15.5rem;
    display: flex;
    justify-content: center;
  }
`;
export const ImgTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3rem 0 0 6rem;
  @media (min-width: 1281px) {
    padding: 3rem 0 0 8rem;
  }
`;
export const Image = styled.img`
  height: 4.5rem;
  margin: 4rem 0 0 1rem;
`;
export const Title = styled.span`
  margin: 3.2rem 0 0 2rem;
  font-size: 4.5rem;
  color: #205c8b;
  font-weight: 600;
  @media (min-width: 1281px) {
    font-size: 3.5rem;
    padding: 1.5rem 0 0 0;
  }
`;
export const VideoCard = styled(ReactPlayer)`
  padding: 5.3rem 0 0 8rem;
`;
export const VideoTitle = styled.span`
  margin: 4.2rem 0 2.8rem 8rem;
  font-size: 3rem;
  color: #205c8b;
  font-weight: 400;
  @media (min-width: 1281px) {
    font-size: 2.5rem;
  }
`;
