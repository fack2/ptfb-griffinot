import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleH = styled.span`
  padding: 0 0 0 5rem;
  font-size: 4.5rem;
  font-weight: 600;
  color: #205c88;
  display: block;
  margin: 8rem 0rem 8rem 1rem;
  @media screen and (min-width: 1024px) and (max-height: 1280px) {
    margin: 10rem 0 2rem 8rem;
    font-size: 3rem;
  }
`;
