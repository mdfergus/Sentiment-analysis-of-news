import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import Students from './students';
import Navbar from './navbar';
import Home from './home';

export default class Root extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/students" component={Students} /> */}
      </div>
    );
  }
}
