import styled from 'styled-components';

export const Bodypage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-top: 11%;
  margin-left: 3%;
  font-weight: bold;
  margin-bottom: 7%;
  margin-left: 5%;
  @media (min-width: 768px) and (max-width: 1024px){
    margin-left: 5%;
  }
  @media (min-width: 1025px) and (max-width: 1280px){
    margin-left: 5%;
  }
  @media (min-width: 1281px){
    margin-left: 5%;
    font-size:3rem;
  }
`;

export const Link = styled.a`
  color: #2d2323;
  text-decoration: none;
  outline:none;
`;
