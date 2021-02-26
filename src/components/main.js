import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Contact from './contact';
import Project from './project';
import Resume from './resume';
const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/resume" component={Resume} />
    </Switch>
)

export default Main;