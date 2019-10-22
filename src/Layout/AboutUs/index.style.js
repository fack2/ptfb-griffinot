import styled from 'styled-components';

// the first box (Kim Griffin info)
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1281px) {
    margin-left: 30rem;
    margin-top: -5.5rem;
    display: flex;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  margin-left: 3.5rem;
  font-size: 4rem;
  @media (min-width: 1281px) {
    font-size: 2.5rem;
    margin-left: 8.5rem;
    margin-top: 13rem;
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
  @media (min-width: 1281px) {
    width: 55rem;
    height: 67rem;
    margin-top: 11rem;
    margin-left: 8rem;
  }
`;

export const KimImg = styled.img`
  background-color:white
  width: 30rem;
  margin-left: 29rem;
  margin-top:-15rem;
   @media (min-width: 1281px) {
    width: 15rem;
    margin-left: 20rem;
    margin-top:-8rem;
  }
`;

export const Name = styled.h3`
  font-size: 3rem;
  text-align: center;
  margin-top: 6rem;
  @media (min-width: 1281px) {
    font-size: 1.5rem;
    margin-top: 2.5rem;
  }
`;

export const Para = styled.p`
  font-size: 3.1rem;
  margin: 3rem 7rem 2rem 5rem;
  line-height: 5.5rem;
  color: #5b5a5a;
  text-align: justify;
  font-weight: bolder;
  @media (min-width: 1281px) {
    font-size: 1.5rem;
    margin: 2.5rem 5.5rem 0 3.5rem;
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
  box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.25);
  @media (min-width: 1281px) {
    width: 55rem;
    height: 67rem;
    margin-top: 18rem;
    margin-left: 8rem;
  }
`;

export const LogoImg = styled.img` 
  background-color:white
  width: 48rem;
  margin-left: 20rem;
  margin-top: -14rem;
  @media (min-width: 1281px) {
    width: 25rem;
    margin-left: 15rem;
    margin-top:-8rem;
  }
`;

export const GriffinPara = styled.p`
  font-size: 3.1rem;
  margin: 14rem 7rem 2rem 5rem;
  line-height: 5.5rem;
  color: #5b5a5a;
  text-align: justify;
  font-weight: bolder;
  @media (min-width: 1281px) {
    font-size: 1.5rem;
    margin: 2.5rem 5.5rem 0 3.5rem;
  }
`;
