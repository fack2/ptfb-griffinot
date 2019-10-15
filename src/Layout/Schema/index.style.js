import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  overflow: scroll;
`;

export const Title = styled.h1`
  text-align:center;
  font-size: 3.5rem;
`;

export const HorizontalLine = styled.hr`
  width: 50rem;
  border: 0.1rem solid #2D2323;
  transform: rotate(180deg);
`;

export const Para1 = styled.p`
  font-size: 1.4rem;
  color: #5C5B5B;
  margin: 5rem 1rem 4rem 2rem;
`;

export const FineMotorImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 88rem;
  border: 0.1rem solid #2D2323;
`;

export const Para2 = styled.p`
  font-size: 1.4rem;
  color: #5C5B5B;
  margin: 5rem 1rem 4rem 2rem;
`;

export const NextText = styled.button`
  font-size: 4rem;
  margin-top: 2rem;
  margin-left: 77rem;
  color: #0F3654;
  font-weight: 900;
`;

export const NextArrow = styled.img`
  width: 3rem;
  margin-left: 1.3rem;
`;


export const BodyPage = styled.div`
  background: #cfcfcf;
  justify-content: center;
`;

export const PopUPCard = styled.div`
  text-align: center;
  display: flex;
  height: 0.6rem;
`;

export const PopUpBox = styled.div`
  width: ${(props) => props.Width || '82rem'};
  height: ${(props) => props.Height || '100rem'};
  background: #fffcfc;
  border: 0.1rem solid #c4c4c4;
  margin-left: -17.4rem;
  margin-top: -38rem;`;

export const Logo = styled.div`
  width: 82.5rem;
  height: 34rem;
  background: ${(props) => props.Background || '#205c8b'};
  margin-top: -1rem;
  margin-left: -0.4rem;
`;

export const LogoImage = styled.img`
  width: 45rem;
  height: 41rem;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopUpDiv = styled.span`
  padding: 4.4rem;
  font-size: 3.5rem;
  text-align: left;
  letter-spacing: 0.1rem;
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15rem;
`;


export const OptionBtn = styled.button`
  border: 0.3rem #cecece solid;
  background-color: white;
  border-radius: 4rem;
  width: 16rem;
  height: 7rem;
  font-size: 3.5rem;
  outline: none;

`;
