import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Students from './students';
import Campuses from './campuses';

export default class Root extends Component {
  render() {
    return (
      <div>
        <Route exact path="/students" component={Students} />
        <Route exact path="/campuses" component={Campuses} />
      </div>
    );
  }
}
