import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 2.5rem;
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
  border-radius: 2.5rem;
`;
export const Title = styled.span`
  padding: 13rem 6rem 0 2rem;
  font-size: 3.5rem;
`;
