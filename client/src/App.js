import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

import ScrollToTop from './components/ScrollToTop';
import HomeContainer from './containers/HomeContainer';
import BlogContainer from './containers/BlogContainer';
import ContactContainer from './containers/ContactContainer';
import Header from './components/Header';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    // Update SVG - Accent Colors
    const accentEls = [
      ...document.querySelectorAll(".mug-item"),
      document.querySelectorAll(".skateboard-item")[0]
    ];
    accentEls.forEach(el => el.style.fill = "var(--accent-color)");

    // Primary Colors
    const primaryEls = [ ...document.querySelectorAll(".shirt-item") ];
    primaryEls.forEach(el => {
      el.style.fill = "var(--primary-color)"
      el.style.stroke = "var(--primary-color)"
    });

    // Secondary Colors
    const seoncdaryEls = [ 
      ...document.querySelectorAll(".laptop-item"),
      document.querySelectorAll(".skateboard-item")[1],
      ...document.querySelectorAll(".light-item"),
      document.querySelector(".chair-item")
    ];
    seoncdaryEls.forEach(el => el.style.fill = "var(--secondary-color)");

    const lightEls = [
      ...document.querySelectorAll(".lamp-arm-item"),
      ...document.querySelectorAll(".face-item"),
      document.querySelector(".desk-item")
    ];
    lightEls.forEach(el => {
      el.style.fill = "var(--light-color)";
      el.style.stroke = "var(--light-color)";
    })
  }

  render() {
    return (
      <Router>
        <ScrollToTop />

        <Header />
        <NavBar />

        <Route render={({location}) => (
          <TransitionGroup component={null}>
            <CSSTransition
              classNames="fade"
              key={location.key}
              timeout={500}>
              <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/blog" component={BlogContainer} />
                <Route path="/contact" component={ContactContainer} />
            </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        
      </Router>
    )
  }
}

export default App;