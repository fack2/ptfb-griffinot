import React from 'react'
import prev from '../../assets/prevButton.png'
import next from '../../assets/nextButton.png'
import {
  PrevButton,
  PrevWord,
  NextButton,
  NextWord,
  SectionN,
  SectionP
} from './index.style'
import './index.style'

export const NextPrevButton = () => {
  return (
    <>
      <SectionP>
        <PrevButton alt='PreviousButton' src={prev} />
        <PrevWord>Prev</PrevWord>
      </SectionP>

      <SectionN>
        <NextWord>Next</NextWord>
        <NextButton alt='NextButton' src={next} />
      </SectionN>
    </>
  )
}
