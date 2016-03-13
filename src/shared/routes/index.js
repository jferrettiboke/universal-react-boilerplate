import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '../components/App.jsx'
import Landing from '../components/Landing.jsx'
import About from '../components/About.jsx'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/about" component={About} />
  </Route>
)
