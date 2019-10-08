import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './Layout/LandingPage';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={LandingPage} />
      </>
    </Router>
  );
}

export default App;
