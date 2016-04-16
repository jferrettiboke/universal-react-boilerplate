import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet htmlAttributes={{"lang": "en"}} />
        <h1>App</h1>
        <ul role="nav">
          <li><Link to="/">Landing</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
