import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import counter from './counter';
import App from './app/App'
import { renderToString } from 'react-dom/server'
import template from './template';

const app = Express();
const port = 3000;
const config = require('../webpack.config.js');
const compiler = webpack(config);
app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true },
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

app.use('/assets', Express.static('dist/assets'));
// This is fired every time the server side receives a request
app.use('*', handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
  /* ... */

  //create new redux store
  const store = createStore(counter);
  console.log(store);

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const finalState = store.getState()
  console.log(html);

  res.send(template({
    body: html,
    title: "test",
    initialState: JSON.stringify(finalState)
  }));
}

app.listen(port);
console.log(`Listning on http://localhost:${port}`);