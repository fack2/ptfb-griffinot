import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5rem 0rem 0rem 5rem;

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    margin: 7rem 0rem 2rem 7rem;
  }

  @media screen and (min-width: 1281px) {
    margin: 7rem 0rem 2rem 30rem;
  }
`;
export const Imglogo = styled.img`
  display: flex;
  height: 8rem;
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    height: 7rem;
  }
`;
export const TitlePage = styled.span`
  padding: 1rem 0 0 4rem;
  font-size: 5rem;
  color: #205c8b;
  font-weight: 600;
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    font-size: 4rem;
  }
`;
