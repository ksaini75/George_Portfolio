import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from './Components/Navigation/NavigationBar';
import AboutPage from './Components/About/AboutPage';
import ProjectPage from './Components/Projects/ProjectPage';
import ContactPage from './Components/ContactPage/ContactPage';
import Footer from './Components/Footer/Footer';

import './App.scss';

import reportWebVitals from './reportWebVitals';


const routing = (
        <Router>
                <NavigationBar />
    <Switch>
                        <Route path='/' exact component={AboutPage} />
                        <Route path='/About' exact component={AboutPage} />
                      <Route path='/Projects' exact component={ProjectPage} />
                     <Route path='/Contact' exact component={ContactPage} />
                </Switch>
                <Footer />
        </Router>

)


ReactDOM.render(
        routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();