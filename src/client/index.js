import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import App from '../shared/containers/App';

const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('../shared/containers/App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('../shared/containers/App').default;

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
