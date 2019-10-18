import React, { Component } from 'react';
import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionC from './SectionC';
import SectionD1 from './SectionD1';
import SectionD2 from './SectionD2';

class Questionnaire extends Component {
  state = {
    questionNumber: 0,
    checkedItems: [],
    QuestionnaireSections: 1,
  };

  checkboxChange = (event) => {
    const { id, checked } = event.target;
    const checkedItems = this.state.checkedItems; //Created a variable named checkedItems to change the array in the state using push method

    //If the object does't exist in the array push it to it.
    if (!checkedItems.find((ele) => ele.id === id && ele.checked === checked)) {
      this.state.checkedItems.push({ id, checked });
      this.setState(
        { checkedItems }, //set the checkedItems array in the state to be equal to the variable checkedItems.(We can't push the items directly to the array using push inside the setState because push returns the length of the array not the values in it)
      );
    }
    //If the object exists in the array and the checked status coming from the event is false then remove both the existing object and the new one.
    if (checkedItems.find((ele) => ele.id === id && ele.checked === checked && checked === false)) {
      this.state.checkedItems.splice(id - 1, 2); //The id of the question is greater then the question's index by one.
      this.setState({ checkedItems });
    }

    this.setState((prevState) => ({
      checked: !prevState.checked,
      questionNumber: id,
    }));
  };

  render() {
    return (
      <>
        <SectionA checkboxChange={this.checkboxChange} />
        <SectionB checkboxChange={this.checkboxChange} />
        <SectionC checkboxChange={this.checkboxChange} />
        <SectionD1 checkboxChange={this.checkboxChange} />
        <SectionD2 checkboxChange={this.checkboxChange} />
      </>
    );
  }
}

export default Questionnaire;
