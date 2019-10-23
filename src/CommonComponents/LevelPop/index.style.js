import styled from 'styled-components';

export const LevelDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 4.9rem;
`;

export const CircleLevel = styled.div`
  @media (min-width: 1281px) {
    width: 12rem;
    height: 12rem;
    background: #ffce1c;
    border-radius: 11rem;
    z-index: 1;
  }
    width: 15rem;
    height: 15rem;
  background: #ffce1c;
  border-radius: 11rem;
  z-index: 1;
`;

export const ParagraphLevel = styled.p`
  @media (min-width: 1281px) {
    font-size: 2.5rem;
    margin-top: 4rem;
    font-weight: bolder;
    color: #e8425c;
  }
  font-size: 3.3rem;
  margin-top: 5.6rem;   
  font-weight: bolder;
  color: #e8425c;
`;

export const TitleLevel = styled.div`
  @media (min-width: 1281px) {
    width: 45rem;
    height: 8rem;
    background: #205c8b;
    border: 1px solid #a0a0a0;
    box-sizing: border-box;
    border-radius: 82px;
    margin-top: 2rem;
    margin-left: -11rem;
  }
  width: 68rem;
  height: 10.9rem;
  background: #205c8b;
  border: 1px solid #a0a0a0;
  box-sizing: border-box;
  border-radius: 82px;
  margin-top: 2.5rem;
  margin-left: -9rem;
`;

export const LevelIntro = styled.p`
  font-size: 3.4rem;
  font-weight: bold;
  margin-left: -43rem;
`;

export const TitleParagraph = styled.p`
  @media (min-width: 1281px) {
    font-size: 2rem;
    margin-left:7.9rem;
    color: #ffffff;
  }
  font-size: 3.5rem;
  margin-left: 0.9rem;
  color: #ffffff;
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
  height:115rem;
  background: #fffcfc;
  border: 0.1rem solid #c4c4c4;
  margin-left: -17.4rem;
  margin-top: -45rem;`;

export const Logo = styled.div`
  width: 82.5rem;
  height: 34rem;
  background: #205c8b;
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
  font-size: 2.7rem;
  text-align: left;
  margin-left: 5rem;
  margin-top: 3rem;
  margin-right: 2rem;
  letter-spacing: 0.1rem;
`;

export const ToLink = styled.a`
  color: var(--main-title-color);
  text-decoration: none;
  font-size: 3.9rem;
  font-weight: bold;
  position: fixed;
  top: 147rem;
  left: 57rem;

`;
