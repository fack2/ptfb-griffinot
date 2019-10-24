import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  @media screen and (min-width: 1281px) {
    justify-content: space-around;
  }
`;

export const Logo = styled.img`
  width: 35rem;
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    align-self: flex-start;
    margin-left: 3rem;
  }
`;

export const Menu = styled.img`
  width: 6rem;
  margin: 7rem 4rem 0rem 46rem;
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    align-self: flex-end;
    margin: 7rem 7rem 0rem 0rem;
  }
  @media screen and (min-width: 1281px) {
    margin: 7rem 10rem 0rem 26rem;
  }
`;
