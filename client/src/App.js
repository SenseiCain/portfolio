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
import BlogShowContainer from './containers/BlogShowContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Condensed&display=swap" rel="stylesheet" />
        <ScrollToTop />

        <Header />
        <NavBar />

        <Route render={({location}) => (
          <TransitionGroup className="wrapper">
            <CSSTransition
              classNames="fade"
              key={location.key}
              timeout={500}>
              <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/blog" component={BlogContainer} />
                <Route path="/contact" component={ContactContainer} />
                <Route path="/blog/:blogTitle" component={BlogShowContainer} />
            </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        
      </Router>
    )
  }
}

export default App;