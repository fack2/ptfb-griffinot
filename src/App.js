import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './CommonComponents/Header';
import Question from './CommonComponents/Question';
import LandingPage from './Layout/LandingPage';
import Menu from './Layout/Menu';

function App() {
  return (
    <>
      <Header />
      <Router>
        <>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/menu" component={Menu} />
        </>
      </Router>
    </>
  );
}

export default App;
