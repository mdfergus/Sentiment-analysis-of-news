import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Students from './students';
import Campuses from './campuses';
import SingleCampus from './campus/single_campus';
import CampusNew from './campus/campus_new';
import CampusEdit from './campus/campus_edit';
import SingleStudent from './student/single_student';
import StudentEdit from './student/student_edit';
import StudentNew from './student/student_new';
import Navbar from './navbar';
import Home from './home';

export default class Root extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/students/edit/:id" component={StudentEdit} />
        <Route exact path="/students/new/" component={StudentNew} />
        <Route exact path="/students/show/:id" component={SingleStudent} />
        <Route exact path="/campuses" component={Campuses} />
        <Route exact path="/campuses/edit/:id" component={CampusEdit} />
        <Route exact path="/campuses/new/" component={CampusNew} />
        <Route exact path="/campuses/show/:id" component={SingleCampus} />
      </div>
    );
  }
}
