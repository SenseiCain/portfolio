import React, { Component } from 'react';
import './App.css';

import HomeContainer from './containers/HomeContainer';
import BlogContainer from './containers/BlogContainer';
import ContactContainer from './containers/ContactContainer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <NavBar />

        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/blog" component={BlogContainer} />
          <Route path="/contact" component={ContactContainer} />
        </Switch>

        <Footer />
      </Router>
    )
  }
}

export default App;