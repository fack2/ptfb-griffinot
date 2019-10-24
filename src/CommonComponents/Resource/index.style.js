import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  align-self: center;
`;
export const CardItem = styled.a`
  width: 86rem;
  height: 14rem;
  border: 0.2rem solid #a7a7a7;
  border-radius: 1rem;
  margin-top: 19rem;
  display: flex;
  width: 85rem;
  height: 34rem;
  align-items: center;
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    margin: 3rem 7rem 0rem 7rem;
    width: 75rem;
    height: 27rem;
  }

  @media screen and (min-width: 1281px) {
    margin: 3rem 30rem 0rem 30rem;
  }
`;
export const Image = styled.img`
  height: 23.5rem;
  border-radius: 0.5rem;
  margin-left: 7rem;
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    margin: 0 8rem;
    height: 19rem;
  }
`;
export const Title = styled.span`
  font-size: 3.3rem;
  color: #205c88;
  font-weight: 700;
  margin-left: 11rem;
  margin: ${(props) => props.margin || '10rem -7rem 1rem - 7rem'};
  align-self: center;
<<<<<<< HEAD
  @media screen and (min-width: 1024px) and (max-height: 1280px) {
=======
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
>>>>>>> 099ea8311cce28660394333128e443bc023c76ef
    margin: 4rem 0 0 4.5rem;
    font-size: 2.4rem;
  }
`;
