import React, { Component, createContext } from 'react';
import { SectionA, SectionB, SectionC } from './SectionA';

export const DataContext = createContext({});
class MyProvider extends Component {
	state = {
		checked: false,
		questionNumber: 0,
		CheckResult: [],
	};

	checkboxChange = (event) => {
		const { id } = event.target;
		this.setState(
			(prevState) => (
				{
					checked: !prevState.checked,
				},
				{ questionNumber: id },
				{ CheckResult: CheckResult.push(id) }
			),
		);
	};

	render() {
		<DataContext.Provider
			value={{
				state: this.state,
			}}
		>
			{this.props.children}
		</DataContext.Provider>;
	}
}

class Questionnaire extends Component {
	render() {
		return (
			<DataContext.Provider>
				<SectionA />
			</DataContext.Provider>
		);
	}
}

export default Questionnaire;
