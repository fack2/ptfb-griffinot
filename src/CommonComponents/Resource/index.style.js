import styled from 'styled-components';

export const ResourseCard = styled.a`
  border: 0.1rem solid #a7a7a7;
  border-radius: 1rem;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  margin-top: 7%;
  @media (min-width: 1281px) {
    width: 30%;
    height: 45vh;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
export const Image = styled.img`
  width: 30%;
  margin: 3% 10% 3% 4%;
  border-radius: 0.5rem;
  @media (min-width: 1281px) {
    width: 60%;
    height: 22vh;
  }
`;
export const Title = styled.span`
  color: #205c88;
  font-size: 1.7rem;
  font-weight: 700;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 3rem;
  }

  @media (min-width: 1281px) {
    font-size: 1.7rem;
  }
`;
