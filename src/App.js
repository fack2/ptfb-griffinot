import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './CommonComponents/Header';
import LandingPage from './Layout/LandingPage';
import Menu from './Layout/Menu';
import Schema from './Layout/Schema';
import AboutUs from './Layout/AboutUs';
import Option3 from './Layout/Questionnaire/Option3';
import Levels from './Layout/Levels';
import SectionA from './Layout/Questionnaire/SectionA';
import Resources from './Layout/Resources';

function App() {
  return (
    <>
      <Router>
        <>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/schema" component={Schema} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route path="/option" component={Option3} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/levels" component={Levels} />
          <Route exact path="/questionnaire-section-a" component={SectionA} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/schema" component={Schema} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/levels" component={Levels} />
          <Route exact path="/resources" component={Resources} />
        </>
      </Router>
    </>
  );
}
export default App;
