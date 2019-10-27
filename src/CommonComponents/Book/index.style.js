import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 3%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const BookCard = styled.a`
  border: 0.2rem solid #a7a7a7;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--main-font-color);
  width: 97%;
  margin-bottom: 10%;
  /*
  @media screen and (min-width: 1024px) and (max-height: 1280px) {
    margin: 3rem 7rem 0rem 7rem;
  }
  @media screen and (min-width: 1281px) {
    margin: 3rem 30rem 0rem 30rem;
  } */
`;

export const BookTitle = styled.span`
  font-size: 1.6rem;
  color: #205c88;
  font-weight: 700;
  text-align: center;
  margin-top: 6%;

  /*
  @media screen and (min-width: 1024px) and (max-height: 1280px) {
    padding: 1rem 1rem 0 1rem;
    margin: 4rem 0 0 -6.5rem;
    font-size: 2.4rem;
  }
  @media screen and (min-width: 1280px) {
    margin: 4rem 0 0 15rem;
    font-size: 2.4rem;
  }*/
`;
export const BookPrice = styled.span`
  font-weight: 600;
  font-size: 1.3rem;
  text-align: center;
  margin: 1% 0% 5%;

  /*
  @media screen and (min-width: 1024px) and (max-height: 1280px) {
    font-size: 1.5rem;
    padding: 1rem 1rem 0 1rem;
    margin: 0 0 0 -6.5rem;
  } */
`;
export const BookImageContainer = styled.div`
  width: 90%;
  margin: 3% 5%;
`;

export const BookImage = styled.img`
  width: 25%;
  float: left;
  margin-right: 2%;
  /*
    @media screen and (min-width: 1024px) and (max-height: 1280px) {
      margin: 5rem 8rem 5rem 5rem;
    } */
`;

export const BookDescription = styled.p`
  font-size: 1.3rem;
  margin-right: 2%;
  margin-top: -1%;
  text-align: justify;
  /*
  @media screen and (min-width: 1024px) and (max-height: 1280px) {
    font-size: 1.5rem;
    line-height: 2.3rem;
    padding: 0rem 2.5rem 0 0;
    margin: 5rem 3rem 5rem -0.3rem;
  } */
`;
