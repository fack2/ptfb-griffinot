import styled from 'styled-components';

export const QuestionCard = styled.div`
	padding: 5rem 3rem;
	position: relative;
	margin-left: 2rem;
	margin-right: 2.17rem;
	margin-top: 7rem;
	height: 20rem;
	border: 0.5px solid #928e8e;
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 2rem;
`;
export const QuestionNumber = styled.span`
	font-weight: bold;
	width: 3.3rem;
	height: 3rem;
	padding-top: 0.5rem;
	font-size: 1.9rem;
	color: #ffffff;
	background: var(--next-prev-button-color);
	border-radius: 50%;
	justify-content: center;
	display: flex;
`;

export const QuestionText = styled.p`
	position: relative;
	margin: -3.9rem 0rem 2.3rem 6rem;
	font-weight: 600;
	font-size: 3.3rem;
	color: var(--main-font-color);
`;

export const QuestionDescription = styled.p`
	position: relative;
	margin: -2.2rem 4rem -2.2rem 6rem
	font-weight: 600;
	font-size: 2.6rem;
	color: var(--description-font-color);
`;

export const Checkbox = styled.input`
	position: relative;
	width: 3.2rem;
	height: 3.2rem;
	left: 82rem;
	top: -7.9rem;
	background: #ffffff;
	border: 1px solid #787878;
	box-sizing: border-box;
`;
