import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import Root from '../shared/containers/Root';

const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('../shared/containers/App', () => {
    render(
      <AppContainer>
        <Root />
      </AppContainer>,
      rootEl
    );
  });
}
