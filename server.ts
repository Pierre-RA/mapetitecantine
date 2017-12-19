import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import * as request from 'request-promise';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Express Rest API endpoints
const fbToken = 'EAAW5eOtT3B0BAO2DhcIlz2HjQfnZCZAoo6Kbr7nLWNwXFHrXqIigYhDGObZAJUYg8Gfz1856hnBEmK5cUq2uPYCwxuXfNZBHS2dRhgJBDJkCZB614ormsIX' +
  'iKTDj2D4txcjLV8lzjjoc1WcT62J8FRxFeoN3r0i9rB9rOSzLQpVsnwTK4Sp6o3CZAK2V9fy6oZD';
const pageId = '1289349467835561';
app.get('/api/', (req, res) => {
  res.json({
    message: 'Simple API'
  });
});

app.get('/api/feed', (req, res) => {
  request({
    method: 'GET',
    uri: 'https://graph.facebook.com/' + pageId +
      '/feed?fields=fan_count,name,id,link,picture&locale=fr_FR&access_token=' + fbToken,
    json: true
  }).then(data => {
    res.json(data);
  }).catch(err => {
    res.status(400).json(err);
  });
});

app.get('/api/feed/self', (req, res) => {
  request({
    method: 'GET',
    uri: 'https://graph.facebook.com/' + pageId +
      '?fields=created_time,message,story,admin_creator,id,caption,full_picture&locale=fr_FR&access_token=' + fbToken,
    json: true
  }).then(data => {
    res.json(data);
  }).catch(err => {
    res.status(400).json(err);
  });
});

app.get('/api/feed/:id', (req, res) => {
  request({
    method: 'GET',
    uri: 'https://graph.facebook.com/' + req.params.id +
      '?fields=actions,description,full_picture,picture,story,created_time&access_token=' + fbToken,
    json: true
  }).then(data => {
    res.json(data);
  }).catch(err => {
    res.status(400).json(err);
  });
});


// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '1y'
}));

// ALl regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
