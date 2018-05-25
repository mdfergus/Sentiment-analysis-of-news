import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import store from './store';
import Root from './components/root';

render(
  <Router store={store}>
    <Root />
  </Router>,
  document.getElementById('main')
);
