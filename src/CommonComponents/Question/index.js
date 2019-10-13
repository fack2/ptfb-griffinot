import React, { Component } from 'react';
import data from './../../Data/questionnareData';
import {
	QuestionContainer,
	QuestionCard,
	QuestionText,
	QuestionDescription,
	QuestionNumber,
	Checkbox,
} from './index.style';

class Question extends Component {
	state = {
		checked: false,
		questionNumber: 0,
	};

	checkboxChange = (event) => {
		const { id } = event.target;
		this.setState(
			(prevState) => (
				{
					checked: !prevState.checked,
				},
				{ questionNumber: id }
			),
		);
	};
	render() {
		//Created the QuestionnaireSectionA so I can slice the questionnaire data to get only the first 5 questions, then looped over them so each question would have a card container, then I returned it.
		const QuestionnaireSectionA = data
			.slice(0, 5)
			.map(({ questionNumber, question, description }) => (
				<QuestionCard key={questionNumber}>
					<QuestionNumber>{questionNumber}</QuestionNumber>
					<QuestionText>{question}</QuestionText>
					<Checkbox type="checkbox" id={ questionNumber } onChange={ this.checkboxChange } />
					{/* If there is a description it will render its styled component, if not it won't */}
					{description ? <QuestionDescription>{description}</QuestionDescription> : null}
				</QuestionCard>
			));

		return <QuestionContainer>{QuestionnaireSectionA}</QuestionContainer>;
	}
}

export default Question;
