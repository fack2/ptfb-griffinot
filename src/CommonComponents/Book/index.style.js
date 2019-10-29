import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
`;

export const BookCard = styled.a`
  border: 0.2rem solid #a7a7a7;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--main-font-color);
  margin-bottom: 10%;
  @media (min-width: 481px) and (max-width: 767px) {
    width: 93%;
  }
`;

export const BookTitle = styled.span`
  color: #205c88;
  font-weight: 700;
  text-align: center;
  margin-top: 6%;
  font-size: 1.5rem;

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1281px) {
    font-size: 2rem;
  }
`;

export const BookPrice = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;
  margin: 1% 0% 5%;
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.2rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.9rem;
  }
`;

export const BookImageContainer = styled.div`
  margin: 3% 5%;
`;

export const BookImage = styled.img`
  width: 25%;
  float: left;
  margin-right: 2%;

  @media (min-width: 481px) and (max-width: 767px) {
    width: 16%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 18%;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 18%;
  }

  @media (min-width: 1281px) {
    width: 18%;
  }
`;

export const BookDescription = styled.p`
  font-size: 1.3rem;
  text-align: justify;
  margin-bottom: 3%;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.7rem;
    text-align: justify;
    margin-top: 1%;
  }

  @media (min-width: 1281px) {
    font-size: 1.8rem;
    margin-top: 2%;
  }
`;
