import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-left: 3.5rem;
  font-size: 4rem;
  @media (min-width: 1024px) and (max-width: 1280px) {
    margin-left: 7.5rem;
    font-size: 4rem;
  }
  @media (min-width: 1281px) {
    margin-left: 31.5rem;
    font-size: 3.5rem;
  }
`;

export const Box = styled.div`
  border: 0.1rem solid #2d2323;
  display: flex;
  flex-direction: column;
  margin-top: 20rem;
  margin-left: 4rem;
  width: 88rem;
  height: 100rem;
  box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.25);
  @media (min-width: 1024px) and (max-width: 1280px) {
    margin-left: 10rem;
    width: 107rem;
    height: 76rem;
  }
  @media (min-width: 1281px) {
    margin-left: 31rem;
    width: 113rem;
    height: 70rem;
  }
`;

export const KimImg = styled.img`
  background-color:white
  width: 30rem;
  margin-left: 29rem;
  margin-top:-15rem;
  @media (min-width: 1024px) and (max-width: 1280px) {
    margin-left: 40rem;  
  }
   @media (min-width: 1281px) {
    width: 25rem;
    margin-left: 44rem;
  }
`;

export const Name = styled.h3`
  font-size: 3rem;
  text-align: center;
  margin-top: 6rem;
  @media (min-width: 1281px) {

  }
`;

export const Para = styled.p`
  font-size: 3.1rem;
  margin: 3rem 7rem 2rem 5rem;
  line-height: 5.5rem;
  color: #5b5a5a;
  text-align: justify;
  font-weight: bolder;
  @media (min-width: 1024px) and (max-width: 1280px) {
    font-size: 2.5rem;
    margin-top: 1rem;   
  }
  @media (min-width: 1281px) {
    font-size: 2.1rem;
    margin-top: -2rem;
  }
`;

export const SecBox = styled.div`
  border: 0.1rem solid #2d2323;
  display: flex;
  flex-direction: column;
  margin-top: 20rem;
  margin-left: 4rem;
  margin-bottom: 5rem;
  width: 88rem;
  height: 100rem;
  @media (min-width: 1024px) and (max-width: 1280px) {
    margin-left: 10rem;
    width: 107rem;
    height: 60rem;
  }
  box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.25);
  @media (min-width: 1281px) {
    margin-left: 31rem;
    width: 113rem;
    height: 50rem;
  }
`;

export const LogoImg = styled.img` 
  background-color:white
  width: 48rem;
  margin-left: 20rem;
  margin-top: -14rem;
  @media (min-width: 1024px) and (max-width: 1280px) {
    margin-left: 30rem;  
  }
  @media (min-width: 1281px) {
    width: 43rem;
    margin-left: 35rem;
  }
`;

export const GriffinPara = styled.p`
  font-size: 3.1rem;
  margin: 14rem 7rem 2rem 5rem;
  line-height: 5.5rem;
  color: #5b5a5a;
  text-align: justify;
  font-weight: bolder;
  @media (min-width: 1024px) and (max-width: 1280px) {
    font-size: 2.5rem;
    margin-top: 1rem;   
  }
  @media (min-width: 1281px) {
    font-size: 2.1rem;
    margin-top: 2rem;
  }
`;
