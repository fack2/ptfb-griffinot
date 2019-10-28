import styled from 'styled-components';

export const LevelDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7%;
  border: 0.5px solid #a7a7a7;
  border-radius: 6px;
  margin-left: 4%;

  @media (min-width: 768px) and (max-width: 1024px) {
    border: 1.5px solid #a7a7a7;
    margin-left: 4%;
  }
  @media (min-width: 1281px) {
    border: 1.5px solid #a7a7a7;
    margin-left: 4%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    border: 1.5px solid #a7a7a7;
    margin-left: 4%;
  }
`;
export const DivTitle = styled.div`
  display: flex;
  align-content: center;
  margin-top: 7%;
  margin-left:7%;
  @media (min-width: 1281px) {
    margin-left:4%;
  }
  @media (max-width: 480px) {
  margin-left: 3%;
  }
`;

export const CircleLevel = styled.div`
  width: 24%;
  border-radius: 50%;
  height: 79px;
  background: #ffce1c;
  z-index: 1;
  text-align: center;
  margin-top: 1%;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 14%;
    border-radius: 50%;
    height: 94px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 15%;
    border-radius: 50%;
    height: 100px;
  }
  @media (min-width: 1281px) {
    width: 12%;
    border-radius: 50%;
    height: 95px;
    margin-top: 1%;
  }
  @media (max-width: 480px) {
    height: 60px;
    width: 19%;
    margin-top: 2%;
   }
   @media (min-width: 481px) and (max-width: 767px){
    width: 22%;
    height: 79px;

   }
`;

export const ParagraphLevel = styled.p`
  font-size: 1.3rem;
  color: #e8425c;
  margin-top: 35%;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.9rem;
    margin-top: 37%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.9rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.9rem;
  }
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
  @media (min-width: 481px) and (max-width: 767px){
    font-size:1.7rem;
  }
`;

export const TitleLevel = styled.div`
  width: 90%;
  height: 52px;
  background: #175d8c;
  border: 1px solid #a0a0a0;
  box-sizing: border-box;
  border-radius: 50px;
  margin-top: 5%;
  margin-left: -17%;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 75%;
    height: 62px;
    border: 1px solid #a0a0a0;
    margin-left: -13%;
    margin-top: 3.5%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    height: 59px;
    border: 1px solid #a0a0a0;
    width: 63%;
    margin-top: 4%;
    margin-left: -13%;
  }
  @media (min-width: 1281px) {
    height: 63px;
    width: 67%;
    margin-top: 3.5%;
    margin-left: -10%;
    border: 1px solid #a0a0a0;
  }
  @media (max-width: 480px) {
    width: 94%;
    height: 42px;
    margin-top: 5.5%;
  }
  @media (min-width: 481px) and (max-width: 767px){
    width:92%;
  }

`;

export const TitleParagraph = styled.p`
  text-align: center;
  font-size: 1.7rem;
  color: #ffffff;
  margin-left: 16%;
  margin-top: 5%;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.9rem;
    margin-top: 4%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.9rem;
    margin-top: 4%;
  }
  @media (min-width: 1281px) {
    font-size: 1.9rem;
    margin-top: 4%;
  }
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-top: 5%;
  }
  @media (min-width: 481px) and (max-width: 767px){
    margin-top:4%;
  }

`;
export const DescriptionLevel = styled.p`
  font-size: 1.4rem;
  padding: 4%;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.9rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.9rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.9rem;
  }
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
  @media (min-width: 481px) and (max-width: 767px){
    font-size: 1.7rem;

  }
`;
