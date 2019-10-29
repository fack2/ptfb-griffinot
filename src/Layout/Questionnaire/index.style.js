import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.h1`
  text-align: center;
  margin: 0% 0% 3.5% 0;
  font-size: 1.5rem;

  /* Media Query for Mobile Devices */
  /* @media (max-width: 480px) {
    
  } */
  /* @media screen and (min-width: 1024px) and (max-width: 1280px) {
    font-size: 2.5rem;
    margin: 7rem 4rem 4rem 4rem;
  }
  @media screen and (min-width: 1281px) {
    font-size: 2.7rem;
    margin: 5rem 8rem 5rem 3rem;
  } */
`;

export const Line = styled.hr`
  border-top: 1px solid var(--main-font-color);
  margin: 0% 0%;
  /* Media Query for Mobile Devices */
  /* @media (max-width: 480px) {
    
  } */

  /* @media screen and (min-width: 1281px) {
    margin: 1rem 24rem 1rem 19rem;
  } */
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 4% 0 3% 0%;
  font-weight: bold;
  /* Media Query for Mobile Devices */
  /* @media (max-width: 480px) {

  } */
  /* font-size: 3.5rem;
  margin: 8rem 2rem 2rem 3rem;
  font-weight: bold;
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    font-size: 2.5rem;
    margin: 6rem 0 4rem 13.2rem;
  }
  @media screen and (min-width: 1281px) {
    font-size: 2.3rem;
    margin: 4rem 0 3rem 20rem;
  } */
`;

export const DivData = styled.div`
  /* display: flex;
  margin-left: 6rem;
  margin-top: 11rem;
  flex-direction: column;

  @media (min-width: 1000px) {
    display: -webkit-flex;
    text-align: -webkit-center;
  } */
`;

export const TitleOption = styled.h1`
  /* @media (min-width: 1000px) {
    font-size: 2.4rem;
    text-align: center;
  }
  font-size: 3.8rem;
  text-align: center; */
`;

export const Option = styled.button`
  /* @media (min-width: 1000px) {
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
  outline: none; */
`;

export const LinkOption = styled(Link)`
  /* text-decoration: none; */
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3% -3% 0 4%;
  justify-content: center;
`;

export const QuestionCard = styled.div`
  border-radius: 0.8rem;
  border: 0.5px solid #928e8e;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: ${(props) => props.height || '78px'};
  padding: 5% 2% 0 2%;
  margin: 2.5% 2% 3.5% -5%;
  display: flex;
  flex-wrap: wrap;

  /* border-radius: 2rem;
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 75rem;
    margin: 3rem 0rem 1rem 13rem;
  }
  @media screen and (min-width: 1281px) {
    width: 83rem;
    height: 18rem;
    margin: 3rem 0rem 1rem 20rem;
  } */
`;

export const QuestionNumber = styled.span`
  font-weight: bold;
  width: 18px;
  height: 18px;
  padding-top: 0.5%;
  line-height: 150%;
  font-size: 1rem;
  color: #ffffff;
  background: var(--next-prev-button-color);
  border-radius: 50%;
  text-align: center;
  padding: 0.5% 0.5% 0 0;
  /*  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    height: 3rem;
    width: 3rem;
    line-height: 91%;
    font-size: 2.1rem;
  }
  @media screen and (min-width: 1281px) {
    height: 2rem;
    width: 2.2rem;
    line-height: 68%;
    font-size: 1.9rem;
    margin-top: 1rem;
  } */
`;

export const QuestionText = styled.p`
  margin: -0.5% 0 0 3%;
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--main-font-color);
  flex-basis: 85%;
  /* @media screen and (min-width: 1024px) and (max-width: 1280px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 1281px) {
    font-size: 2.5rem;
    font-weight: 400;
    margin: -0.4rem 0 0 2rem;
    padding: 0.9rem 0 0 0;
  } */
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: 1px solid #787878;
  box-sizing: border-box;
  margin: 0 -5% 0 1.5%;
  /*@media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 2.5rem;
  }
  @media screen and (min-width: 1281px) {
    width: 2.5rem;
  } */
`;

export const QuestionDescription = styled.p`
  margin: ${(props) => props.margin || '0%'};
  font-weight: 600;
  font-size: 1.3rem;
  color: #2d2323;
  /*@media screen and (min-width: 1024px) and (max-width: 1280px) {
    font-size: 1.8rem;
    margin: 0 0 2rem 2rem;
    padding: 0 2rem 0 0;
  }
  @media screen and (min-width: 1281px) {
    font-size: 1.9rem;
    font-weight: 400;
    margin: 0 8rem 3rem 2rem;
  } */
`;

export const DivNextPrev = styled.div`
  /* display: flex;
  justify-content: space-around; */
`;

export const LevelDiv = styled.div`
  /* display: flex;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 4.9rem; */
`;

export const CircleLevel = styled.div`
  /* width: 30rem;
  height: 30rem;
  border: 0.8rem #8ac456 solid;
  border-radius: 54rem;
  z-index: 1;
  margin-top: -4rem; */
`;

export const ParagraphLevel = styled.p`
  /* @media (min-width: 1281px) {
    font-size: 2.5rem;
    margin-top: 4rem;
    font-weight: bolder;
    color: #e8425c;
  }
  font-size: 3.3rem;
  margin-top: 5.6rem;
  font-weight: bolder;
  color: #e8425c; */
`;

export const LevelIntro = styled.p`
  /* font-size: 3rem;
  font-weight: bold;
  margin-left: -9rem;
  margin-top: 6rem; */
`;

export const TitleParagraph = styled.p`
  /* @media (min-width: 1281px) {
    font-size: 2rem;
    margin-left: 7.9rem;
    color: #ffffff;
  }
  font-size: 3.5rem;
  margin-left: 0.9rem;
  color: #ffffff; */
`;

export const BodyPage = styled.div`
  /* background: #cfcfcf;
  justify-content: center; */
`;

export const PopUPCard = styled.div`
  /* text-align: center;
  display: flex;
  height: 0.6rem; */
`;

export const PopUpBox = styled.div`
  /* width: 82rem;
  height: 129rem;
  background: #fffcfc;
  border: 0.1rem solid #c4c4c4;
  margin-left: -17.4rem;
  margin-top: -58rem; */
`;

export const Logo = styled.div`
  /* width: 82.5rem;
  height: 34rem;
  background: #205c8b;
  margin-top: -1rem;
  margin-left: -0.4rem; */
`;

export const LogoImage = styled.img`
  /* width: 45rem;
  height: 41rem; */
`;

export const Container2 = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

export const PopUpDiv = styled.span`
  /* font-size: 2.7rem;
  text-align: left;
  margin-left: 5rem;
  margin-top: -2rem;
  margin-right: 2rem;
  letter-spacing: 0.1rem; */
`;

export const ToLink = styled.a`
  /* color: var(--main-title-color);
  text-decoration: none;
  font-size: 3.9rem;
  font-weight: bold;
  margin: 5rem 0rem 0rem 37rem; */
`;

export const Para = styled.p`
  /* font-size: 2.5rem;
  margin-top: 12rem; */
`;
