import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import configureStore from '../shared/store/configureStore';
import routes from '../shared/routes';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/../../dist/public')));

function renderPage(appHtml, head, initialState) {
  return `
    <!DOCTYPE html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8" />
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
}

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const store = configureStore({});
      const appHtml = renderToString(
        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>
      );
      const initialState = store.getState();
      const head = Helmet.rewind();
      res.send(renderPage(appHtml, head, initialState));
    } else {
      res.status(404).send('Not Found');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
