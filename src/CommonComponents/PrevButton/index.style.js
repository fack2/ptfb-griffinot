import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivPrev = styled.div`
  display: flex;

`;

export const PrevBtn = styled(Link)`
  margin-top: ${(props) => props.marginTop || '0%'};

  font-size: 1.9rem;
  color: #e8425c;
  outline: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  padding-bottom: 9%;
  margin-left: 7%;
  @media (max-width: 480px){
    margin-left: 7%;
  }
  @media (min-width: 481px) and (max-width: 767px){
    margin-right: 6%;
    font-size: 1.7rem;
    font-weight: 600;
    margin-left: 8%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.8rem;
    margin-left: 14%;
    font-weight: 600;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 20%;
    font-weight: 600;
    font-size: 1.7rem;
    margin-top: ${(props) => props.marginTop1 || '0%'};


  }
  @media (min-width: 1281px) {
    margin-left: 18%;
    font-weight: 600;
    font-size: 1.7rem;
    margin-top: ${(props) => props.marginTop2 || '30%'};
  }
`;
