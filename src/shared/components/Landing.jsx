import React from 'react'
import Helmet from 'react-helmet'

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Landing"
          meta={[
            {"name": "description", "content": "Landing"}
          ]}
        />
      Landing
      </div>
    )
  }
}
