import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './CommonComponents/Header';
import LandingPage from './Layout/LandingPage';
import Menu from './Layout/Menu';
import Schema from './Layout/Schema';
import AboutUs from './Layout/AboutUs';
import Levels from './Layout/Levels';
import Resources from './Layout/Resources';
import SensoryTraining from './Layout/ResourcesCategories/SensoryTraining';
import Questionnaire from './Layout/Questionnaire';
import Books from './Layout/Books';
import Videos from './Layout/Videos';
import SensoryIntroduction from './Layout/ResourcesCategories/SensoryIntroduction';

function App() {
  return (
    <>
      <Router>
        <Route
          render={() => (window.location.pathname === '/menu' ? null : <Header />)}
        />

        <Route exact path="/menu" component={Menu} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/schema" component={Schema} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/levels" component={Levels} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/questionnaire" component={Questionnaire} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/introductory-videos" component={Videos} />
        <Route
          exact
          path="/sensory-training"
          component={SensoryTraining}
        />
        <Route exact path="/sensory-introduction" component={SensoryIntroduction} />
      </Router>
    </>
  );
}
export default App;
