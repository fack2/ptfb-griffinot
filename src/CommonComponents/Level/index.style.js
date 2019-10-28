import styled from 'styled-components';

export const LevelDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7%;
  border: 0.5px solid #a7a7a7;
  border-radius: 6px;
  @media (min-width: 768px) and (max-width: 1024px) {
    border: 1.5px solid #a7a7a7;
  }
  @media (min-width: 1281px) {
    border: 1.5px solid #a7a7a7;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    border: 1.5px solid #a7a7a7;
  }
`;
export const DivTitle = styled.div`
  display: flex;
  align-content: center;
  margin-top: 7%;
  margin-left: 4%;
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
    width: 20%;
    border-radius: 50%;
    height: 117px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 19%;
    border-radius: 50%;
    height: 100px;
  }
  @media (min-width: 1281px) {
    width: 15%;
    border-radius: 50%;
    height: 100px;
  }
  @media (max-width: 480px) {
    width: 20%;
    height: 75px;
  }
`;

export const ParagraphLevel = styled.p`
  font-size: 1.3rem;
  font-weight: 800;
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
    font-size: 1.4rem;
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
    width: 84%;
    height: 74px;
    border: 1px solid #a0a0a0;
    margin-left: -15%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    height: 63px;
    border: 1px solid #a0a0a0;
  }
  @media (min-width: 1281px) {
    height: 63px;
    width: 74%;
    margin-top: 4%;
    margin-left: -13%;
    border: 1px solid #a0a0a0;
  }
  @media (max-width: 480px) {
    width: 85%;
    height: 47px;
    margin-top: 5%;
  }
`;

export const TitleParagraph = styled.p`
  text-align: center;
  font-size: 1.7rem;
  font-weight: 600;
  color: #ffffff;
  margin-left: 16%;
  margin-top: 5%;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.9rem;
    margin-top: 4%;

  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.9rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.9rem;
    margin-top: 3%;

  }
  @media (max-width: 480px) {
    font-size: 1.4rem;
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
`;
