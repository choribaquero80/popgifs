import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import store from "./app/store/store";

import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Body from './app/components/Body';
import ImagesListScreen from './app/components/ImagesListScreen';
import ImageDetailScreen from './app/containers/ImageDetailScreen';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Body>
          <Route exact path="/" component={ImagesListScreen} />
          <Route path="/gif/:id" component={ImageDetailScreen} />
        </Body>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
