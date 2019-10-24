import styled from 'styled-components';
import '../../index.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  @media (min-width: 1281px) {
    border-radius: 0.8rem;
    width: 70rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.7rem;
  color: #5c5b5b;
  margin: 8rem 7rem 0rem 7rem;
  @media (min-width: 1024px) and (max-width: 1280px) {
    font-size: 2.5rem;
    margin: 8rem 17rem 0rem 21rem;
  }
  @media (min-width: 1281px) {
    font-size: 2.5rem;
    margin: 8rem 47rem 0rem 47rem;
  }
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
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 45rem;
    height: 9rem;
    font-size: 3.5rem;
  }
  @media (min-width: 1281px) {
    width: 45rem;
    height: 9rem;
    font-size: 3.5rem;
  }
`;

export const ResourceLink = styled.p`
  font-size: 3rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1024px) and (max-width: 1280px) {
    font-size: 2.4rem;
  }
  @media (min-width: 1281px) {
    font-size: 2rem;
  }
`;

export const Link = styled.span`
  color: var(--main-component-color);
`;
