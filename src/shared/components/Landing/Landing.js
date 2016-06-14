import React from 'react';
import Helmet from 'react-helmet';

export default () => (
  <div>
    <Helmet
      title="Landing"
      meta={[
        { name: 'description', content: 'Landing' }
      ]}
    />
    Landing
  </div>
);
