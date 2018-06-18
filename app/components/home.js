import React, { Component } from 'react';
import Axios from 'axios';
import Spinner from 'react-spinkit';
import Search from './search';
import Card from './article-card';
import Chart from './chart';

class Home extends Component {
  state = {
    info: [],
    source: 'The New York Times',
    loading: false
  };

  async componentDidMount() {
    //const res = await Axios.get('/api/nyt');
    const res = await Axios.get('/api/test-google-results');
    const info = res.data;
    const oldState = this.state;
    this.setState({ ...oldState, info });
  }

  handleSubmit = async source => {
    let searchVal = source;
    if (searchVal === 'Mother Jones') {
      searchVal = 'motherjones';
    } else if (searchVal === 'DEBKAfile') {
      searchVal = 'debka';
    } else if (searchVal === 'The Economist') {
      searchVal = 'economist';
    } else if (searchVal === 'Frontpage Magazine') {
      searchVal = 'frontpage';
    }
    const oldState = this.state;
    this.setState({ ...oldState, loading: true });

    const res = await Axios.get(`/api/${searchVal}/google`);
    const info = res.data.analysis;
    console.log(info);

    this.setState({ info, source, loading: false });
  };

  render() {
    const { info, source } = this.state;
    if (this.state.loading) {
      return (
        <div className="row">
          <div className="col push-m5 spinner">
            <Spinner name="ball-spin-fade-loader" color="coral" />
          </div>
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
