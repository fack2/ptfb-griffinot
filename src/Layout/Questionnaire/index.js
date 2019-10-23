import React, { Component } from 'react';
import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionC from './SectionC';
import Option3 from './Option3';
import SectionD1 from './SectionD1';
import SectionD2 from './SectionD2';
import QuestionnaireData from './QuestionnaireData';

class Questionnaire extends Component {
  state = {
    checkedItems: [],
    questionnaireSections: 1,
    checkedQuestions: new Array(25).fill(false)
  };

  checkboxChange = event => {
    const { id } = event.target;
    const { checkedQuestions } = this.state; //this array is for preserving the checked items while moving through the questionnaire sections

    let checkedItems = this.state.checkedItems; //Created a variable named checkedItems to change the array in the state using push method

    //If the number of the question that is checked does't exist in the array push it to it.
    if (!checkedItems.find(ele => ele === id)) {
      this.state.checkedItems.push(id);
      checkedQuestions[id - 1] = true; //Array filled with 25 false values that represent the 25 questions' checked status, if the question is checked we set its false value to true.
      this.setState(
        { checkedItems, checkedQuestions } //set the checkedItems array in the state to be equal to the variable checkedItems.(We can't push the items directly to the array using push inside the setState because push returns the length of the array not the values in it)
      );
    } else {
      //If the number of the question that is checked exists in the array remove it from it && return the checked state in the checkedQuestions array to false(this is for toggling the checkbox on and off) .
      checkedItems = checkedItems.filter(ele => ele !== id);
      checkedQuestions[id - 1] = false;
      this.setState({ checkedItems, checkedQuestions }, () => { });
    }
    this.setState(prevState => ({
      checked: !prevState.checked,
      questionNumber: id
    }));
  };

  nextButtonClickHandler = event => {
    const { name } = event.target;
    const { checkedItems, questionnaireSections } = this.state;

    if (name === 'nextBtn') {
      //we have a name attribute in the next & prev button components
      const sectionData = QuestionnaireData[questionnaireSections - 1];
      if (checkedItems.length >= sectionData.limit) {
        //if the checked items are equal to the limit of each section or more then move to the next section
        this.setState(
          { questionnaireSections: questionnaireSections + 1 },
          () => { }
        );
      } else {
        return <p>{sectionData.uncompletedMsg}</p>;
      }
    } else {
      this.setState({
        questionnaireSections: questionnaireSections - 1 //if the button clicked is not next button then move to the prev section
      });
    }
  };

  changeQuestionnaireSections = () => {
    const {
      questionnaireSections,
      checkedItems,
      checkedQuestions
    } = this.state;
    switch (questionnaireSections) {
      case 1:
        return (
          <SectionA
            checkboxChange={this.checkboxChange}
            nextButtonClickHandler={this.nextButtonClickHandler}
            checkedItems={checkedItems}
            checkedQuestions={checkedQuestions}
          />
        );
      case 2:
        return (
          <SectionB
            checkboxChange={this.checkboxChange}
            nextButtonClickHandler={this.nextButtonClickHandler}
            checkedItems={checkedItems}
            checkedQuestions={checkedQuestions}
          />
        );
      case 3:
        return (
          <SectionC
            checkboxChange={this.checkboxChange}
            nextButtonClickHandler={this.nextButtonClickHandler}
            checkedItems={checkedItems}
            checkedQuestions={checkedQuestions}
          />
        );
      case 4:
        return (
          <Option3
            checkboxChange={this.checkboxChange}
            nextButtonClickHandler={this.nextButtonClickHandler}
            checkedItems={checkedItems}
            checkedQuestions={checkedQuestions}
          />
        );
      case 5:
        return (
          <SectionD1
            checkboxChange={this.checkboxChange}
            nextButtonClickHandler={this.nextButtonClickHandler}
            checkedItems={checkedItems}
            checkedQuestions={checkedQuestions}
          />
        );
      case 6:
        return (
          <SectionD2
            checkboxChange={this.checkboxChange}
            nextButtonClickHandler={this.nextButtonClickHandler}
            checkedItems={checkedItems}
            checkedQuestions={checkedQuestions}
          />
        );
    }
  };

  render() {
    return this.changeQuestionnaireSections();
  }
}

export default Questionnaire;
