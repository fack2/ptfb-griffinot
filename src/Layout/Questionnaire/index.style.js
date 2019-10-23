import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.h1`
  text-align: center;
  margin: 8rem 4rem 4rem 4rem;
`;

export const Line = styled.hr`
  border-top: 1px solid var(--main-font-color);
  margin: 0rem 12rem;
`;

export const Paragraph = styled.p`
  font-size: 3.5rem;
  margin: 8rem 2rem 2rem 3rem;
  font-weight: bold;
`;

export const DivData = styled.div`
  display: flex;
  margin-left: 6rem;
  margin-top: 11rem;
  flex-direction: column;

  @media (min-width: 1000px) {
    display: -webkit-flex;
    text-align: -webkit-center;
  }
`;

export const TitleOption = styled.h1`
  @media (min-width: 1000px) {
    font-size: 2.4rem;
    text-align: center;
  }
  font-size: 3.8rem;
  text-align: center;
`;

export const Option = styled.button`
  @media (min-width: 1000px) {
    width: 50rem;
    height: 15rem;
    background: #d6ebf7;
    border-radius: 2.5rem;

    font-size: 2.4rem;
    color: #000000;
    text-align: center;
  }

  display: flex;
  justify-content: center;
  width: 85rem;
  height: 18.5rem;
  background: #d6ebf7;
  border-radius: 2.5rem;
  margin-top: 8rem;
  font-size: 3.7rem;
  color: #000000;
  text-align: center;
  outline: none;
`;

export const LinkOption = styled(Link)`
  text-decoration: none;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const QuestionCard = styled.div`
  border-radius: 2rem;
  border: 0.5px solid #928e8e;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: ${props => props.height || '18rem'};
  padding: 4rem 3rem;
  margin: 4rem 2rem 0;
  display: flex;
  flex-wrap: wrap;
`;

export const QuestionNumber = styled.span`
  font-weight: bold;
  width: 4.3rem;
  height: 3.9rem;
  padding-top: 0.5rem;
  font-size: 2.5rem;
  color: #ffffff;
  background: var(--next-prev-button-color);
  border-radius: 50%;
  text-align: center;
`;

export const QuestionText = styled.p`
  margin: -0.4rem 0 0 2rem;
  font-weight: 600;
  font-size: 3.8rem;
  color: var(--main-font-color);
  flex-basis: 85%;
`;

export const Checkbox = styled.input`
  width: 3.8rem;
  height: 3.8rem;
  background: #ffffff;
  border: 1px solid #787878;
  box-sizing: border-box;
  margin-left: 1.5rem;
`;

export const QuestionDescription = styled.p`
  margin: 0.8rem 4rem 0.8rem 6rem;
  font-weight: 600;
  font-size: 3rem;
  color: #2d2323;
`;
export const DivNextPrev = styled.div`
display:flex;
font-size:3.2rem;
`;


// levle pop up
export const LevelDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 4.9rem;
`;

export const CircleLevel = styled.div`
    width: 30rem;
    height: 30rem;
    border: 0.8rem #8AC456 solid;
    border-radius: 54rem;
    z-index: 1;
    margin-top: -4rem;
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

export const LevelIntro = styled.p`
  font-size: 3rem;
  font-weight: bold;
  margin-left: -9rem;
  margin-top: 6rem;
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
    width: 82rem;
    height: 129rem;
    background: #fffcfc;
    border: 0.1rem solid #c4c4c4;
    margin-left: -17.4rem;
    margin-top: -58rem;

  `;

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
  margin-top: -2rem;
  margin-right: 2rem;
  letter-spacing: 0.1rem;
`;

export const ToLink = styled.a`
  color: var(--main-title-color);
  text-decoration: none;
  font-size: 3.9rem;
  font-weight: bold;
  margin: 5rem 0rem 0rem 37rem;
`;

export const Para = styled.p`
  font-size: 2.5rem;
  margin-top: 12rem;
`;
