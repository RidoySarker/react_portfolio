import React, { PureComponent, Fragment } from 'react'
import {Route,Switch} from "react-router-dom";
import HomePage from '../pages/HomePage';
import ServicePage from '../pages/ServicePage';
import CoursePage from '../pages/CoursePage';
import Portfolio from '../pages/Portfolio';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
class AppRoute extends PureComponent {


    render() {
        return (
          <Fragment>
              <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/services" component={ServicePage} />
                  <Route exact path="/courses" component={CoursePage} />
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route exact path="/contact" component={ContactPage} />
                  <Route exact path="/about" component={AboutPage} />
                  <Route exact path="/refund" component={RefundPage} />
                  <Route exact path="/terms" component={TermsPage} />
                  <Route exact path="/privacy" component={PrivacyPage} />
                  <Route exact path="/projectdetails/:projectid/:projectName" component={ProjectDetailsPage} />
                  <Route exact path="/coursedetails" component={CourseDetailsPage} />
              </Switch>
          </Fragment>  
        );
    }
}

export default AppRoute