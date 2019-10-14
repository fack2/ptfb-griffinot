import styled from 'styled-components';

export const QuestionContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
`;

export const QuestionCard = styled.div`
	border-radius: 2rem;
	border: 0.5px solid #928e8e;
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	height: ${(props) => props.height || '20rem'};
	padding: 5rem 3rem;
	margin: 5rem 2rem 0;
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
