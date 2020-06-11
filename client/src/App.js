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

  componentDidMount() {
    // Update SVG - Accent Colors
    const accentEls = [
      ...document.querySelectorAll(".skateboard-item"),
      ...document.querySelectorAll(".light-item"),
      ...document.querySelectorAll(".mug-item"),
      document.querySelector(".chair-item")
    ];
    accentEls.forEach(el => el.style.fill = "var(--accent-color)");

    // Primary Colors
    const primaryEls = [ ...document.querySelectorAll(".shirt-item") ];
    primaryEls.forEach(el => {
      el.style.fill = "var(--primary-color)"
      el.style.stroke = "var(--primary-color)"
    });

    // Secondary Colors
    const seoncdaryEls = [ ...document.querySelectorAll(".laptop-item") ];
    seoncdaryEls.forEach(el => el.style.fill = "var(--secondary-color)");

    const lightEls = [
      ...document.querySelectorAll(".lamp-arm-item"),
      document.querySelector(".desk-item")
    ];
    lightEls.forEach(el => el.style.fill = "var(--light-color)")
  }

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