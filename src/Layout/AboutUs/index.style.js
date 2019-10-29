import styled from 'styled-components';

// the first box (Kim Griffin info)
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`

`;

export const Box = styled.div`
  border: 0.1rem solid #2d2323;
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.25)
`;

export const KimImg = styled.img`
  background-color: white;
  width: 32%;
  margin-top: -15%;
  margin-left: 33%;
`;

export const Name = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 4%;
`;

export const Para = styled.p`
  font-size: 1.1rem;
  line-height: 1.4rem;
  color: #5b5a5a;
  text-align: justify;
  font-weight: bolder;
  margin: 6% 3% 6% 3%;
@media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.4rem;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  font-size: 1.4rem;
}

@media (min-width: 1281px) {
  font-size: 1.4rem;
  }
`;

export const SecBox = styled.div`
  border: 0.1rem solid #2d2323;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
  margin-top: 28%;
  box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.25)
`;

export const LogoImg = styled.img` 
  background-color:white;
  width: 55%;
  margin-top: -15%;
  margin-left: 22%;
`;

export const GriffinPara = styled.p`
  font-size: 1.1rem;
  line-height: 1.4rem;
  color: #5b5a5a;
  text-align: justify;
  font-weight: bolder;
  margin: 6% 3% 6% 3%;
@media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.4rem;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  font-size: 1.4rem;
}

@media (min-width: 1281px) {
  font-size: 1.4rem;
  }
`;
