import React from 'react'
import prev from '../../assets/prevButton.png'
import next from '../../assets/nextButton.png'
import { PrevButton, PrevWord, NextButton, NextWord } from './index.style'
import './index.style'

export const NextPrevButton = () => {
  return (
    <>
      <PrevButton alt='PreviousButton' src={prev} />
      <PrevWord>Prev</PrevWord>

      <NextWord>Next</NextWord>
      <NextButton alt='NextButton' src={next} />
    </>
  )
}
