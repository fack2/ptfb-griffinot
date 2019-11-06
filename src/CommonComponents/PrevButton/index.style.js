import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivPrev = styled.div`
  display: flex;
  margin-top: ${props => props.marginTop || '2%'};
  padding-bottom: 2%;
  margin-left: ${props => props.marginLeft || '0%'};

  @media (min-width: 481px) and (max-width: 767px) {
    margin-left: ${props => props.marginLeft1 || '0%'};
    padding-right: 7%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: ${props => props.marginLeft2 || '0%'};
    margin-top: ${props => props.marginTop1 || '2%'};
    padding-right: 7%;
  }

  @media (min-width: 1281px) {
    margin-left: ${props => props.marginLeft3 || '0%'};
    margin-top: ${props => props.marginTop3 || '2%'};
    padding-right: 10%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: ${props => props.marginLeft4 || '0%'};
    margin-top: ${props => props.marginTop4 || '2%'};
    padding-right: 10%;
  }
`;

export const PrevBtn = styled(Link)`
  font-size: 1.9rem;
  color: #e8425c;
  outline: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2rem;
    font-weight: 600;
  }
  @media (min-width: 1281px) {
    font-weight: 600;
    font-size: 1.7rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-weight: 600;
    font-size: 1.7rem;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.7rem;
    font-weight: 600;
  }
`;
