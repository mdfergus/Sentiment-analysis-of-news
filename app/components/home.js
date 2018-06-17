import React, { Component } from 'react';
import Axios from 'axios';
import Spinner from 'react-spinkit';
import Search from './search';
import Card from './article-card';
import Chart from './chart';

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
      <div className="mainPage">
        <Search handleSubmit={this.handleSubmit} />
        <Chart info={info} />
        {info.map(ele => <Card info={ele} key={ele.title} />)}
      </div>
    );
  }
}

export default Home;
