import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './CommonComponents/Header';
import LandingPage from './Layout/LandingPage';
import Menu from './Layout/Menu';
import Schema from './Layout/Schema';
import AboutUs from './Layout/AboutUs';
import Option3 from './Layout/Questionnaire/Option3';
import Levels from './Layout/Levels';
import Resources from './Layout/Resources';
import SectionA from './Layout/Questionnaire/SectionA';
import SectionB from './Layout/Questionnaire/SectionB';
import SectionC from './Layout/Questionnaire/SectionC';
import SectionD2 from './Layout/Questionnaire/SectionD2';

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
          <Route exact path="/option" component={Option3} />
          <Route exact path="/levels" component={Levels} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/questionnaire-section-a" component={SectionA} />
          <Route exact path="/questionnaire-section-b" component={SectionB} />
          <Route exact path="/questionnaire-section-c" component={SectionC} />
          <Route exact path="/questionnaire-section-d2" component={SectionD2} />
        </>
      </Router>
    </>
  );
}
export default App;
