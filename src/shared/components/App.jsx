import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

const App = props => (
  <div>
    <Helmet htmlAttributes={{ lang: 'en' }} />
    <h1>App</h1>
    <ul>
      <li>
        <Link to="/">Landing</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
