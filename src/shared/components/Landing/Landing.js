import React from 'react';
import Helmet from 'react-helmet';
import Counter from '../../containers/Counter';

export default () => (
  <div>
    <Helmet
      title="Landing"
      meta={[
        { name: 'description', content: 'Landing' }
      ]}
    />
    Landing
    <Counter />
  </div>
);
