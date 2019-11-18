import React, { Component } from 'react';
import QuesetionnaireSectionsData from '../../Data/questionnaireSectionsData';
import QuesetionnaireSection from './../../CommonComponents/QuestionnaireSection';
import QuestionnaireOptions from './QuestionnaireOptions';
import {
  PageTitle,
  Paragraph,
  Line,
  OptionTitle,
  NextPrevDiv
} from './index.style';
import NextButton from '../../CommonComponents/NextButton';
import PrevButton from '../../CommonComponents/PrevButton';
import PopupPage from '../../CommonComponents/PopupPage';
import Popup from 'reactjs-popup';
import LevelPop from './../../CommonComponents/LevelPop/index';

export default class Questionnaire extends Component {
  state = {
    questionnaireSection: 1,
    checkedQuestions: new Array(25).fill(false)
  };

  checkboxChange = id => {
    // an array of 25 false values representing the value of the attribute checked in the checkboxes, that I loop over to change/toggle their state according to the id of the each box.
    let { checkedQuestions } = this.state;
    checkedQuestions = checkedQuestions.map((ele, index) => {
      if (index === id - 1) {
        ele = !ele;
        return ele;
      } else {
        return ele;
      }
    });
    this.setState({ checkedQuestions });
  };

  nextButtonClickHandler = event => {
    const { name } = event.target;
    const { questionnaireSection } = this.state;
    //we have a name attribute in the next & prev & general motor skills buttons.
    if (name === 'nextBtn' || name === 'motorSkills') {
      const sectionData = QuesetionnaireSectionsData[questionnaireSection - 1];
      // An array that takes the current checkedQuestions state and slices the number of items needed for each question, then filters them to check how many of them are true so we can render each section according to that array's result.
      const answeredQuestions = this.state.checkedQuestions
        .slice(0, sectionData.limit)
        .filter(ele => ele === true);

      //if the answeredQuestions array's length is equal to the limit of each section then move to the next section
      if (answeredQuestions.length === sectionData.limit) {
        this.setState({ questionnaireSection: questionnaireSection + 1 });
      } else {
        return;
      }
    } else {
      //if the button clicked is not next button then move to the prev section
      this.setState({
        questionnaireSection: questionnaireSection - 1
      });
    }
  };

  render() {
    const { questionnaireSection, checkedQuestions } = this.state;
    const sectionData = QuesetionnaireSectionsData[questionnaireSection - 1];

    // An array that takes the current checkedQuestions state and slices the number of items needed for each question, then filters them to check how many of them are true so we can render each section according to that array's result.
    const answeredQuestions = this.state.checkedQuestions
      .slice(0, sectionData.limit)
      .filter(ele => ele === true);

    return (
      <>
        {/* Rendering the page's titles based on the section's number */}
        {questionnaireSection === QuesetionnaireSectionsData[0].section ? (
          <>
            <PageTitle>
              We just need you to answer some questions to determine where to
              start:
            </PageTitle>
            <Line />
            <Paragraph>
              Please check the box if your child is able to do the following:
            </Paragraph>
          </>
        ) : questionnaireSection === QuesetionnaireSectionsData[3].section ? (
          <OptionTitle>
            We just need you to answer some questions to determine where to
            start:
          </OptionTitle>
        ) : (
          <Paragraph>
            Please check the box if your child is able to do the following:
          </Paragraph>
        )}

        {/* Switching between questionnaire sections and option section based on qestions, if there are queestions the QuesetionnaireSection component and if not we render the option section */}
        {(sectionData.sliceFromQuestion && sectionData.sliceToQuestion) !==
        null ? (
          <QuesetionnaireSection
            checkboxChange={this.checkboxChange}
            checkedQuestions={checkedQuestions}
            sectionData={sectionData}
          />
        ) : (
          <QuestionnaireOptions
            nextButtonClickHandler={this.nextButtonClickHandler}
          />
        )}

        <NextPrevDiv>
          {/* Rendering the prev button based on the section's number */}
          {questionnaireSection ===
          QuesetionnaireSectionsData[0].section ? null : (
            <PrevButton
              prevLink='/questionnaire'
              nextButtonClickHandler={this.nextButtonClickHandler}
            />
          )}

          {/* Rendering the next button based on the section's number */}
          {questionnaireSection !== QuesetionnaireSectionsData[3].section ? (
            answeredQuestions.length === sectionData.limit ? (
              answeredQuestions.length ===
              QuesetionnaireSectionsData[5].limit ? (
                <Popup modal trigger={<NextButton/>}>
                  {close => (
                    <PopupPage
                      close={close}
                      description='Our programme will be too simple for your child and we would not recommend it.  It is likely your child doesn’t need extra support with developing their fine motor skills.'
                      NextLink='/'
                    />
                  )}
                </Popup>
              ) : (
                <NextButton
                  nextLink='/questionnaire'
                  nextButtonClickHandler={this.nextButtonClickHandler}
                />
              )
            ) : questionnaireSection >=
              QuesetionnaireSectionsData[1].section ? (
              <Popup modal trigger={<NextButton />}>
                {close => (
                  <LevelPop
                    close={close}
                    levelScore={sectionData.levelNo}
                    description={sectionData.uncompletedMsg}
                    NextLink={sectionData.uncompletedAction}
                    levelNo={sectionData.levelNo}
                  />
                )}
              </Popup>
            ) : (
              <Popup modal trigger={<NextButton />}>
                {close => (
                  <PopupPage
                    close={close}
                    description={sectionData.uncompletedMsg}
                    optionLink='/resources'
                    optionText='Our resources'
                    NextLink={sectionData.uncompletedAction}
                  />
                )}
              </Popup>
            )
          ) : null}
        </NextPrevDiv>
      </>
    );
  }
}
