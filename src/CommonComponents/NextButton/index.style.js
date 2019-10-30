import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivNext = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: ${(props) => props.marginTop || '2%'}; 

`;

export const NextBtn = styled(Link)`
  font-size: 1.9rem;
  color: #e8425c;
  outline: none;
  text-decoration: none;
   padding-bottom:5%;
  @media (min-width: 481px) and (max-width: 767px){
    margin-right: 6%;
    font-size: 1.7rem;
    font-weight: 600;
  }
  @media (min-width: 768px) and (max-width: 1024px){
    margin-right: 7%;
    font-weight: 600;

  }
  @media (min-width: 1025px) and (max-width: 1280px){
    margin-right: 0%;
    font-weight: 600;
    font-size: 1.7rem;

  }
  @media (min-width: 1281px){
    font-weight: 600;
    font-size: 1.7rem;
    margin-right: 10%;
  }
`;
