import styled from 'styled-components';
import '../../index.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  text-align: center;
  margin-bottom: 5rem;
`;

export const LandingImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  width: 84rem;
  border-radius: 1.5rem;
`;

export const Paragraph = styled.p`
  font-size: 1.7rem;
  color: #5c5b5b;
  margin: 8rem 7rem 0rem 7rem;
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  background-color: var(--main-title-color);
  border: 1px solid #205c8b;
  color: white;
  border-radius: 20rem;
  width: 61rem;
  height: 11rem;
  margin-top: 10rem;
  font-size: 4.8rem;
  font-weight: bolder;
`;

export const ResourceLink = styled.p`
  font-size: 3rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Link = styled.span`
  color: var(--main-component-color);
`;
