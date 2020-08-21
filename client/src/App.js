import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ScrollToTop from './components/ScrollToTop';
import HomeContainer from './containers/HomeContainer';
import BlogContainer from './containers/BlogContainer';
import ContactContainer from './containers/ContactContainer';
import HeaderContainer from './containers/HeaderContainer';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogShowContainer from './containers/BlogShowContainer';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <Router>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&amp;family=Roboto+Condensed&amp;display=swap" rel="stylesheet" />
        <ScrollToTop />

        <HeaderContainer />
        <NavBar className="shadow"/>
        <div id="box-shadow-hide"></div>

        <Route render={({location}) => (
          <TransitionGroup className="wrapper shadow" >
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={400}>
              <Switch location={location}>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/blog" component={BlogContainer} />
                <Route path="/contact" component={ContactContainer} />
                <Route path="/blog/:blogTitle" component={BlogShowContainer} />
            </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        
        <Footer />

      </Router>
    )
  }
}

export default App;