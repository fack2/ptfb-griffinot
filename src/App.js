import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './CommonComponents/Header'
import LandingPage from './Layout/LandingPage'

function App() {
  return (
    <>
      <Header />
      <Router>
        <>
          <Route exact path='/' component={LandingPage} />
        </>
      </Router>
    </>
  )
}

export default App
