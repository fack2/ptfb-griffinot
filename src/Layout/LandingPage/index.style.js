import styled from 'styled-components';
import '../../index.css';

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin-top: 15%;
  margin-bottom: 3%;
`;

export const LandingImg = styled.img`
  width: 85%;
  border-radius: 2%;
  margin-left: 7%;
  margin-right: 7%;
  margin-top: 3%;

`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: #3a3a3a;
  margin-left: 8%;
  margin-right: 8%;
  text-align: justify;
`;

export const Button = styled.button`
  background-color: var(--main-title-color);
  border: 1px solid #205c8b;
  color: white;
  border-radius: 20rem;
  font-size: 1.9rem;
  font-weight: bolder;
  width: 55%;
  height: 45px;
  margin-left: 22%;
  margin-top: 5%;
`;

export const ResourceLink = styled.p`
  font-size: 1.5rem;
  margin-left: 24%;
`;

export const Link = styled.span`
  color: var(--main-component-color);
`;
