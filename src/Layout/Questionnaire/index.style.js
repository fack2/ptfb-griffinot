import styled from 'styled-components';

export const Header = styled.h1`
  text-align: center;
  margin: 8rem 4rem 4rem 4rem;
`;

export const Line = styled.hr`
  border-top: 1px solid var(--main-font-color);
  margin: 0rem 12rem;
`;

export const Paragraph = styled.p`
  font-size: 3.3rem;
  margin: 8rem 2rem 1rem 3rem;
  font-weight: bold;
`;

export const DivData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6rem;
  margin-top: 11rem;
  justify-content: center;
`;

export const TitleOption = styled.h1`
  font-size: 3.8rem;
  text-align: center;
`;

export const OptionDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 85rem;
  height: 18.5rem;
  background: #d6ebf7;
  border-radius: 2.5rem;
  margin-top: 8rem;
`;

export const ParagraphObtion = styled.p`
  font-size: 3.7rem;
  color: #000000;
  text-align: center;
`;

export const LinkOption = styled.a`
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
  height: ${(props) => props.height || '18rem'};
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
  flex-basis: 86%;
`;

export const Checkbox = styled.input`
  width: 3.8rem;
  height: 3.8rem;
  background: #ffffff;
  border: 1px solid #787878;
  box-sizing: border-box;
`;

export const QuestionDescription = styled.p`
  margin: 0.8rem 4rem 0.8rem 6rem;
  font-weight: 600;
  font-size: 3rem;
  color: #2d2323;
`;
