import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './CommonComponents/Header';
import LandingPage from './Layout/LandingPage';
import Schema from './Layout/Schema';
import AboutUs from './Layout/AboutUs';

function App() {
  return (
    <>
      <Header />
      <Router>
        <>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/schema" component={Schema} />
          <Route exact path="/about-us" component={AboutUs} />
        </>
      </Router>
    </>
  );
}

export default App;
