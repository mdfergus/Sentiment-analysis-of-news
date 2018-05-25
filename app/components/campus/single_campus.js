import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CampusShow from './campus_show';
import StudentsSearch from './students_search';

export default class SingleCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campus: {},
      deleted: false
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/campuses/show/${id}`);
    this.setState({ campus: res.data });
  }

  deleteCampus = async () => {
    const id = this.state.campus.id;
    await axios.delete(`/api/campuses/${id}`);
    this.setState({ deleted: true });
  };

  render() {
    const campus = this.state.campus;
    if (campus.id === undefined) {
      return <h3>Loading campus...</h3>;
    } else if (this.state.deleted) {
      return <Redirect to="/campuses" />;
    } else {
      return (
        <div id="single-todo">
          <CampusShow info={campus} deleteCampus={this.deleteCampus} />
          <StudentsSearch info={campus} />
          <Link to="/campuses">
            <button type="button">Back</button>
          </Link>
        </div>
      );
    }
  }
}
