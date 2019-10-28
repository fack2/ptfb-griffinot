import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 27%;
`;

export const NotFoundImg = styled.img`
  width: 85%;
  margin: 4% 12% 1% 4%;
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 42%;
    margin: 4% 31.5% 4% 29%;
  }
  @media screen and (min-width: 1281px) {
    width: 36%;
    margin: 4% 30% 4% 30.2%;
  }
`;

export const Description = styled.p`
  justify-content: center;
  text-align: center;
  font-size: 0.8rem;
  margin: -2% 5% 0 5;
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    justify-content: center;
    margin: -2% 4% 6% 5%;
    font-size: 1.6rem;
  }
  @media screen and (min-width: 1281px) {
    justify-content: center;
    margin: -6% 5% 6% 5%;
    font-size: 2.5rem;
  }
`;
