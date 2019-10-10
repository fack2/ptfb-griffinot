import styled from 'styled-components';

export const BodyPage = styled.body`
  display: flex;
  background: #cfcfcf;
  margin:auto; 
  height: -webkit-fill-available;
text-align:center`;

export const PopUPCard = styled.div`
  width: 100rem;
 
`;

export const PopUpBox = styled.div`
  width: ${(props) => props.Width || '82rem'};
  height: ${(props) => props.Height || '100rem'};
  background: #fffcfc;
  border: 0.1rem solid #c4c4c4;
  margin-left: 6rem;
  margin-top: 62rem;
  margin-left: 8rem;

`;

export const Logo = styled.div`
  width: 81.9rem;
  height: 28rem;
  border: 0.1rem solid #c4c4c4;
  background: #205c8b;
  
`;

export const LogoImage = styled.img`
  width: 30.1rem;
  height: 30rem;
`;

export const PopUpDiv = styled.p`
  padding: 4.4rem;
  font-size: 3.9rem;
  text-align: left;
`;

export const TitleP = styled.p``;

export const LeftButtonPopUp = styled.button`
  width: 15rem;
  height: 7.2rem;
  background: #ffffff;
  border: 0.1rem solid #c4c4c4;
  border-radius: 4rem;
  font-size: 3.1rem;
  margin-left: 8rem;
`;

export const RightButtonPopUp = styled.button`
width: 15rem;
height: 7.2rem;
background: #ffffff;
border: 0.1rem solid #c4c4c4;
border-radius: 4rem;
font-size: 3.1rem;
margin-left: 26rem;
`;
