import React, { Component } from 'react';
import Axios from 'axios';
import Spinner from 'react-spinkit';
import Search from './search';
import Card from './article-card';
import Chart from './chart';

class Home extends Component {
  state = {
    info: [],
    source: 'The New York Times'
  };

  async componentDidMount() {
    //const res = await Axios.get('/api/nyt');
    const res = await Axios.get('/api/test-google-results');
    const info = res.data;
    const oldState = this.state;
    this.setState({ ...oldState, info });
  }

  handleSubmit = async source => {
    if (source === 'Mother Jones') {
      source = 'motherjones';
    } else if (source === 'DEBKAfile') {
      source = 'debka';
    } else if (source === 'The Economist') {
      source = 'economist';
    } else if (source === 'Frontpage Magazine') {
      source = 'frontpage';
    }

    const res = await Axios.get(`/api/${source}/google`);
    const info = res.data.analysis;
    console.log(info);

    this.setState({ info, source });
  };

  render() {
    const { info, source } = this.state;
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
        <Chart info={info} source={source} />
        {info.map(ele => <Card info={ele} key={ele.title} />)}
      </div>
    );
  }
}

export default Home;
