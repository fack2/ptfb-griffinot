import React, { Component } from 'react';
import data from '../../Data/data';
import {
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
		return data.map(({ questionNumber, question, description }) => (
			<QuestionCard key={questionNumber}>
				<QuestionNumber>{questionNumber}</QuestionNumber>
				<QuestionText>{question}</QuestionText>
				<QuestionDescription>{description}</QuestionDescription>
				<Checkbox type="checkbox" id={questionNumber} onChange={this.checkboxChange} />
			</QuestionCard>
		));
	}
}

export default Question;
