import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivPrev = styled.div`
  display: flex;
`;

export const PrevBtn = styled(Link)`
  font-size: 1.9rem;
  color: #e8425c;
  outline: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  padding-bottom: 9%;
  margin-left: 7%;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.2rem;
    margin-left: 14%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 14%;
  }
  @media (min-width: 1281px) {
    margin-left: 18%;
  }
`;
