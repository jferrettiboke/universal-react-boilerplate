import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from '../shared/routes'

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '/../../dist/public')))

app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props} />)
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Universal React Boilerplate</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
   `
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
