import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './CommonComponents/Header';
import LandingPage from './Layout/LandingPage';
import Menu from './Layout/Menu';
import Schema from './Layout/Schema';
import AboutUs from './Layout/AboutUs';
import Levels from './Layout/Levels';
import SectionA from './Layout/Questionnaire/SectionA';

function App() {
  return (
    <>
      <Router>
        <>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/schema" component={Schema} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/levels" component={Levels} />
          <Route exact path="/questionnaire-section-a" component={SectionA} />
        </>
      </Router>
    </>
  );
}
export default App;
