import styled from 'styled-components';

export const PageTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
  color: #205c88;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3.4rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 3.4rem;
  }
  @media (min-width: 1281px) {
    font-size: 2.3rem;
  }
`;

export const ResoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1281px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
