import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Spinner from 'react-spinkit';
import Search from './search';

class Home extends Component {
  state = {
    info: []
  };

  async componentDidMount() {
    //const res = await Axios.get('/api/nyt');
    const res = await Axios.get('/api/test-google-results');
    const info = res.data;
    setTimeout(() => this.setState({ info }), 3000);
  }

  handleSubmit = value => {
    console.log(value);
  };

  render() {
    const info = this.state.info;

    if (!info[0]) {
      return (
        <div className="center">
          <Spinner name="ball-spin-fade-loader" color="coral" />
        </div>
      );
    }
    return (
      <div>
        <Search handleSubmit={this.handleSubmit} />
        {info.map(ele => (
          <div>
            <div>{ele.title}</div>
            <div>{ele.magnitude}</div>
            <div>{ele.emotion}</div>
            <h2 />
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
