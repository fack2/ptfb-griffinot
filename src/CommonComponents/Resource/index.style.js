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
    padding: 1rem 1rem 2rem 1rem;
    margin: 5rem 5rem 2rem 5rem;
  @media (min-width: 1281px) {
    padding: 1rem 1rem 3rem 1rem;
    margin: 3rem 5rem 2rem;
    width: 50rem;
    justify-content: center;
  }
`;
export const Image = styled.img`
  margin:5rem 8rem 0 5rem;
  height: 23.5rem;
  border-radius: 0.5rem;
  @media (min-width: 1281px) {
    height: 12.5rem;
    margin: 0.3rem 8rem 0 0.5rem;
  }
`;
export const Title = styled.span`
  font-size: 3.3rem;
  color: #205c88;
  font-weight: 700;
  margin: 10rem -4rem 2rem -11rem;
  text-align:center;
  @media (min-width: 1281px) {
    padding: 1rem 1rem 0 1rem;
    margin: 0 0 0 -6.5rem;
    font-size: 1.5rem;
  }
`;
export const Price = styled.span`
  font-weight: 600;
  font-size: 2.8rem;
  margin: 0.2rem 5rem 2rem -2rem;
  text-align: center;
  @media (min-width: 1281px) {
    font-size: 1rem;
    padding: 1rem 1rem 0 1rem;
    margin: 0 0 0 -6.5rem;
  }
`;
export const Description = styled.p`
  font-size: 2rem;
    line-height: 3rem;
    color: var(--main-font-color:);
    display: flex;
    text-align: justify;
    margin:12rem 6rem 2rem -23rem;
  @media (min-width: 1281px) {
    font-size: 1rem;
    line-height: 2.3rem;
    padding: 0rem 2.5rem 0 0;
    margin: 11rem 6rem 3rem -2.3rem;
  }
`;
export const TextOne = styled.div`
  display: flex;
  flex-direction: column;
`;
