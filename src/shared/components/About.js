import React from 'react';
import Helmet from 'react-helmet';

export default () => (
  <div>
    <Helmet
      title="About"
      meta={[
        { name: 'description', content: 'About' }
      ]}
    />
    About
  </div>
);
