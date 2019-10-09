import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './CommonComponents/Header'
import LandingPage from './Layout/LandingPage'
import { NextPrevButton } from './CommonComponents/NextPrevButton'
function App() {
  return (
    <>
      <Header />
      <NextPrevButton />
      <Router>
        <>
          <Route exact path='/' component={LandingPage} />
        </>
      </Router>
    </>
  )
}

export default App
