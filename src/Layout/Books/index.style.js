import styled from 'styled-components';

export const BooksLogoTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 3%;

  @media (min-width: 481px) and (max-width: 767px) {
    margin-left: 6%;
  }
`;

export const PageLogo = styled.img`
  width: 8%;
  @media (min-width: 481px) and (max-width: 767px) {
    width: 8.5%;
  }
`;

export const PageTitle = styled.h1`
  color: #205c8b;
  font-weight: 600;
  margin-left: 4%;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3.3rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
  }
`;

export const BooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7%;
  align-items: center;
`;
