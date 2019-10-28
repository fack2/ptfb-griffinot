import styled from 'styled-components';

export const LevelDiv = styled.div`
  display: flex;

  flex-direction: column;
  margin-bottom: 7%;
  border: 1px solid #a7a7a7;
  border-radius: 20px;
;

  @media (min-width: 240px) and (max-width: 320px) {
    display: flex;
    align-content: center;
  }
`;
export const DivTitle = styled.div`

 display: flex;
  align-content: center;
  margin-top: 7%;
    margin-left: 4%;
`;
export const CircleLevel = styled.div`
  @media (min-width: 240px) and (max-width: 320px) {
    width: 26%;
    height: 57px;
  }
  width: 24%;
  border-radius: 50%;
  height: 87px;
  background: #ffce1c;
  z-index: 1;
  text-align: center;
`;

export const ParagraphLevel = styled.p`
  font-size: 1.7rem;
  color: #e8425c;
  margin-top: 35%;
  @media (min-width: 240px) and (max-width: 320px) {
    font-size: 1rem;
  }
`;

export const TitleLevel = styled.div`
  @media (min-width: 240px) and (max-width: 320px) {
    width: 94%;
    height: 38px;
  }
  width: 90%;
  height: 56px;

  background: #175d8c;
  border: 1px solid #a0a0a0;
  box-sizing: border-box;
  border-radius: 50px;
  margin-top: 4%;
  margin-left: -19%;
`;

export const TitleParagraph = styled.p`
  text-align: center;
  font-size: 1.7rem;
  color: #ffffff;
  margin-left: 16%;
  @media (min-width: 240px) and (max-width: 320px) {
    font-size: 1rem;
  }
`;
export const DescriptionLevel = styled.p`
  font-size: 1.5rem;
  padding: 4%;
  @media (min-width: 240px) and (max-width: 320px){
    font-size: 1rem;
  }
`;
