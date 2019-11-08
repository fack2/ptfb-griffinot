import React, { Component } from 'react';
import QuesetionnaireSectionsData from '../../Data/questionnaireSectionsData';
import QuesetionnaireSection from './../../CommonComponents/QuestionnaireSection';
import QuestionnaireOptions from './QuestionnaireOptions';
import { PageTitle, Paragraph, Line, OptionTitle } from './index.style';
import NextButton from '../../CommonComponents/NextButton';
import PrevButton from '../../CommonComponents/PrevButton';
import PopupPage from '../../CommonComponents/PopupPage';
import Popup from 'reactjs-popup';

export default class Questionnaire extends Component {
  state = {
    checkedItems: [],
    questionnaireSection: 1,
    checkedQuestions: new Array(25).fill(false),
  };

  checkboxChange = (id) => {
    const { checkedQuestions } = this.state; //this array is for preserving the checked items while moving through the questionnaire sections

    let checkedItems = this.state.checkedItems; //Created a variable named checkedItems to change the array in the state using push method

    //If the number of the question that is checked does't exist in the array push it to it.
    if (!checkedItems.find((ele) => ele === id)) {
      this.state.checkedItems.push(id);
      checkedQuestions[id - 1] = true; //Array filled with 25 false values that represent the 25 questions' checked status, if the question is checked we set its false value to true.
      this.setState(
        { checkedItems, checkedQuestions }, //set the checkedItems array in the state to be equal to the variable checkedItems.(We can't push the items directly to the array using push inside the setState because push returns the length of the array not the values in it)
      );
    } else {
      //If the number of the question that is checked exists in the array remove it from it && return the checked state in the checkedQuestions array to false(this is for toggling the checkbox on and off) .
      checkedItems = checkedItems.filter((ele) => ele !== id);
      checkedQuestions[id - 1] = false;
      this.setState({ checkedItems, checkedQuestions });
    }
  };

  nextButtonClickHandler = (event) => {
    const { name } = event.target;
    // NextButtonClickHandlerAction(name);
    const { checkedItems, questionnaireSection } = this.state;
    if (name === 'nextBtn') {
      //we have a name attribute in the next & prev button components
      const sectionData = QuesetionnaireSectionsData[questionnaireSection - 1];
      if (checkedItems.length >= sectionData.limit) {
        //if the checked items are equal to the limit of each section or more then move to the next section
        this.setState({ questionnaireSection: questionnaireSection + 1 }, () => {});
      } else {
        return <p>{sectionData.uncompletedMsg}</p>;
      }
    } else {
      this.setState({
        questionnaireSection: questionnaireSection - 1, //if the button clicked is not next button then move to the prev section
      });
    }
  };

  render() {
    const { checkedItems, questionnaireSection, checkedQuestions } = this.state;
    const sectionData = QuesetionnaireSectionsData[questionnaireSection - 1];
    return (
      <>
        {/* Rendering the page's titles based on the section's number */}
        {questionnaireSection === QuesetionnaireSectionsData[0].section ? (
          <>
            <PageTitle>
              We just need you to answer some questions to determine where to start:
            </PageTitle>
            <Line />
            <Paragraph>Please check the box if your child is able to do the following:</Paragraph>
          </>
        ) : questionnaireSection === QuesetionnaireSectionsData[3].section ? (
          <OptionTitle>
            We just need you to answer some questions to determine where to start:
          </OptionTitle>
        ) : (
          <Paragraph>Please check the box if your child is able to do the following:</Paragraph>
        )}

        {/* Switching between questionnaire sections and option section based on qestions, if there are queestions the QuesetionnaireSection component and if not we render the option section */}
        {(sectionData.sliceFromQuestion && sectionData.sliceToQuestion) !== null ? (
          <QuesetionnaireSection
            checkboxChange={this.checkboxChange}
            checkedQuestions={checkedQuestions}
            sectionData={sectionData}
          />
        ) : (
          <QuestionnaireOptions nextButtonClickHandler={this.nextButtonClickHandler} />
        )}

        {/* Rendering the next button based on the section's number */}
        {questionnaireSection !== QuesetionnaireSectionsData[3].section ? (
          checkedItems.length >= sectionData.limit ? (
            <NextButton
              nextLink="/questionnaire"
              nextButtonClickHandler={this.nextButtonClickHandler}
            />
          ) : (
            <Popup modal trigger={<NextButton />}>
              {(close) => (
                <PopupPage
                  close={close}
                  description={sectionData.uncompletedMsg}
                  optionLink="/resources"
                  optionText="Our resources"
                  NextLink={sectionData.uncompletedAction}
                />
              )}
            </Popup>
          )
        ) : null}

        {/* Rendering the prev button based on the section's number */}
        {questionnaireSection === QuesetionnaireSectionsData[0].section ? null : (
          <PrevButton
            prevLink="/questionnaire"
            nextButtonClickHandler={this.nextButtonClickHandler}
            marginLeft="8%"
            marginLeft1="8%"
            marginLeft2="14%"
            marginTop="55%"
            marginTop1="20%"
            marginLeft4="20%"
            marginTop4="29%"
            marginLeft3="14%"
            marginTop3="18%"
          />
        )}
      </>
    );
  }
}
