import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 2.5rem;
`;
export const CardItem = styled.a`
  border: 0.2rem solid #a7a7a7;
  border-radius: 1rem;
  display: flex;
  padding: 1rem 1rem 3rem 1rem;
  margin: 3rem 5rem 2rem;
  @media (min-width: 1281px) {
    padding: 1rem 1rem 3rem 1rem;
    margin: 3rem 5rem 2rem;
    width: 50rem;
    justify-content: center;
  }
`;
export const Image = styled.img`
  margin: 2rem 8rem 0 8rem;
  height: 23.5rem;
  border-radius: 0.5rem;
  @media (min-width: 1281px) {
    height: 12.5rem;
    margin: 0.3rem 8rem 0 0.5rem;
  }
`;
export const Title = styled.span`
  padding: 5rem 0 3rem 2rem;
  font-size: 3rem;
  color: #205c88;
  font-weight: 700;
  @media (min-width: 1281px) {
    padding: 1rem 1rem 0 1rem;
    margin: 0 0 0 -6.5rem;
    font-size: 1.5rem;
  }
`;
export const Price = styled.span`
  font-weight: 600;
  font-size: 2.5rem;
  margin: 1.3rem 0 2rem 2rem;
  @media (min-width: 1281px) {
    font-size: 1rem;
    padding: 1rem 1rem 0 1rem;
    margin: 0 0 0 -6.5rem;
  }
`;
export const Description = styled.p`
  font-size: 2.1rem;
  line-height: 5.5rem;
  color: #5b5a5a;
  display: flex;
  padding: 0rem 19rem 0 2rem;
  margin: 8rem -14rem 1rem -25rem;
  @media (min-width: 1281px) {
    font-size: 1rem;
    line-height: 2.3rem;
    padding: 0rem 2.5rem 0 0;
    margin: 1rem 1rem 1rem -5.5rem;
  }
`;
export const TextOne = styled.div`
  display: flex;
  flex-direction: column;
`;
