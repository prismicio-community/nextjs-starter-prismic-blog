const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();

const Prismic = require('prismic-javascript');
const { apiEndpoint, linkResolver } = require('./prismic-configuration');

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/preview', (req, res) => {
      const token = req.query.token;

      Prismic.getApi(apiEndpoint, {req})
        .then((api) => api.previewSession(token, linkResolver, '/'))
        .then((url) => {
          res.redirect(302, url);
        });
    });

    server.get('/blog/:uid', (req, res) => {
      const nextJsPage = '/post';
      const queryParams = { uid: req.params.uid };
      app.render(req, res, nextJsPage, queryParams);
    });
    
    server.get('/blog', (req, res) => {
      res.redirect(302, '/');
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready http://localhost:3000 <');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });