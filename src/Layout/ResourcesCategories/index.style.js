import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const BodyCategory = styled.div`
  margin-top: 8%;
`;

export const TitleCategory = styled.h1`
  margin-left: 5%;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 13%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 13%;
  }
  @media (min-width: 1281px) {
    margin-left: 18%;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000000;
`;
