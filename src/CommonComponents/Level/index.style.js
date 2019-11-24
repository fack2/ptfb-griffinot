import styled from 'styled-components';

export const LevelDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7%;
  border: 0.5px solid #a7a7a7;
  border-radius: 6px;
  @media (min-width: 1281px) {
    border: 1.5px solid #a7a7a7;
    margin-left: 4%;
  }
`;
export const DivTitle = styled.div`
  display: flex;
  align-content: center;
  margin-top: 7%;
  margin-left: 1%;
  padding-right: 8%;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 11%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 18%;
  }
  @media (min-width: 1281px) {
    margin-left: 18%;
  }

`;
export const DivCircle = styled.div`
  position: relative;
  text-align: center;
`;

export const ParagraphLevel = styled.div`
  font-size: 1.6rem;
  color: #e8425c;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TitleLevel = styled.div`
  width: 93%;
  height: 49px;
  background: #175d8c;
  border: 1px solid #a0a0a0;
  box-sizing: border-box;
  border-radius: 50px;
  margin-top: 8%;
  margin-left: -25%;
  @media (max-width: 480px) {
    width: 300%;
    height: 45px;
    margin-top: 5%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 88%;
    margin-left: -17%;
    height: 50px;
    margin-top: 7%;
  }
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
    width: 70%;
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
`;

export const TitleParagraph = styled.p`
  font-size: 1.3rem;
  color: #ffffff;
  margin-left: 29%;
  margin-top: 4.5%;
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.7rem;
    margin-top: 4%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.7rem;
    color: #ffffff;
    margin-left: 26%;
    margin-top: 4.5%;
  }
  @media (min-width: 1281px) {
    font-size: 1.9rem;
    margin-top: 4%;
    margin-left: 20%;
  }
`;
export const DescriptionLevel = styled.p`
  font-size: 1.4rem;
  padding: 4%;
  text-align: justify;
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.7rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.9rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.9rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.9rem;
  }
`;
export const CircleImage = styled.img`
  height: 100px;
  z-index: 1;
  @media (max-width: 480px) {
    height: 72px;
    width: 53%;
  }
`;

export const Button = styled.button`
    border: none;
    border-radius: 36px;
    margin-left: 60%;
    margin-bottom: 3%;
    padding-bottom: 3%;
    padding: 3%;
    font-size: 1.5rem;
    font-weight: bold;
    color:#ffff;
    background-color: var(--main-component-color)
`;

export const Link = styled.a`
  color: #2d2323;
  text-decoration: none;
  outline: none;
`;
