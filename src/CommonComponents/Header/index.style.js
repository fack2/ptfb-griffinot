import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10%;
  justify-content: space-between;
`;

export const Logo = styled.img`
  margin-left: -12%;
  height: 12vh;

  @media (min-width: 481px) and (max-width: 767px) {
    height: 15vh;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    height: 15vh;
  }
`;

export const Menu = styled.img`
  margin-left: 2%;
  height: 5vh;

  @media (min-width: 481px) and (max-width: 767px) {
    height: 7vh;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    height: 7vh;
  }
`;

export const LogoMenuLink = styled(Link)`
  display: flex;
`;
