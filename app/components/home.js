import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Home extends Component {
  state = {
    info: []
  };

  async componentDidMount() {
    const res = await Axios.get('/api/nyt');
    const info = res.data;
    this.setState({ info });
  }

  render() {
    const info = this.state.info;
    return <div>{info.map(ele => <div>{ele.title}</div>)}</div>;
  }
}

export default Home;
