import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App/App';
import Landing from '../components/Landing/Landing';
import About from '../components/About/About';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/about" component={About} />
  </Route>
);
