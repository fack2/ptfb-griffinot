import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1281px) {
    margin: 0 0 0 30rem;
  }
`;

export const ImgTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 4rem;
  @media (min-width: 1281px) {
    margin: 0 0 0 20rem;
  }
`;
export const Imglogo = styled.img`
  display: flex;
  height: 10rem;
  @media (min-width: 1281px) {
    height: 4.5rem;
  }
`;
export const TitlePage = styled.span`
  padding: 1rem 0 0 4rem;
  font-size: 5.5rem;
  color: #205c8b;
  font-weight: 600;
  @media (min-width: 1281px) {
    font-size: 3rem;
    padding: 0 0 1.2rem 1rem;
    margin: 0.5rem 0 0 0;
  }
`;
