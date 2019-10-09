import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import prev from '../../assets/prevButton.png'
import next from '../../assets/nextButton.png'
import { PrevButton, PrevWord, NextButton, NextWord } from './index.style'
import './index.style'

const NextPrevButton = ({ prevLink, nextLink }) => {
  return (
    <Router>
      <Link to={prevLink}>
        <PrevButton alt='PreviousButton' src={prev} />
        <PrevWord>Prev</PrevWord>
      </Link>
      <Link to={nextLink}>
        <NextWord>Next</NextWord>
        <NextButton alt='NextButton' src={next} />
      </Link>
    </Router>
  )
}
export default NextPrevButton
