import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import styles from './App.css';

const App = props => (
  <div>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      link={[
        { rel: 'stylesheet', href: '/css/styles.min.css' }
      ]}
    />
    <h1>App</h1>
    <ul>
      <li>
        <Link to="/" className={styles['text-primary']}>Landing</Link>
      </li>
      <li>
        <Link to="/about" className={styles['text-primary']}>About</Link>
      </li>
    </ul>
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
