import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Students from './students';
import Campuses from './campuses';
import SingleCampus from './campus/single_campus';
import SingleStudent from './student/single_student';
import Navbar from './navbar';
import Home from './home';

export default class Root extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/students" component={Students} />
        <Route path="/students/:id" component={SingleStudent} />
        <Route exact path="/campuses" component={Campuses} />
        <Route path="/campuses/:id" component={SingleCampus} />
      </div>
    );
  }
}
