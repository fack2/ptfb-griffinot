import styled from 'styled-components';

export const BodyPage = styled.html`
  background: #cfcfcf;
  justify-content: center;
`;

export const PopUPCard = styled.body`
  text-align: center;
  display: flex;
  height: 154.6rem;
`;

export const PopUpBox = styled.div`
  width: ${(props) => props.Width || '82rem'};
  height: ${(props) => props.Height || '100rem'};
  background: #fffcfc;
  border: 0.1rem solid #c4c4c4;
  margin-left: 8rem;
  margin-top: 32.7rem;
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

export const TitleP = styled.p`
  margin-top: 4rem;
  font-size: 4.8rem;
  margin-left: -10rem;
  color: #e8425c;
`;

export const UndersandWord = styled.p`
  font-size: 4.2rem;
  margin-left: 43.9rem;
  margin-top: 5.5rem;
  color: #205c88;
`;
