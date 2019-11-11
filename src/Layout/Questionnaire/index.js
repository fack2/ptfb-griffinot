import React, { Component } from 'react';
import QuesetionnaireSectionsData from '../../Data/questionnaireSectionsData';
import QuesetionnaireSection from './../../CommonComponents/QuestionnaireSection';
import QuestionnaireOptions from './QuestionnaireOptions';
import { PageTitle, Paragraph, Line, OptionTitle, DivNextPrev } from './index.style';
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

  checkboxChange = (id) => {
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

  nextButtonClickHandler = (event) => {
    const { name } = event.target;
    const { questionnaireSection } = this.state;
    if (name === 'nextBtn' || name === 'motorSkills') {
      //we have a name attribute in the next & prev button components
      const sectionData = QuesetionnaireSectionsData[questionnaireSection - 1];
      const answeredQuestions = this.state.checkedQuestions.slice(0,sectionData.limit).filter(ele => ele === true)

      if (sectionData.limit === answeredQuestions.length ) {
        //if the checked items are equal to the limit of each section or more then move to the next section
        this.setState({ questionnaireSection: questionnaireSection + 1 })
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
    const { questionnaireSection, checkedQuestions } = this.state;
    const sectionData = QuesetionnaireSectionsData[questionnaireSection - 1];
    const answeredQuestions = this.state.checkedQuestions.slice(0, sectionData.limit).filter(ele => ele === true)

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

        <DivNextPrev>
          {/* Rendering the prev button based on the section's number */}
          {questionnaireSection === QuesetionnaireSectionsData[0].section ? null : (
            <PrevButton
              prevLink="/questionnaire"
              nextButtonClickHandler={this.nextButtonClickHandler}
            />
          )}

          {/* Rendering the next button based on the section's number */}
          {questionnaireSection !== QuesetionnaireSectionsData[3].section ? (
            answeredQuestions.length === sectionData.limit ? (
              answeredQuestions.length === QuesetionnaireSectionsData[5].limit ? (
                <Popup modal trigger={<NextButton />}>
                  {(close) => (
                    <PopupPage
                      close={close}
                      description="Our programme will be too simple for your child and we would not recommend it.  It is likely your child doesn’t need extra support with developing their fine motor skills."
                      NextLink="/"
                    />
                  )}
                </Popup>
              ) : (
                <NextButton
                  nextLink="/questionnaire"
                  nextButtonClickHandler={this.nextButtonClickHandler}
                />
              )
            ) : questionnaireSection >= QuesetionnaireSectionsData[1].section ? (
              <Popup modal trigger={<NextButton />}>
                {(close) => (
                  <LevelPop
                    close={close}
                    levelScore={sectionData.levelNo}
                    description={sectionData.uncompletedMsg}
                    NextLink={sectionData.uncompletedAction}
                    No={sectionData.levelNo}
                  />
                )}
              </Popup>
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
        </DivNextPrev>
      </>
    );
  }
}
