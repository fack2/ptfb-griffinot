import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 2.5rem;
  /* padding: 3rem 1rem 3rem 1rem;
  margin: 3rem 3rem 2rem 3rem; */
`;

export const CardItem = styled.a`
  border: 0.2rem solid #a7a7a7;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  display: flex;
  padding: 1rem 1rem 3rem 1rem;
  margin: 3rem 5rem 2rem;
`;

export const Image = styled.img`
  margin: 2rem 8rem 0 8rem;
  height: 23.5rem;
  border-radius: 0.5rem;
`;
export const Title = styled.span`
  padding: 5rem 0 3rem 2rem;
  font-size: 3rem;
  color: #205c88;
  font-weight: 700;
`;

export const Price = styled.span`
  font-weight: 600;
  font-size: 2.5rem;
  margin: 1.3rem 0 2rem 2rem;
`;
export const Description = styled.p`
  font-size: 2.1rem;
  line-height: 5.5rem;
  color: #5b5a5a;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0rem 19rem 0 2rem;
  margin: 8rem -14rem 1rem -25rem;
`;

export const TextOne = styled.div`
  display: flex;
  flex-direction: column;
`;
