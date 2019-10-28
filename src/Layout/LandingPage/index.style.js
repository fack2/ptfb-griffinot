
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
   margin-top: 5%;
`;

export const LandingImg = styled.img`
  width:100% ;
  border-radius: 2%;
  margin-top: 5%; 
`;

export const Paragraph = styled.p`
  width: 100%; 
  color: black;
  margin-top: 5%;
  margin-top: 7%;
  text-align: justify;
  font-size: 1.3rem;
@media (min-width: 1281px){
  font-size: 1.5rem;
}
`;

export const Button = styled.button`
  background-color: var(--main-title-color);
  border: 1px solid #205c8b;
  color: white;
  border-radius: 10rem;
  font-weight: bolder;
  width: 63%;
  height: 45px;
  margin-left: 18%;
  margin-top: 8%;
  font-size: 2rem;
`;

export const ResourceLink = styled.p`
  font-size: 1.1rem;
  margin-left: 24%;
  margin-top: 3%;
  @media (min-width: 1025px) and (max-width: 1280px){
    font-size: 1.5rem;
    margin-left: 31%;
  }
@media (min-width: 1281px){
     font-size: 1.5rem;
    margin-left: 36%;
}
`;

export const Link = styled.span`
  color: var(--main-component-color);
`;
