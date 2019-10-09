import styled from 'styled-components';

export const BodyPage = styled.html`
  height: 246rem;
  background: #cfcfcf;
  margin: -1.09rem;
`;
export const PopUPCard = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -21rem;
`;
export const PopUpPox = styled.div`
  place-content: end center;
  margin-top: 73rem;
  width: ${(props) => props.Width || '82rem'};
  height: ${(props) => props.Height || '100rem'};
  text-align: center;
  background: #fffcfc;
  border: 0.1rem solid #c4c4c4;
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
  margin: 0rem 7rem 0 9rem;
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
  box-sizing: border-box;
  border-radius: 4rem;
  font-size: 3.1rem;
  margin-top:4rem;
`;
export const RightButtonPopUp = styled.button`
width: 15rem;
height: 7.2rem;
background: #ffffff;
border: 0.1rem solid #c4c4c4;
box-sizing: border-box;
border-radius: 4rem;
font-size: 3.1rem;
margin-left: 26rem;
margin-top: 1rem;
`;
