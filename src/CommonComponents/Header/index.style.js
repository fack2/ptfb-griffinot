import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10%;
`;

export const Logo = styled.img`
  margin-left: -6%;
  width: 65%;
  @media (min-width: 481px) and (max-width: 767px) {
    width: 55%;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    width: 50%;
  }
`;

export const Menu = styled.img`
  width: 40%;
  margin-left: 50%;

  @media (min-width: 481px) and (max-width: 767px) {
    width: 28%;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    width: 30%;
    margin-left: 60%;
  }
`;

export const LogoMenuLink = styled(Link)`
  display: flex;
`;
