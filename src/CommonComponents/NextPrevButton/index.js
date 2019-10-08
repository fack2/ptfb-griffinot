import React from 'react'
import next from '../../assets/next.svg'
import { PrevButton, para } from './index.style'
import './index.style'

export const NextPrevButton = () => {
  return (
    <>
      {/* <section className='prev-section'> */}
      <PrevButton alt='PreviousButton' src={next}></PrevButton>

      <para>Prev</para>
      {/* </section> */}
    </>
  )
}
