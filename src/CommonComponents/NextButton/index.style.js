import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivNext = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: ${(props) => props.marginTop || '2%'};
  padding-bottom: 2%;
  @media (min-width: 481px) and (max-width: 767px) {
    padding-right: 7%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-right: 7%;
  }
  @media (min-width: 1281px) {
    padding-right: 10%;
  }
`;

export const NextBtn = styled(Link)`
  font-size: 1.9rem;
  color: #e8425c;
  outline: none;
  text-decoration: none;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.7rem;
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
